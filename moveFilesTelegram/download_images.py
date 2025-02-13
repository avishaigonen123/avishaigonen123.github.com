import os
import asyncio
from telethon import TelegramClient, events, types

# Replace '22426045' and 'e7b8ee99e8bf9c36984d18f1baae5591' with your actual API ID and API hash
api_id = 22426045
api_hash = 'e7b8ee99e8bf9c36984d18f1baae5591'

# Replace 'mySession' with a unique session name
session_name = 'new_session'

# Replace '-1001225997106' with the actual chat ID of the source channel
source_channel_id = -1002027365084

download_dir=r"C:\Users\avish\gps_work\input_dir\try\images"

async def download_images():
    # Create a TelegramClient instance
    client = TelegramClient(session_name, api_id, api_hash)

    try:
        # Connect to the Telegram server
        await client.start()

        # Get messages containing images from the source channel
        async for message in client.iter_messages(source_channel_id):
            # Check if the message contains media (photo or document)
            if message.media and isinstance(message.media, types.MessageMediaPhoto):
                # Download the image file
                image_path = os.path.join(download_dir, f'{message.id}.jpg')  # Unique filename based on message ID
                await client.download_media(message, file=image_path)

                print(f"Downloaded: {image_path}")

    except Exception as e:
        print(f"Error occurred: {e}")

    finally:
        # Disconnect the client
        await client.disconnect()

# Create the download directory if it doesn't exist
os.makedirs(download_dir, exist_ok=True)

# Run the async download_images function
loop = asyncio.get_event_loop()
loop.run_until_complete(download_images())