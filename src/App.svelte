<script>
// @ts-nocheck

  import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';

  let controlsLayout = [
    'previousFrame',
    'playpause',
    'stop',
    'nextFrame',
    'progress',
    'frame',
    'loop',
    'spacer',
    'background',
    'snapshot',
    'zoom',
    'info',
  ];
    
</script>

<main>
  <LottiePlayer
    src="https://underwater.s3.us-west-2.amazonaws.com/uw.json"
    autoplay="{true}"
    loop="{true}"
    controls="{true}"
    renderer="svg"
    background="transparent"
    height="{600}"
    width="{600}"
    controlsLayout="{controlsLayout}"
   />
</main>

<style lang="scss">
  @import "../public/global.scss";

</style>
