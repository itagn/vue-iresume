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
          <div class="iresume-box-title">{{ modules.moduleName }}</div>
          <div class="iresume-box-content" v-if="modules.moduleType === 0">
            <ul>
              <li v-for="(data, j) in modules.data" :key="j">
                {{ data.name }}: {{ data.value }}
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
                {{ data }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="iresume-right">
        <div class="iresume-box" v-for="(modules, i) in user.rightModules" :key="i">
          <div class="iresume-box-title">{{ modules.moduleName }}</div>
          <div class="iresume-hr"></div>
          <div class="iresume-box-content" v-if="modules.moduleType === 0">
            <ul>
              <li v-for="(data, j) in modules.data" :key="j">
                <strong>{{ data.name }}</strong>: <span class="iresume-infomation">{{ data.value }}</span>
              </li>
            </ul>
          </div>
          <div class="iresume-box-content" v-else-if="modules.moduleType === 1">
            <ul>
              <li v-for="(data, j) in modules.data" :key="j">
                <div>
                  <span class="iresume-project">{{ data.name }}</span>
                  <span class="iresume-enterprise-time">({{ data.startTime }} ~ {{ data.endTime }})</span>
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
              <li v-for="(data, j) in modules.data" :key="j">
                <div>
                  <span class="iresume-project">{{ data.name }}
                    <span v-if="data.url" class="iresume-project-url">
                      <a @click="hrefTo(project.url)">链接</a>
                    </span>
                  </span>
                  <span class="iresume-enterprise-time">({{ data.startTime }} ~ {{ data.endTime }})</span>
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
</style>