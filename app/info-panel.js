/* global AFRAME */
AFRAME.registerComponent("info-panel", {
  init: function () {
    var buttonEls = document.querySelectorAll(".menu-button");
    var fadeBackgroundEl = (this.fadeBackgroundEl =
      document.querySelector("#fadeBackground"));

    this.infoPlaneTitleEl = document.querySelector("#infoPlaneTitle");
    this.infoPlaneDescriptionEl = document.querySelector(
      "#infoPlaneDescription"
    );

    this.infoPlane = {
      im_Button1: {
        title:
          "Interior of the Church of St. Peter and Paul, view toward the former altar, photo by Jindřich Eckert, 1904",
        imgEl: document.querySelector("#apsidaImage"),
        description:
          "Here you can see the apse, which housed the altar. The apse, as the most sacred part of the church, was decorated most lavishly and attracted the attention of the faithful. The most important parts of the service, especially the celebration of the Eucharist, took place at the main altar. The altar has been preserved to this day. It was transferred to the Church of the Holy Trinity in Dublovice, and you can see a fragment of it in the picture above.",
      },
      im_Button2: {
        title:
          "Interior of the Church of St. Peter and Paul, view toward the gallery (organ loft), photo by Jindřich Eckert, 1904",
        imgEl: document.querySelector("#kruchtaImage"),
        description:
          "Here you can see the gallery (organ loft). It is an elevated balcony at the back of the church that served as musical accompaniment – for the organist or choir. A similar gallery can be found in St. Vitus Cathedral in Prague, where historical photographs show that the organ was located there. Organs were often placed on the western side, not only due to tradition but also because of acoustics. The sound from this elevated position spread evenly throughout the church, and the vaulted ceiling provided natural reverberation. Thanks to this, the music sounded majestic and was able to fill the entire interior with a powerful atmosphere.",
      },
      im_Button3: {
        title:
          "Photograph of the Church of Saints Peter and Paul at Zderaz from the south side, year 1890",
        imgEl: document.querySelector("#exterior_1890Image"),
        description:
          "The Church of Saints Peter and Paul at Zderaz was part of the monastery complex of the Order of the Crusaders — Guardians of the Holy Sepulchre — and was located in the area of today’s New Town of Prague, bounded by the streets Na Zderaze, Na Zbořenci, and Resslova. It was the only male monastery of this order in the Czech lands; the female branch operated in Světec near Teplice. From the original complex, only a few buildings have survived to the present day: the Baroque provostry building, the Chapel of the Holy Sepulchre, and fragments of arcades and other masonry in the surrounding houses. These remains are now protected as an immovable cultural monument.",
      },
      im_Button4: {
        title:
          "Magazine Ilustrovany svet, Chapel of the Holy Sepulchre at Zbořenec in Prague, year 1902",
        imgEl: document.querySelector("#kaple_imgImage"),
        description:
          "The Chapel of the Holy Sepulchre at Zderaz refers to the holy site in Jerusalem where Jesus Christ was laid after the crucifixion. The first church over the Holy Sepulchre was built by Emperor Constantine in the 4th century, with the tomb as a separate structure in the center. The Zderaz chapel is a traditional copy of the Jerusalem building, featuring Santini’s style in its curved apse wall and rich details. A similar Baroque chapel once stood nearby at the Church of St. Wenceslas but was demolished in the early 19th century.",
      },
      im_Button5: {
        title: "Church in the engraving by Vincenz Morstadt, year 1873",
        imgEl: document.querySelector("#exterior_morstadtImage"),
        description:
          "The new church was founded on November 14, 1715, and consecrated in 1721. The construction was based on the design of the prominent Baroque architect Jan Blažej Santini-Aichel. After the dissolution of the monasteries during the reign of Joseph II in 1784, the lands and buildings became state property. The monastery complex was subsequently used as barracks, and the church itself served successively as a blacksmith's workshop and later as a storage space for decorations for the National Theatre.",
      },
      im_Button6: {
        title:
          "Photograph of the west and south facades of the church, by Jindřich Eckert, year 1904",
        imgEl: document.querySelector("#exterior_bokImage"),
        description:
          "In 1904, as part of the Prague urban renewal, the monastery and church were demolished despite opposition from the Club for Old Prague. From an artistic perspective, the destruction of the church was especially tragic because it played a key role in Santini’s work: it was here that he first conceived the radically Baroque Guarino-inspired motifs, which he later realized in his design for the monastery church in Rajhrad.",
      },
    };

    this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
    this.onBackgroundClick = this.onBackgroundClick.bind(this);
    this.backgroundEl = document.querySelector("#background");
    for (var i = 0; i < buttonEls.length; ++i) {
      buttonEls[i].addEventListener("click", this.onMenuButtonClick);
    }
    this.backgroundEl.addEventListener("click", this.onBackgroundClick);
    this.el.object3D.renderOrder = 2;
    this.el.object3D.depthTest = false;
    fadeBackgroundEl.object3D.renderOrder = 1;
    fadeBackgroundEl.getObject3D("mesh").material.depthTest = false;
  },

  onMenuButtonClick: function (evt) {
    var infoPlane = this.infoPlane[evt.currentTarget.id];

    this.backgroundEl.object3D.scale.set(1, 1, 1);

    this.el.object3D.scale.set(1, 1, 1);
    if (AFRAME.utils.device.isMobile()) {
      this.el.object3D.scale.set(1.4, 1.4, 1.4);
    }
    this.el.object3D.visible = true;
    this.fadeBackgroundEl.object3D.visible = true;

    if (this.infoPlaneImageEl) {
      this.infoPlaneImageEl.object3D.visible = false;
    }
    this.infoPlaneImageEl = infoPlane.imgEl;
    this.infoPlaneImageEl.object3D.visible = true;

    this.infoPlaneTitleEl.setAttribute("text", "value", infoPlane.title);
    this.infoPlaneDescriptionEl.setAttribute(
      "text",
      "value",
      infoPlane.description
    );
  },

  onBackgroundClick: function (evt) {
    this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.visible = false;
    this.fadeBackgroundEl.object3D.visible = false;
  },
});
