<template>
  <div id="photos" class="photos">
    <PhotosMainImage id="main-image" />
    <div id="Photos-content" class="Photos-content">
      <div id="photos-album-list-wrapper" class="photo-album-wrapper">
        <ul class="photo-album-list">
          <li
            id="photo-album"
            class="photo-album"
            v-for="album in albums"
            :key="album.id"
          >
            <div id="album-header-bar" class="album-header-bar">
              <h2 class="album-info left-album-header-info">
                {{ album.date }}
              </h2>
              <h2 class="album-info">
                {{ album.name }}
              </h2>
              <h2 class="album-info right-album-header-info">
                {{ `${album.photos.length} Photos` }}
              </h2>
            </div>
            <div id="photo-album-scroll" class="photo-album-scroll">
              <div class="image-display-container-margin">
                <div
                  id="image-display-container"
                  class="image-display-container"
                  v-for="(photo, index) in album.photos"
                  :key="index"
                >
                  <img
                    :src="require('../assets/' + photo)"
                    alt="image not found"
                    class="album-displayed-photo"
                  />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import PhotosMainImage from "./Photos-children/PhotosMainImage.vue";

export default {
  name: "Photos",
  components: { PhotosMainImage },
  data: function() {
    return {
      albums: []
    };
  },
  methods: {
    fetchAlbums: async function() {
      //TODO actually fetch list of albums
      this.albums = [
        {
          id: 0,
          name: "Developing the Website",
          date: "Winter 2021",
          photos: ["yes.png", "ricky1.jpg"]
        },
        {
          id: 1,
          name: "Memes",
          date: "Winter 2021",
          photos: [
            "yes.png",
            "yes.png",
            "yes.png",
            "yes.png",
            "yes.png",
            "yes.png",
            "yes.png",
            "yes.png",
            "yes.png",
            "yes.png",
            "yes.png",
            "yes.png"
          ]
        }
      ];
    },

    fetchAlbumPhotos: async function(album) {
      //TODO fetch photos from album
      return album;
    }
  },
  mounted: function() {
    this.fetchAlbums();
    for (let album in this.albums) this.fetchAlbumPhotos(album);
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap'); 
@import './styles/Photos.scss';
</style>