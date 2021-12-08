// A $( document ).ready() block.
$(document).ready(function () {
  //console.log("ready!");

  $("#ngy2p").nanogallery2({
    thumbnailWidth: "300",
    thumbnailBorderVertical: 0,
    thumbnailBorderHorizontal: 0,
    thumbnailLabel: {
      position: "overImageOnBottom"
    },
    thumbnailHoverEffect2: "imageBlurOn|imageGrayOff",
    thumbnailGutterWidth: 15,
    thumbnailGutterHeight: 15,
    thumbnailAlignment: "center",
    thumbnailOpenImage: true
  });
});
