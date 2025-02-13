import re

from telethon import TelegramClient, events, types
from datetime import datetime

# Replace '22426045' and 'e7b8ee99e8bf9c36984d18f1baae5591' with your actual API ID and API hash
api_id = 22426045
api_hash = 'e7b8ee99e8bf9c36984d18f1baae5591'

# Replace 'mySession' with a unique session name
session_name = 'gonenSession'

# Replace '-1001300814792' with the actual chat ID of the source channel
source_channel_id = -1001225997106

# Replace '-1002027365084' with the actual chat ID of your bot's channel
destination_channel_id = -1002144085406

# Create a TelegramClient instance
client = TelegramClient(session_name, api_id, api_hash)


async def clear_messages():
    messages = await client.get_messages(destination_channel_id, limit=None)  # Set limit to the number of messages you want to retrieve

    # Delete each message in the channel
    for message in messages:
        await client.delete_messages(destination_channel_id, message.id)

    print("All messages deleted.")


async def main():
    # Connect to the Telegram server
    await client.connect()

    # If the user is not authorized, send the code to the phone
    if not await client.is_user_authorized():
        await client.send_code_request("+972585328077")
        await client.sign_in("+972585328077", input('Enter the code: '))
    # clear all messages
    await clear_messages()

    # Replace 'start_date' and 'end_date' with the specific date range you want to retrieve messages
    start_date = datetime(2023, 5, 5)  # Replace with your desired start date
    end_date = datetime(2023, 5, 6)  # Replace with your desired end date

    # search_string = 'חברים בחווה'
    search_string = 'איש משפחה'

    messages = await client.get_messages(source_channel_id, search=search_string, limit=300,
                                         offset_date=end_date)  # Set limit to the number of messages you want to retrieve
    # it goes from end_date backward.
    # Send the messages
    print("messages")
    for message in messages:
        print(message.date)
        await client.send_message(destination_channel_id, message)

    # Get all messages from the supergroup
  #  messages = await client.get_messages(source_channel_id,search=search_string, limit=174,
   #                                      offset_date=end_date)  # Set limit to the number of messages you want to retrieve
# it goes from end_date backward.
    # Send the messages
  #  print("messages")
  #  for message in messages:
  #      print(message.date)
  #      await client.send_message(destination_channel_id, message)


# Run the main function
client.loop.run_until_complete(main())

# Disconnect the client
client.disconnect()
