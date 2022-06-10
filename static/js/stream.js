const app_id='84d30df4ea67445f8373b0557ffeb977'
const channel='meet'
const token='00684d30df4ea67445f8373b0557ffeb977IADeMcN1KYdRWgFCCumfDrf85iyTqKpSvbiE+WGJHXnlRM7T9ukAAAAAEACKRNzQfF+fYgEAAQB7X59i'

const client= AgoraRTC.createClient({mode:'rtc',codec:'vp8'})

let localTrack=[]
let remoteTrack={}
let uid;

let joinAndDisplayLocalStream= async () =>{
    client.on('user-published',handleNewUser)
    uid= await client.join(app_id,channel,token,null)
    localTrack= await AgoraRTC.createMicrophoneAndCameraTracks()
    
    let player=`<div class="stream" id="stream_${uid}">
                    <div class="username_container"><span class="user_name">UserName</span></div>
                    <div class="player" id="user_${uid}">
                    </div>
                </div>`

    document.getElementById("video_streams").insertAdjacentHTML("beforeend",player)
    localTrack[1].play(`user_${uid}`);
    await client.publish(localTrack[0],localTrack[1])

}

let handleNewUser = as

joinAndDisplayLocalStream()