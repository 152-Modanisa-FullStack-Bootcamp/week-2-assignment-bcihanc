<template>
  <div class="video-list">
    <div class="row-container" v-for="video in getFavoritesVideos" :key="video.id">
      <cover-image :coverImage="video.coverImage" :hover-image="video.hoverImage"></cover-image>
      <div class="column-container">
        <video-title :title="video.title"></video-title>
        <div class="video-info-container">
          <view-count :view-count="video.viewCount"></view-count>
          <publish-date-in-month :publish-date-in-month="video.publishDateInMonth"></publish-date-in-month>
        </div>
        <div class="centered-row-container">
          <owner-image :owner-image="video.ownerImage"></owner-image>
          <owner-name :owner-name="video.ownerName"></owner-name>
        </div>
        <video-description :description="video.description"></video-description>
      </div>
    </div>
  </div>
</template>

<script>

import CoverImage from "@/components/CoverImage";
import VideoTitle from "@/components/VideoTitle";
import ViewCount from "@/components/ViewCount";
import PublishDateInMonth from "@/components/PublishDateInMonth";
import OwnerImage from "@/components/OwnerImage";
import OwnerName from "@/components/OwnerName";
import VideoDescription from "@/components/VideoDescription";
import {mapGetters} from "vuex";

export default {
  name: "FavoritesCard",
  components: {
    CoverImage,
    VideoTitle,
    ViewCount,
    PublishDateInMonth,
    OwnerImage,
    OwnerName,
    VideoDescription
  },
  computed: {
    ...mapGetters(["getFavoritesVideos"])
  }
}
</script>

<style scoped>

.video-list {
  display: flex;
  flex-direction: column;
}

.row-container {
  display: flex;
  flex-direction: row;
  padding: 8px 16px;
}

.video-info-container {
  display: flex;
  flex-direction: row;
}

.centered-row-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.column-container {
  display: flex;
  flex-direction: column;
  padding-left: 16px;
}
</style>
