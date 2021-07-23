<!-- icon组件 后期会全局替换 -->
<!--
  <icon
    type="icon-jiaocheng2"
    @click="handleClick"
    style="font-size:28px;"
  />
 -->
<template>
  <span
    role="img"
    v-bind="$attrs"
    :ref="ref"
    :tabIndex="iconTabIndex"
    @click="$emit('click')"
    :class="classString"
  >
    <svg v-if="type" v-bind="innerSvgProps" :viewBox="viewBox" >
      <use :xlink:href="`#${this.type}`"></use>
    </svg>
    <slot></slot>
  </span>
</template>

<script>
import './index.css'
const svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false'
}

// attr 父作用域中当前组件绑定的属性，不包括在当前组件里面用props接收的属性
// 有了 inheritAttrs: false 和 $attrs，你就可以手动决定这些 attribute 会被赋予哪个元素。在撰写基础组件的时候是常会用到的：
export default {
  name:'md-icon',
  inheritAttrs: false,
  props: {
    // 从iconfont项目内直接复制粘贴即可 iconfont的类型
    type: String,
    // syvg元素的class 设置在span元素上
    // use的font-size设置为1em，一般icon的font-size可以在此class内设置
    class: {
      type: String,
      default: ''
    },
    // svg元素的style 设置在span元素上
    style: {
      type: String,
      default: ''
    },
    // 是否处于loading状态 为true时icon会旋转
    spin: {
      type: Boolean,
      default: false
    },
    // 旋转度数
    rotate: {
      type: Number,
      default: 0
    },
    // svg伸缩属性设置
    viewBox: String,
    // 实例
    ref: String
  },

  computed: {
    // svg的props
    innerSvgProps () {
      const svgClassString = [
        this.spin ? 'md-anticon-spin' : ''
      ]
      const svgStyle = this.rotate
        ? {
          msTransform: `rotate(${this.rotate}deg)`,
          transform: `rotate(${this.rotate}deg)`
        } : undefined
      return Object.assign(
        svgBaseProps,
        this.viewBox && { viewBox: this.viewBox },
        {
          class: svgClassString,
          style: svgStyle
        }
        , {})
    },
    // tabindex 通过索引控制 css属性
    iconTabIndex () {
      let iconTabIndex = this.tabIndex
      if (iconTabIndex === undefined && this.onClick) {
        iconTabIndex = -1
      }
      return iconTabIndex
    },
    // span属性的class
    classString () {
      return ['md-anticon', this.class || '']
    }
  }
}

</script>
