<template>
  <div class="content">
    <CollapsibleSection>
      <RobotPreview :selectedRobot="selectedRobot" />
    </CollapsibleSection>
    <button class="add-to-cart" @click="addToCart">Add to Cart</button>
    <div class="top-row">
      <div :class="['top', 'part']">
        <PartSelector
          :parts="parts.heads"
          @part-selected="part => selectedRobot.head = part"
          position="top" />
      </div>
    </div>
    <div class="middle-row">
      <PartSelector
        :parts="parts.arms"
        @part-selected="part => selectedRobot.leftArm = part"
        position="left" />
      <PartSelector
        :parts="parts.torsos"
        @part-selected="part => selectedRobot.torso = part"
        position="center" />
      <PartSelector
        :parts="parts.arms"
        @part-selected="part => selectedRobot.rightArm = part"
        position="right" />
    </div>
    <div class="bottom-row">
      <PartSelector
        :parts="parts.bases"
        @part-selected="part => selectedRobot.base = part"
        position="bottom" />
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
import PartSelector from './PartSelector.vue';
import RobotPreview from './RobotPreview.vue';
import CollapsibleSection from '../shared/CollapsibleSection.vue';
import createdHookMixin from './created-hook-mixin';

export default {
  name: 'RobotBuilder',
  data() {
    return {
      parts,
      cart: [],
      selectedRobot: {
        head: {},
        leftArm: {},
        rightArm: {},
        torso: {},
        base: {},
      },
    };
  },
  mixins: [createdHookMixin],
  methods: {
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
  components: { PartSelector, RobotPreview, CollapsibleSection },
};
</script>

<style lang="scss" scoped>
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
</style>
