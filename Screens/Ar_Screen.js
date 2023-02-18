import React, {useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroTrackingStateConstants,
  ViroARSceneNavigator,
  ViroSkyBox,
  ViroImage,
  ViroVideo,
  ViroMaterials,
  ViroBox,
} from '@viro-community/react-viro';

const HelloWorldSceneAR = () => {
  const [text, setText] = useState('Initializing AR...');
  const ref = useRef(null);

  const [pause, setPause] = useState(false);

  function onInitialized(state, reason) {
    console.log('guncelleme', state, reason);
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText('Hello World!');
    } else if (state === ViroTrackingStateConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  const handleClickRestartVideo = () => {
    if (ref.current) ref.current.seekToTime(0);
  };

  ViroMaterials.createMaterials({
    chromaKeyFilteredVideo : {
      chromaKeyFilteringColor: "#00FF00"
    },
  });

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      {/* <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      /> */}
      {/* <ViroImage
    height={0.1}
    width={0.1}
    // placeholderSource={require("./res/local_spinner.jpg")}
    source={require('../Images/skeleton.jpg')}
/> */}
<ViroImage
  source={require('../Images/ar.png')}
  height={10}
  width={10}
  // loop={true}
  // paused={pause}
  
  // muted={false}
  position={[2,-10,-15]}
  // materials={["chromaKeyFilteredVideo"]}
/>
<ViroBox
  height={2}
  length={2}
  width={2}
  
/>

<ViroText
        position={[0,2,-5]}
        style={{fontSize: 20,backgroundColor: 'red'}}
        text="Pause"
        onClick={() => {
            console.log("Paused");
            setPause(true);
        }}
        transformBehaviors={["billboard"]}
        hitSlop={{top: 10, bottom: 10, left: 0, right: 0}}
      />
    </ViroARScene>
      
  );

  
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});