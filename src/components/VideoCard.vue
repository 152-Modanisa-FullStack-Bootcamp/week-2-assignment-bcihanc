<template>
  <div class="video-list">
    <div class="video-card-container" v-for="video in getAllVideos" :key="video.id">
      <div class="clickable" @click="pushToWatch(video.id)" >
        <cover-image :coverImage="video.coverImage" :hover-image="video.hoverImage"></cover-image>
        <div class="video-info-container">
          <owner-image :owner-image="video.ownerImage"></owner-image>
          <div class="video-desc-container">
            <video-title :title="video.title"></video-title>
            <owner-name :owner-name="video.ownerName"></owner-name>
            <div class="video-stat-container">
              <view-count :view-count="video.viewCount"></view-count>
              <publish-date-in-month :publish-date-in-month="video.publishDateInMonth"></publish-date-in-month>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

import CoverImage from "@/components/CoverImage";
import OwnerImage from "@/components/OwnerImage";
import VideoTitle from "@/components/VideoTitle";
import OwnerName from "@/components/OwnerName";
import ViewCount from "@/components/ViewCount";
import PublishDateInMonth from "@/components/PublishDateInMonth";
import {mapGetters} from "vuex"

export default {
  name: "VideoCard",
  components: {
    CoverImage,
    OwnerImage,
    VideoTitle,
    OwnerName,
    ViewCount,
    PublishDateInMonth,
  },
  computed: {
    ...mapGetters(["getAllVideos"]),
  },
  methods: {
    pushToWatch(videoId){
      this.$router.push({path: "/watch/" + videoId})
    }
  }
}
</script>

<style scoped>
.clickable {
  cursor: pointer;
}

.video-list {
  display: flex;
  /*flex-direction: row;*/
  flex-wrap: wrap;
}

.video-card-container {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 360px;
  margin: 16px;
}

.video-info-container {
  display: flex;
  flex-direction: row;
  padding-top: 12px;
}

.video-desc-container {
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.video-stat-container {
  display: flex;
  flex-direction: row;
}
</style>
