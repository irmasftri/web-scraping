const cheerio = require("cheerio");
const request = require("request");
const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get("/:selection", (req, res) => {
  const selection = req.params.selection;

  if (selection === "pandit") {
    const url = "https://www.panditfootball.com/";

    axios
      .get(url)
      .then(function(response) {
        const $ = cheerio.load(response.data);
        const headlines = [];
        $("h3.news-title > a").each((i, element) => {
          headlines.push({
            title: $(element)
              .text()
              .trim(),
            body: $(element)
              .parents()
              .children("p.simple-share")
              .text()
              .replace(/\n/, "")
              .replace(/\t\t/, "")
              .replace(/\t/, "")
              .concat("..."),
            link: $(element)
              .parents()
              .children("h3.news-title > a")
              .attr("href"),
            image: $(element)
              .parents()
              .children(
                ""
              )
              .attr(""),
            source: "panditfootball.com"
          });
        });
        res.json(headlines);
      })
      .catch(console.error);
  } else if (selection === "detik") {
    const url = "https://sport.detik.com/";

    axios
      .get(url)
      .then(function(response) {
        const $ = cheerio.load(response.data);
        const headlines = [];
        $(".desc_nhl > a > h2").each((i, element) => {
          headlines.push({
            title: $(element)
              .text()
              .trim(),
            body: $(element)
              .parents()
              .children(".desc_nhl > span")
              .text()
              .replace(/\n/, "")
              .replace(/\t\t/, "")
              .replace(/\t/, "")
              .concat("..."),
            link: $(element)
              .parents()
              .children("li > article > .desc_nhl > a")
              .attr("href"),
            image: $(element)
              .parents()
              .children(
                ""
              )
              .attr(""),
            source: "sport.detik.com"
          });
        });
        res.json(headlines);
      })
      .catch(console.error);
  } else if (selection === "bola") {
    const url = "https://www.bola.com/";

    axios
      .get(url)
      .then(function(response) {
        const $ = cheerio.load(response.data);
        const headlines = [];
        $(".headline--bottom-slider__item_title").each((i, element) => {
          headlines.push({
            title: $(element)
              .text()
              .trim(),
            body: $(element)
              .parents("")
              .children(".headline--bottom-slider__item_header > time")
              .text()
              .replace(/\n/, "")
              .replace(/\t\t/, "")
              .replace(/\t/, "")
              .concat("..."),
            link: $(element)
              .parents()
              .children(".headline--bottom-slider__item > a")
              .attr("href"),
            image: $(element)
              .parents()
              .children(
                ""
              )
              .attr(""),
            source: "bola.com"
          });
        });
        res.json(headlines);
      })
      .catch(console.error);
    } 
    else if (selection === "goal") {
      const url = "https://www.goal.com/id";
  
      axios
        .get(url)
        .then(function(response) {
          const $ = cheerio.load(response.data);
          const headlines = [];
          $("h3").each((i, element) => {
            headlines.push({
              title: $(element)
                .attr("title")
                .trim(),
              body: $(element)
                .parents("")
                .children("article.typearticle > footer > time")
                .text()
                .replace(/\n/, "")
                .replace(/\t\t/, "")
                .replace(/\t/, "")
                .concat("..."),
              link: $(element)
                .parents()
                .children(".headline--bottom-slider__item > a")
                .attr("href"),
              image: $(element)
                .parents()
                .children(
                  ""
                )
                .attr(""),
              source: "bola.com"
            });
          });
          res.json(headlines);
        })
        .catch(console.error);
      } else {
        return res.json({ msg: "This site can't be scraped at the moment." });
  }
});

module.exports = router;
