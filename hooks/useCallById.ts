import { Call, StreamVideo, StreamVideoClient, useStreamVideoClient } from "@stream-io/video-react-sdk"
import { useEffect, useLayoutEffect, useState } from "react"

export const useCallById = (id: string | string[]) =>
{
    const [Call, setCall] = useState<Call>()
    const [isCallLoading, setisCallLoading] = useState(true)

    const client = useStreamVideoClient();


    useEffect(() => {
        if(!client) return;

        const loadCall = async () => {
            const { calls } = await client.queryCalls({
                filter_conditions: {
                    id
                }
            })

            if(calls.length >0) setCall(calls[0]);

            setisCallLoading(false)
        }

        loadCall();
    }, [client, id]);

    return{ Call, isCallLoading};
    
}