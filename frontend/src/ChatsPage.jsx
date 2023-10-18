import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
   
    return (
        <div style={{ height: '100vh'}}>
            <PrettyChatWindow
            projectId='977cf4a9-2b16-443b-a2d0-32633e1b68f9'
            username={props.user.username}
            secret={props.user.username}
            style={{height: '100%'}}
        />
        </div>
    )
}

export default ChatsPage