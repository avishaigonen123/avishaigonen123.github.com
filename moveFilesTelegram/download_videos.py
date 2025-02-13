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

download_dir=r"C:\Users\avish\gps_work\input_dir\try\videos"

async def download_videos():
    # Create a TelegramClient instance
    client = TelegramClient(session_name, api_id, api_hash)

    try:
        # Connect to the Telegram server
        await client.start()

        # Get messages containing videos from the source channel
        async for message in client.iter_messages(source_channel_id):
            # Check if the message contains media (document with video attributes)
            if message.media and isinstance(message.media, types.MessageMediaDocument):
                document = message.media.document
                if isinstance(document, types.Document) and document.mime_type.startswith('video/'):
                    # Download the video file with retry logic
                    video_path = os.path.join(download_dir, f'{message.id}.mp4')  # Unique filename based on message ID
                    retry_count = 3  # Number of retries
                    while retry_count > 0:
                        try:
                            await client.download_media(message, file=video_path)
                            print(f"Downloaded: {video_path}")
                            break  # Break the retry loop if download succeeds
                        except errors.FloodWaitError as e:
                            # Handle FloodWaitError (usually wait a few seconds before retrying)
                            print(f"Flood wait error. Waiting for {e.seconds} seconds...")
                            await asyncio.sleep(e.seconds)
                        except errors.RPCError as e:
                            # Handle other RPC errors
                            print(f"RPC error occurred: {e}")
                            retry_count -= 1
                            if retry_count > 0:
                                print(f"Retrying ({retry_count} attempts left)...")
                            else:
                                print("Retry limit reached. Skipping this message.")
                                break

    except Exception as e:
        print(f"Error occurred: {e}")

    finally:
        # Disconnect the client
        await client.disconnect()

# Create the download directory if it doesn't exist
os.makedirs(download_dir, exist_ok=True)

# Run the async download_videos function
loop = asyncio.get_event_loop()
loop.run_until_complete(download_videos())