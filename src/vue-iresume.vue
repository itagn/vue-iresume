<template>
  <div class="iresumex">
    <div class="iresume">
      <div class="iresume-left">
        <div class="iresume-avatars">
          <img :src="user.avatars" alt="avatars">
        </div>
        <div class="iresume-username">
          {{ user.name }}的简历
        </div>
        <div class="iresume-box" v-for="(modules, i) in user.leftModules" :key="i">
          <div class="iresume-box-title">
            <i class="icon-star icon-mid"/>
            <span class="iresume-box-txt">{{ modules.moduleName }}</span>
          </div>
          <div class="iresume-box-content" v-if="modules.moduleType === 0">
            <ul>
              <li v-for="(data, j) in modules.data" :key="j" class="concat-box">
                <i :class="getMidIcon(data.icon)" v-if="data.icon"/>
                <span class="concat-txt">{{ data.name }}：
                  <span v-if="data.url" @click="hrefTo(data.url)">
                    {{ data.value }}
                    <i class="icon-small icon-link iresume-pointer concat-icon" />
                  </span>
                  <span v-else>{{ data.value }}</span>
                </span>
              </li>
            </ul>
          </div>
          <div class="iresume-box-content" v-else-if="modules.moduleType === 1">
            <ul>
              <li v-for="(data, j) in modules.data" :key="j">
                {{ data }}
              </li>
            </ul>
          </div>
          <div class="iresume-box-content" v-else-if="modules.moduleType === 2">
            <ul>
              <li v-for="(data, j) in modules.data" :key="j">
                <div class="iresume-box-article">{{ data }}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="iresume-right">
        <div class="iresume-box" v-for="(modules, i) in user.rightModules" :key="i">
          <div class="iresume-box-title">
            <i class="icon-star2 icon-mid"/>
            <span class="iresume-box-txt">{{ modules.moduleName }}</span>
          </div>
          <div class="iresume-hr"></div>
          <div class="iresume-box-content" v-if="modules.moduleType === 0">
            <ul>
              <li v-for="(data, j) in modules.data" :key="j" class="concat-box">
                <i :class="getMidIcon(data.icon)" v-if="data.icon"/>
                <span class="concat-txt">{{ data.name }}：<span class="iresume-infomation">{{ data.value }}</span></span>
              </li>
            </ul>
          </div>
          <div class="iresume-box-content" v-else-if="modules.moduleType === 1">
            <ul>
              <li v-for="(data, j) in modules.data" :key="j">
                <div class="iresume-box-head">
                  <span class="iresume-project">
                    <span class="iresume-project-title">
                      <i class="icon-company icon-small"/>
                      {{ data.name }}
                    </span>
                    <span v-if="data.url" class="iresume-project-url iresume-pointer">
                      <i class="icon-link icon-small" @click="hrefTo(data.url)"/>
                    </span>
                  </span>
                  <span class="iresume-enterprise-time">{{ data.startTime }} ~ {{ data.endTime }}</span>
                </div>
                <div class="iresume-box-box" v-for="(mini, k) in data.miniModule" :key="k">
                  <div class="iresume-mini-title iresume-mini">{{ mini.miniName }}</div>
                  <div class="iresume-enterprise-content iresume-mini">
                    <ol>
                      <li v-for="(val, l) in mini.data" :key="l">
                        {{ val }}
                      </li>
                    </ol>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="iresume-box-content" v-else-if="modules.moduleType === 2">
            <ul>
              <li v-for="(data, j) in modules.data" :key="j" :class="j !== modules.data.length-1 ? 'box-bottom' : ''">
                <div class="iresume-box-head">
                  <span class="iresume-project">
                    <span class="iresume-project-title">
                      <i :class="getSmallIcon(modules.icon)" v-if="modules.icon"/>
                      {{ data.name }}
                    </span>
                    <span v-if="data.url" class="iresume-project-url iresume-pointer">
                      <i class="icon-link icon-small" @click="hrefTo(data.url)"/>
                    </span>
                  </span>
                  <span class="iresume-enterprise-time">{{ data.startTime }} ~ {{ data.endTime }}</span>
                </div>
                <div class="iresume-box-box" v-for="(mini, k) in data.miniModule" :key="k">
                  <div class="iresume-mini-title iresume-mini">{{ mini.miniName }}</div>
                  <div class="iresume-box-article iresume-mini">{{ mini.data }}</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="iresume-box-content" v-else-if="modules.moduleType === 3">
            <ol>
              <li v-for="(data, j) in modules.data" :key="j">
                {{ data }}
              </li>
            </ol>
          </div>
          <div class="iresume-box-content" v-else-if="modules.moduleType === 4">
            <div class="iresume-box-article iresume-mini" v-for="(val, k) in modules.data" :key="k">
              {{ val }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./source/js/core.js"></script>
<style scoped>
@import url('./source/css/index.css');
@import url('./source/font/style.css');
</style>