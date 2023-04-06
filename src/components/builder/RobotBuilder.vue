<template>
  <div class="content">
    <button class="add-to-cart" @click="addToCart">Add to Cart</button>
    <div class="top-row">
      <div class="top part">
        <div class="robot-head">
          {{ selectedRobot.head.title }}
          <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
        </div>
        <img alt="" :src="selectedRobot.head.src" title="head"/>
        <button @click="selectPreviousHead" class="prev-selector">&#9668;</button>
        <button @click="selectNextHead" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img alt="" :src="selectedRobot.leftArm.src" title="left arm"/>
        <button @click="selectPreviousLeftArm" class="prev-selector">&#9650;</button>
        <button @click="selectNextLeftArm" class="next-selector">&#9660;</button>
      </div>
      <div class="center part">
        <img alt="" :src="selectedRobot.torso.src" title="left arm"/>
        <button @click="selectPreviousTorso" class="prev-selector">&#9668;</button>
        <button @click="selectNextTorso" class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img alt="" :src="selectedRobot.rightArm.src"  title="left arm"/>
        <button @click="selectPreviousRightArm" class="prev-selector">&#9650;</button>
        <button @click="selectNextRightArm" class="next-selector">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img alt="" :src="selectedRobot.base.src" title="left arm"/>
        <button @click="selectPreviousBase" class="prev-selector">&#9668;</button>
        <button @click="selectNextBase" class="next-selector">&#9658;</button>
      </div>
    </div>

    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Robot</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, index) in cart" :key="index">
            <td>{{ robot.head.title }}</td>
            <td class="cost">{{  robot.cost }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
import parts from '../../data/parts';

export default {
  name: 'RobotBuilder',
  data() {
    return {
      parts,
      cart: [],
      selectedHeadIndex: 0,
      selectedLeftArmIndex: 0,
      selectedRightArmIndex: 0,
      selectedTorsoIndex: 0,
      selectedBaseIndex: 0,
    };
  },
  computed: {
    selectedRobot() {
      return {
        head: this.parts.heads[this.selectedHeadIndex],
        leftArm: this.parts.arms[this.selectedLeftArmIndex],
        rightArm: this.parts.arms[this.selectedRightArmIndex],
        torso: this.parts.torsos[this.selectedTorsoIndex],
        base: this.parts.bases[this.selectedBaseIndex],
      };
    },
  },
  methods: {
    selectNextHead() {
      this.selectedHeadIndex = (this.selectedHeadIndex + 1) % this.parts.heads.length;
    },
    selectPreviousHead() {
      this.selectedHeadIndex = (this.selectedHeadIndex - 1 + this.parts.heads.length)
      % this.parts.heads.length;
    },
    selectNextLeftArm() {
      this.selectedLeftArmIndex = (this.selectedLeftArmIndex + 1) % this.parts.arms.length;
    },
    selectPreviousLeftArm() {
      this.selectedLeftArmIndex = (this.selectedLeftArmIndex - 1 + this.parts.arms.length)
      % this.parts.arms.length;
    },
    selectNextRightArm() {
      this.selectedRightArmIndex = (this.selectedRightArmIndex + 1) % this.parts.arms.length;
    },
    selectPreviousRightArm() {
      this.selectedRightArmIndex = (this.selectedRightArmIndex - 1 + this.parts.arms.length)
      % this.parts.arms.length;
    },
    selectNextTorso() {
      this.selectedTorsoIndex = (this.selectedTorsoIndex + 1) % this.parts.torsos.length;
    },
    selectPreviousTorso() {
      this.selectedTorsoIndex = (this.selectedTorsoIndex - 1 + this.parts.torsos.length)
      % this.parts.torsos.length;
    },
    selectNextBase() {
      this.selectedBaseIndex = (this.selectedBaseIndex + 1) % this.parts.bases.length;
    },
    selectPreviousBase() {
      this.selectedBaseIndex = (this.selectedBaseIndex - 1 + this.parts.bases.length)
      % this.parts.bases.length;
    },
    addToCart() {
      const robot = this.selectedRobot;
      const cost = robot.head.cost
      + robot.leftArm.cost
      + robot.rightArm.cost
      + robot.torso.cost
      + robot.base.cost;

      this.cart.push({ ...robot, cost });
    },
  },
};
</script>

<style scoped>
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
}
.part img {
  width:165px;
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
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}

.robot-head {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}

.sale {
  color: red;
  font-size: 0.8em;
  font-weight: bold;
}

.content {
  position: relative;
}

.add-to-cart {
  position: absolute;
  right: 30px;
  width: 220px;
  padding: 3px;
  font-size: 16px;
}

td, th {
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}

.cost {
  text-align: right;
}
</style>