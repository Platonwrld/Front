import configparser
import json
from telethon.sync import TelegramClient
from telethon import connection
from datetime import date, datetime
from telethon.tl.functions.channels import GetParticipantsRequest
from telethon.tl.types import ChannelParticipantsSearch
from telethon.tl.functions.messages import GetHistoryRequest
import time
import sys


config = configparser.ConfigParser()
config.read("config.ini")   # в этот файл заносятся данные, без кавычек

api_id   = config['Telegram']['api_id']
api_hash = config['Telegram']['api_hash']
username = config['Telegram']['username']

client = TelegramClient(username, api_id, api_hash)

client.start()


async def dump_all_participants(channel):

	offset_user = 0    
	limit_user = 100   

	all_participants = []  
	filter_user = ChannelParticipantsSearch('')

	while True:
		participants = await client(GetParticipantsRequest(channel,
			filter_user, offset_user, limit_user, hash=0))
		if not participants.users:
			break
		all_participants.extend(participants.users)
		offset_user += len(participants.users)

	all_users_details = []   

	for participant in all_participants:

		all_users_details.append({"id": participant.id,
			# "first_name": participant.first_name,
			# "last_name": participant.last_name,
			"user": participant.username,
			#"phone": participant.phone,
			# "is_bot": participant.bot
            })

	with open('channel_users.json', 'w', encoding='utf8') as outfile:
		json.dump(all_users_details, outfile, ensure_ascii=False)


msgtosend = 'Сообщение для спама'
timer = 3
json_file = "channel_users.json"

users = []

with open(json_file, encoding='utf-8', errors='ignore') as json_data:
    data = json.load(json_data, strict=False)

for i in data:
    users.append(i.get('user'))

lena = len(users)
index = 0

for user in users:
    try:
        while lena > index:
            for user in users:
                msg = client.send_message(user, msgtosend)
                print("Отправлено, ждем " + str(timer) + " секунд")
                time.sleep(timer)
                index += 1
        
    except:
        print("Что-то пошло не так")


async def main():

	url = input("Введите ссылку на канал или чат: ")
	channel = await client.get_entity(url)
	await dump_all_participants(channel)


with client:
	client.loop.run_until_complete(main())
