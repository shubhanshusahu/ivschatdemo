import AWS from 'aws-sdk';
import React, { useEffect, useRef } from 'react';

const IVSChat = ({ channelArn }:any) => {
  const chatRef = useRef(document.createElement("iframe"));
  AWS.config.update({
    accessKeyId: 'AKIAZEJDBXYSIY4OJNWL',
    secretAccessKey: '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',
    region: 'ap-south-1',
  });

  useEffect(() => {
    const ivs = new AWS.IVS();

    // ivs?.createChannelPresignedURL({ channelArn }, (err: any, data: { url: any; }) => {
    //   if (err) console.error('Error creating presigned URL:', err);
    //   else {
    //     const { url } = data;
    //     chatRef.current.src = url;
    //   }
    // });
  }, [channelArn]);

  return <iframe ref={chatRef} title="IVSChat" />;
};

export default IVSChat;