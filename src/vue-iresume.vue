<template>
  <div class="iresumex">
    <div :class="`iresume col${pNode.cols}`">
      <div v-if="pNode.cols!==1" class="iresume-left">
        <div v-if="pNode.avatars!==false" class="iresume-avatars">
          <img :src="user.avatars" alt="avatars" class="iresume-img">
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
                <i :class="getSmallIcon(data.icon)" v-if="data.icon"/>
                <span class="concat-txt">{{ data.name }}：{{ data.value }}</span>
                <i v-if="data.url" @click="hrefTo(data.url)" :title="data.url" class="icon-small icon-link" />
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
        <div v-if="pNode.cols===1 && pNode.avatars!==false" class="iresume-user-box">
          <div class="iresume-avatars">
            <img :src="user.avatars" alt="avatars" class="iresume-img">
          </div>
          <div class="iresume-username">
            {{ user.name }}的简历
          </div>
        </div>
        <div class="iresume-box" v-for="(modules, i) in user.rightModules" :key="i">
          <div class="iresume-box-title">
            <i class="icon-star icon-mid"/>
            <span class="iresume-box-txt">{{ modules.moduleName }}</span>
          </div>
          <div class="iresume-box-content" v-if="modules.moduleType === 0">
            <ul>
              <li v-for="(data, j) in modules.data" :key="j" class="info-box">
                <i :class="getSmallIcon(data.icon)" v-if="data.icon"/>
                <span class="concat-txt">{{ data.name }}：<span class="iresume-infomation">{{ data.value }}</span></span>
                <i v-if="data.url" @click="hrefTo(data.url)" :title="data.url" class="icon-small icon-link" />
              </li>
            </ul>
          </div>
          <div class="iresume-box-content" v-else-if="modules.moduleType === 1">
            <ul>
              <li v-for="(data, j) in modules.data" :key="j">
                <div class="iresume-box-head">
                  <span class="iresume-project">
                    <span class="iresume-project-title">
                      <i :class="getSmallIcon(modules.icon)" v-if="modules.icon"/>
                      {{ data.name }}
                    </span>
                    <i v-if="data.url" :title="data.url" class="icon-link icon-small" @click="hrefTo(data.url)"/>
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
                    <i v-if="data.url" :title="data.url" class="icon-link icon-small" @click="hrefTo(data.url)"/>
                  </span>
                  <span class="iresume-enterprise-time">{{ data.startTime }} ~ {{ data.endTime }}</span>
                </div>
                <div class="iresume-box-box" v-for="(mini, k) in data.miniModule" :key="k">
                  <div class="iresume-mini-title iresume-mini">{{ mini.miniName }}</div>
                  <div class="iresume-box-article iresume-mini">
                    <div v-for="(v, n) in mini.data" :key="n">{{ v }}</div>
                  </div>
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
            <div class="iresume-box-article" v-for="(val, k) in modules.data" :key="k">
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