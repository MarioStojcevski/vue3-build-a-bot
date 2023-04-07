<template>
    <div class="preview">
        <div class="preview-content">
        <div class="top-row">
            <img :alt="selectedRobot.title" :src="selectedRobot.head.src"/>
        </div>
        <div class="middle-row">
            <img :alt="selectedRobot.title" :src="selectedRobot.leftArm.src" class="rotate-left"/>
            <img :alt="selectedRobot.title" :src="selectedRobot.torso.src"/>
            <img :alt="selectedRobot.title" :src="selectedRobot.rightArm.src" class="rotate-right"/>
        </div>
        <div class="bottom-row">
            <img :alt="selectedRobot.title" :src="selectedRobot.base.src"/>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'RobotPreview',
  props: {
    selectedRobot: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.preview {
  position: absolute;
  top: 100px;
  right: 190px;
  width: 210px;
  height: 210px;
  padding: 5px;
}
.preview-content {
  border: 1px solid #999;
}
.preview img {
  width: 50px;
  height: 50px;
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}

.top-row {
  display:flex;
  justify-content: space-around;
}

.middle-row {
  display:flex;
  justify-content: center;
}

.bottom-row {
  display:flex;
  justify-content: center;
}
</style>
