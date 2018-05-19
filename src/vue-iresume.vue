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
        <div class="iresume-box" v-if="user.contacts.length > 0">
          <div class="iresume-box-title">联系方式</div>
          <div class="iresume-box-content">
            <ul>
              <li v-for="(contact, i) in user.contacts" :key="i">
                {{ contact.name }}: {{ contact.value }}
              </li>
            </ul>
          </div>
        </div>
        <div class="iresume-box" v-if="user.applications.length > 0">
          <div class="iresume-box-title">应聘岗位</div>
          <div class="iresume-box-content">
            <ul>
              <li v-for="(application, i) in user.applications" :key="i">
                {{ application }}
              </li>
            </ul>
          </div>
        </div>
        <div class="iresume-box" v-if="user.introductions.length > 0">
          <div class="iresume-box-title">个人评价</div>
          <div class="iresume-box-content">
            <ul>
              <li class="iresume-box-article" v-for="(introduction, i) in user.introductions" :key="i">
                {{ introduction }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="iresume-right">
        <div class="iresume-box" v-if="user.infomations.length > 0">
          <div class="iresume-box-title">基本信息</div>
          <div class="iresume-hr"></div>
          <div class="iresume-box-content">
            <ul>
              <li v-for="(infomation, i) in user.infomations" :key="i">
                <strong>{{ infomation.name }}</strong>: <span class="iresume-infomation">{{ infomation.value }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="iresume-box" v-if="user.enterprises.length > 0">
          <div class="iresume-box-title">工作经验</div>
          <div class="iresume-hr"></div>
          <div class="iresume-box-content">
            <ul>
              <li v-for="(enterprise, i) in user.enterprises" :key="i">
                <div>
                  <span class="iresume-project">{{ enterprise.name }}</span>
                  <span class="iresume-enterprise-time">({{ enterprise.startTime }} ~ {{ enterprise.endTime }})</span>
                </div>
                <div class="iresume-enterprise">
                  <div class="iresume-enterprise-title">工作内容</div>
                  <div class="iresume-enterprise-content">
                    <ol>
                      <li v-for="(job, j) in enterprise.jobs" :key="j">
                      {{ job }}
                      </li>
                    </ol>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="iresume-box" v-if="user.projects.length > 0">
          <div class="iresume-box-title">团队项目</div>
          <div class="iresume-hr"></div>
          <div class="iresume-box-content">
            <ul>
              <li v-for="(project, i) in user.projects" :key="i">
                <div>
                  <span class="iresume-project">{{ project.name }}
                    <span v-if="project.url" class="iresume-project-url">
                      <a @click="hrefTo(project.url)">链接</a>
                    </span>
                  </span>
                  <span class="iresume-enterprise-time">({{ project.startTime }} ~ {{ project.endTime }})</span>
                </div>
                <div class="iresume-box-box" v-if="project.introduction.length > 0">
                  <div class="iresume-mini-title iresume-mini">项目介绍</div>
                  <div class="iresume-box-article iresume-mini">{{ project.introduction }}</div>
                </div>
                <div class="iresume-box-box" v-if="project.working.length > 0">
                  <div class="iresume-mini-title iresume-mini">项目职责</div>
                  <div class="iresume-box-article iresume-mini">{{ project.working }}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="iresume-box" v-if="user.personalProjects.length > 0">
          <div class="iresume-box-title">个人项目</div>
          <div class="iresume-hr"></div>
          <div class="iresume-box-content">
            <ul>
              <li v-for="(project, i) in user.personalProjects" :key="i">
                <div>
                  <span class="iresume-project">{{ project.name }}
                    <span v-if="project.url" class="iresume-project-url">
                      <a @click="hrefTo(project.url)">链接</a>
                    </span>
                  </span>
                  <span class="iresume-enterprise-time">({{ project.startTime }} ~ {{ project.endTime }})</span>
                </div>
                <div class="iresume-box-box" v-if="project.introduction.length > 0">
                  <div class="iresume-mini-title iresume-mini">项目介绍</div>
                  <div class="iresume-box-article iresume-mini">{{ project.introduction }}</div>
                </div>
                <div class="iresume-box-box" v-if="project.working.length > 0">
                  <div class="iresume-mini-title iresume-mini">项目职责</div>
                  <div class="iresume-box-article iresume-mini">{{ project.working }}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="iresume-box" v-if="user.skills.length > 0">
          <div class="iresume-box-title">技能树</div>
          <div class="iresume-hr"></div>
          <div class="iresume-box-content">
            <ol>
              <li v-for="(skill, i) in user.skills" :key="i">
                {{ skill.name }}
              </li>
            </ol>
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