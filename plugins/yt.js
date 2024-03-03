/*
ZeroTwo-MD V1.0 
 Coded By VihangaYT

Modified File : yt.js
Modified Date : 8/23/2023
Modified Time : 8:59:00 PM
*/
const config = require("../config");
const dl = require("@bochilteam/scraper");
const ytdl = require("youtubedl-core");
const fs = require("fs-extra");
var videotime = 60000;
function ytreg(_0x58cd96) {
  return /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x58cd96);
}
var descv = '';
if (config.LANG === "SI") {
  descv = "Youtube වෙතින් videos බාගත කරයි.";
} else {
  descv = "Download videos from Youtube.";
}
var descs = '';
if (config.LANG === "SI") {
  descs = "Youtube වෙතින් songs බාගත කරයි.";
} else {
  descs = "Download songs from Youtube.";
}
var descyt = '';
if (config.LANG === "SI") {
  descyt = "Youtube වෙතින් video සහ songs බාගත කරයි.";
} else {
  descyt = "Download videos and songs from Youtube.";
}
var descsh = '';
if (config.LANG === "SI") {
  descsh = "Youtube search බාගත කරයි.";
} else {
  descsh = "Search and get details from youtube.";
}
var N_FOUND = '';
if (config.LANG === "SI") {
  N_FOUND = "*මට කිසිවක් සොයාගත නොහැකි විය :(*";
} else {
  N_FOUND = "*I couldn't find anything :(*";
}
var urlneed = '';
if (config.LANG === "SI") {
  urlneed = "*කරුණාකර Youtube url එකක් ලබා දෙන්න*";
} else {
  urlneed = "*Please give me youtube url..*";
}
var imgmsg = '';
if (config.LANG === "SI") {
  imgmsg = "```කරුණාකර වචන කිහිපයක් ලියන්න!```";
} else {
  imgmsg = "```Please write a few words!```";
}
var sizetoo = '';
if (config.LANG === "SI") {
  sizetoo = "_This file size is too big_\n ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​  *මෙම file එක upload කිරීමට මෙම bot host වෙන platform එකේ bandwith එක ප්‍රමානවත් නැත !*";
} else {
  sizetoo = "_This file size is too big_\n​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ *The bandwidth of the platform where this bot is hosted is not enough to upload this file!*";
}
const _0x7b916f = {
  "pattern": "yts",
  "alias": ["ytsearch"],
  use: ".yts lelena",
  "react": "🔎",
  "desc": descsh,
  "category": "search",
  "filename": __filename
};
cmd(_0x7b916f, async (_0x4caee9, _0x215238, _0x511b30, {
  from: _0x189694,
  l: _0x311760,
  quoted: _0x70529c,
  body: _0x27a4db,
  isCmd: _0x52adb0,
  command: _0x50c2e9,
  args: _0x341648,
  q: _0x34a423,
  isGroup: _0x3e2d22,
  sender: _0x55d537,
  senderNumber: _0x3b556d,
  botNumber2: _0x15b11e,
  botNumber: _0x317c46,
  pushname: _0x5d854b,
  isMe: _0x2b9015,
  isOwner: _0x2f2be4,
  groupMetadata: _0x298bd7,
  groupName: _0x223b81,
  participants: _0x48698f,
  groupAdmins: _0x47bda5,
  isBotAdmins: _0xbb8902,
  isAdmins: _0x437c42,
  reply: _0x5dd82c
}) => {
  try {
    if (!_0x34a423) {
      return await _0x5dd82c(imgmsg);
    }
    if (isUrl(_0x34a423) && !/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x34a423)) {
      return await _0x5dd82c(imgmsg);
    }
    try {
      let _0xabf10d = require("yt-search");
      var _0x460143 = await _0xabf10d(_0x34a423);
    } catch (_0x21c79e) {
      _0x311760(_0x21c79e);
      const _0xa985a1 = {
        "text": "*Error !!*"
      };
      const _0x4c6460 = {
        quoted: _0x215238
      };
      return await _0x4caee9.sendMessage(_0x189694, _0xa985a1, _0x4c6460);
    }
    var _0x3cc517 = '';
    _0x460143.all.map(_0x36efae => {
      _0x3cc517 += " *🖲️" + _0x36efae.title + "*\n🔗 " + _0x36efae.url + "\n\n";
    });
    const _0x555c6a = {
      text: _0x3cc517
    };
    const _0x51af69 = {
      quoted: _0x215238
    };
    await _0x4caee9.sendMessage(_0x189694, _0x555c6a, _0x51af69);
  } catch (_0x4b4c24) {
    _0x311760(_0x4b4c24);
    _0x5dd82c("*Error !!*");
  }
});
const _0x2630ac = {
  pattern: "yt",
  alias: ["play"],
  use: ".yt lelena",
  react: "📽️",
  desc: descyt,
  category: "download",
  filename: __filename
};
cmd(_0x2630ac, async (_0x21a461, _0x12ae56, _0x1bc487, {
  from: _0x1d8c17,
  prefix: _0x544e66,
  l: _0x368320,
  quoted: _0x9c056a,
  body: _0x48f0a6,
  isCmd: _0x20337a,
  command: _0x203695,
  args: _0x1d0d88,
  q: _0x1ff7e4,
  isGroup: _0x49f85d,
  sender: _0x4f2e79,
  senderNumber: _0x42c832,
  botNumber2: _0x3e672b,
  botNumber: _0x1a5654,
  pushname: _0x3f3b24,
  isMe: _0x5de4ba,
  isOwner: _0x570e62,
  groupMetadata: _0x13da56,
  groupName: _0x50ff9a,
  participants: _0x33eaba,
  groupAdmins: _0x2a4aae,
  isBotAdmins: _0x16623b,
  isAdmins: _0x49de4a,
  reply: _0x4c48b8
}) => {
  try {
    if (!_0x1ff7e4) {
      return await _0x4c48b8(imgmsg);
    }
    if (isUrl(_0x1ff7e4) && !/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x1ff7e4)) {
      return await _0x4c48b8(imgmsg);
    }
    if (isUrl(_0x1ff7e4) && _0x1ff7e4.includes("/shorts")) {
      const _0x482f46 = [{
        "buttonId": _0x544e66 + "selectaud " + _0x1ff7e4,
        "buttonText": {
          "displayText": "SONG"
        },
        "type": 0x1
      }, {
        "buttonId": _0x544e66 + "selectvid " + _0x1ff7e4,
        "buttonText": {
          "displayText": "VIDEO"
        },
        "type": 0x1
      }];
      const _0x10f809 = {
        caption: "┌───[🍭Zero-Two🍭]\n\n  *SELECT TYPE*",
        footer: config.FOOTER,
        buttons: _0x482f46,
        headerType: 0x1
      };
      return await _0x21a461.buttonMessage(_0x1d8c17, _0x10f809, _0x12ae56);
    }
    let _0x3256ac = require("yt-search");
    let _0x173ff0 = await _0x3256ac(_0x1ff7e4);
    let _0x7940e6 = _0x173ff0.videos[0];
    const _0x59a316 = "┌───[🍭Zero-Two🍭]\n\n   *YT DOWNLOADER*\n\n*📃 Title:* " + _0x7940e6.title + "\n\n*📺 Views:* " + _0x7940e6.views + "\n\n*🕹️ Duration:* " + _0x7940e6.timestamp + "\n\n*🔗 Url:* " + _0x7940e6.url;
    const _0x27baa2 = [{
      "buttonId": _0x544e66 + "selectaud " + _0x7940e6.url,
      "buttonText": {
        "displayText": "SONG"
      },
      "type": 0x1
    }, {
      "buttonId": _0x544e66 + "selectvid " + _0x7940e6.url,
      "buttonText": {
        "displayText": "VIDEO"
      },
      "type": 0x1
    }];
    const _0x2c87bd = {
      "url": _0x7940e6.thumbnail
    };
    const _0x101dd2 = {
      image: _0x2c87bd,
      caption: _0x59a316,
      footer: config.FOOTER,
      buttons: _0x27baa2,
      headerType: 0x4
    };
    await _0x21a461.buttonMessage(_0x1d8c17, _0x101dd2);
  } catch (_0x179770) {
    _0x4c48b8(N_FOUND);
    _0x368320(_0x179770);
  }
});
const _0x382b15 = {
  pattern: "video",
  "alias": ["ytvideo"],
  use: ".video lelena",
  "react": "📽️",
  "desc": descv,
  category: "download",
  "filename": __filename
};
cmd(_0x382b15, async (_0x3c01c1, _0x3b65ff, _0x4454aa, {
  from: _0x1d7c65,
  prefix: _0x436cb4,
  l: _0x474454,
  quoted: _0x43d79c,
  body: _0x9d134e,
  isCmd: _0x201788,
  command: _0x577d3d,
  args: _0x3a3ffe,
  q: _0x390d30,
  isGroup: _0x426347,
  sender: _0x4792e0,
  senderNumber: _0x463880,
  botNumber2: _0x224ec2,
  botNumber: _0x30d1e3,
  pushname: _0x19c257,
  isMe: _0x354e9b,
  isOwner: _0x21b28f,
  groupMetadata: _0x10ff6e,
  groupName: _0x1606e3,
  participants: _0x16a124,
  groupAdmins: _0x4d3493,
  isBotAdmins: _0x81b863,
  isAdmins: _0x5cd368,
  reply: _0x122574
}) => {
  try {
    if (!_0x390d30) {
      return await _0x122574(imgmsg);
    }
    if (isUrl(_0x390d30) && !/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x390d30)) {
      return await _0x122574(imgmsg);
    }
    if (isUrl(_0x390d30) && _0x390d30.includes("/shorts")) {
      const _0x344bbd = [{
        "buttonId": _0x436cb4 + "360p " + _0x390d30,
        "buttonText": {
          "displayText": "360p VIDEO"
        },
        "type": 0x1
      }, {
        "buttonId": _0x436cb4 + "720p " + _0x390d30,
        "buttonText": {
          "displayText": "720p VIDEO"
        },
        "type": 0x1
      }];
      const _0x12f69e = {
        caption: "┌───[🍭Zero-Two🍭]\n\n   *SELECT SONG TYPE*",
        footer: config.FOOTER,
        buttons: _0x344bbd,
        headerType: 0x1
      };
      return await _0x3c01c1.buttonMessage(_0x1d7c65, _0x12f69e, _0x3b65ff);
    }
    let _0x3a6d17 = require("yt-search");
    let _0x57ba68 = await _0x3a6d17(_0x390d30);
    let _0x4b3ffb = _0x57ba68.videos[0];
    const _0x2722a9 = "┌───[🍭Zero-Two🍭]\n\n   *VIDEO DOWNLOADER*\n\n*📃 Title:* " + _0x4b3ffb.title + "\n\n*📺 Views:* " + _0x4b3ffb.views + "\n\n*🕹️ Duration:* " + _0x4b3ffb.timestamp + "\n\n*🔗 Url:* " + _0x4b3ffb.url;
    const _0x48793c = {
      displayText: "360p VIDEO"
    };
    const _0x2effe7 = {
      buttonId: _0x436cb4 + "360p " + _0x4b3ffb.url,
      buttonText: _0x48793c,
      type: 0x1
    };
    const _0x3d7dc3 = [_0x2effe7, {
      "buttonId": _0x436cb4 + "720p " + _0x4b3ffb.url,
      "buttonText": {
        "displayText": "720p VIDEO"
      },
      "type": 0x1
    }];
    const _0x369736 = {
      url: _0x4b3ffb.thumbnail
    };
    const _0x36b5dc = {
      image: _0x369736,
      caption: _0x2722a9,
      footer: config.FOOTER,
      buttons: _0x3d7dc3,
      headerType: 0x4
    };
    await _0x3c01c1.buttonMessage(_0x1d7c65, _0x36b5dc, _0x3b65ff);
  } catch (_0x2f4cf0) {
    _0x122574(N_FOUND);
    _0x474454(_0x2f4cf0);
  }
});
const _0x39abb2 = {
  pattern: "song",
  alias: ["ytsong"],
  use: ".song lelena",
  react: "🎧",
  desc: descs,
  category: "download",
  filename: __filename
};
cmd(_0x39abb2, async (_0x26e22f, _0x5741a5, _0x2b07f4, {
  from: _0x102d08,
  prefix: _0x3c2a83,
  l: _0x1c23c2,
  quoted: _0x5ef86d,
  body: _0x517fa4,
  isCmd: _0x28bb32,
  command: _0xc46e4f,
  args: _0x32a363,
  q: _0x36d07b,
  isGroup: _0x2dbdcd,
  sender: _0x4554c5,
  senderNumber: _0x159878,
  botNumber2: _0x38cabc,
  botNumber: _0x3ad85c,
  pushname: _0x34a68c,
  isMe: _0x4a8db2,
  isOwner: _0xb172cd,
  groupMetadata: _0x38ed2e,
  groupName: _0x1d80b5,
  participants: _0x44318d,
  groupAdmins: _0x2b0e9b,
  isBotAdmins: _0x29638d,
  isAdmins: _0x54a4ba,
  reply: _0x5f2a1f
}) => {
  try {
    if (!_0x36d07b) {
      return await _0x5f2a1f(imgmsg);
    }
    if (isUrl(_0x36d07b) && !/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x36d07b)) {
      return await _0x5f2a1f(imgmsg);
    }
    if (isUrl(_0x36d07b) && _0x36d07b.includes("/shorts")) {
      const _0x1064fb = [{
        "buttonId": _0x3c2a83 + "ytdoc " + _0x36d07b,
        "buttonText": {
          "displayText": "DOCUMENT SONG"
        },
        "type": 0x1
      }, {
        "buttonId": _0x3c2a83 + "ytmp3 " + _0x36d07b,
        "buttonText": {
          "displayText": "AUDIO SONG"
        },
        "type": 0x1
      }];
      const _0x2f0620 = {
        caption: "┌───[🍭Zero-Two🍭]\n\n   *SELECT SONG TYPE*",
        footer: config.FOOTER,
        buttons: _0x1064fb,
        headerType: 0x1
      };
      return await _0x26e22f.buttonMessage(_0x102d08, _0x2f0620, _0x5741a5);
    }
    let _0x2254b1 = require("yt-search");
    let _0x49dc2b = await _0x2254b1(_0x36d07b);
    let _0x5cef97 = _0x49dc2b.videos[0];
    const _0x7d01af = "┌───[🍭Zero-Two🍭]\n\n   *SONG DOWNLOADER*\n\n*📃 Title:* " + _0x5cef97.title + "\n\n*📺 Views:* " + _0x5cef97.views + "\n\n*🕹️ Duration:* " + _0x5cef97.timestamp + "\n\n*🔗 Url:* " + _0x5cef97.url;
    const _0x25e3dc = {
      displayText: "AUDIO SONG"
    };
    const _0x28588a = [{
      "buttonId": _0x3c2a83 + "ytdoc " + _0x5cef97.url,
      "buttonText": {
        "displayText": "DOCUMENT SONG"
      },
      "type": 0x1
    }, {
      "buttonId": _0x3c2a83 + "ytmp3 " + _0x5cef97.url,
      "buttonText": _0x25e3dc,
      "type": 0x1
    }];
    const _0x432e30 = {
      url: _0x5cef97.thumbnail
    };
    const _0x51d493 = {
      image: _0x432e30,
      caption: _0x7d01af,
      footer: config.FOOTER,
      buttons: _0x28588a,
      headerType: 0x4
    };
    await _0x26e22f.buttonMessage(_0x102d08, _0x51d493, _0x5741a5);
  } catch (_0x23741c) {
    _0x5f2a1f(N_FOUND);
    _0x1c23c2(_0x23741c);
  }
});
const _0x5c9b50 = {
  alias: ["selectaud"],
  filename: __filename
};
cmd(_0x5c9b50, async (_0xae0347, _0xfc833e, _0x57d8c5, {
  from: _0x316b5a,
  l: _0x335e32,
  quoted: _0x414852,
  prefix: _0x1fb7e6,
  body: _0x22ee0f,
  isCmd: _0x345ecc,
  command: _0x54c091,
  args: _0x4bdef2,
  q: _0x1a6a63,
  isGroup: _0x4c4eb8,
  sender: _0x42a6db,
  senderNumber: _0x481bb7,
  botNumber2: _0x309157,
  botNumber: _0x385ee4,
  pushname: _0x91df10,
  isMe: _0x20a5dd,
  isOwner: _0x54b1a1,
  groupMetadata: _0x3c462a,
  groupName: _0x561319,
  participants: _0x5aed9b,
  groupAdmins: _0x59e36e,
  isBotAdmins: _0x4e279c,
  isAdmins: _0x1058b5,
  reply: _0x63672
}) => {
  try {
    const _0x559dc1 = [{
      "buttonId": _0x1fb7e6 + "ytdoc " + _0x1a6a63,
      "buttonText": {
        "displayText": "DOCUMENT SONG"
      },
      "type": 0x1
    }, {
      "buttonId": _0x1fb7e6 + "ytmp3 " + _0x1a6a63,
      "buttonText": {
        "displayText": "AUDIO SONG"
      },
      "type": 0x1
    }];
    const _0x358fa4 = {
      caption: "┌───[🍭Zero-Two🍭]\n\n  *SELECT SONG TYPE*",
      footer: config.FOOTER,
      buttons: _0x559dc1,
      headerType: 0x1
    };
    return await _0xae0347.buttonMessage(_0x316b5a, _0x358fa4, _0xfc833e);
  } catch (_0xef5b05) {
    _0x63672(N_FOUND);
    _0x335e32(_0xef5b05);
  }
});
const _0x58ae1f = {
  alias: ["selectvid"],
  filename: __filename
};
cmd(_0x58ae1f, async (_0x50c42e, _0xf12198, _0x4c0f39, {
  from: _0x3823bc,
  l: _0xea97ff,
  quoted: _0x5bfbe8,
  prefix: _0x28c68f,
  body: _0x179364,
  isCmd: _0x508d06,
  command: _0x2b7d74,
  args: _0x43e301,
  q: _0x1cf085,
  isGroup: _0xcebc58,
  sender: _0x1daf5f,
  senderNumber: _0x3a29a9,
  botNumber2: _0x2c22d1,
  botNumber: _0x37932b,
  pushname: _0x8d0da7,
  isMe: _0x5aacd4,
  isOwner: _0x152f8d,
  groupMetadata: _0x28b11a,
  groupName: _0x331ccc,
  participants: _0x50fcbb,
  groupAdmins: _0x52434b,
  isBotAdmins: _0x3bee6a,
  isAdmins: _0x636d2,
  reply: _0x3e84ef
}) => {
  try {
    const _0x3ffa57 = [{
      "buttonId": _0x28c68f + "360p " + _0x1cf085,
      "buttonText": {
        "displayText": "360p VIDEO"
      },
      "type": 0x1
    }, {
      "buttonId": _0x28c68f + "720p " + _0x1cf085,
      "buttonText": {
        "displayText": "720p VIDEO"
      },
      "type": 0x1
    }];
    const _0x54c0a3 = {
      caption: "┌───[🍭Zero-Two🍭]\n\n  *SELECT VIDEO QUALITY*",
      footer: config.FOOTER,
      buttons: _0x3ffa57,
      headerType: 0x1
    };
    return await _0x50c42e.buttonMessage(_0x3823bc, _0x54c0a3, _0xf12198);
  } catch (_0x1c8142) {
    _0x3e84ef(N_FOUND);
    _0xea97ff(_0x1c8142);
  }
});
const _0x556a01 = {
  pattern: "360p",
  use: ".360p <video url>",
  react: "📽️",
  desc: "Download yt videos.",
  category: "download",
  filename: __filename
};
cmd(_0x556a01, async (_0x15148d, _0xfc3030, _0x391dfd, {
  from: _0x4e868a,
  l: _0x35755f,
  quoted: _0x3779e9,
  body: _0x268b0b,
  isCmd: _0x11b31d,
  command: _0x36c4a7,
  args: _0x25377d,
  q: _0x57fc80,
  isGroup: _0x4d9020,
  sender: _0x1585e0,
  senderNumber: _0x25ac43,
  botNumber2: _0x253b13,
  botNumber: _0xc56155,
  pushname: _0x29a258,
  isMe: _0x303c39,
  isOwner: _0x36dfb3,
  groupMetadata: _0x36916d,
  groupName: _0x39a189,
  participants: _0x917891,
  groupAdmins: _0x690246,
  isBotAdmins: _0x1415e9,
  isAdmins: _0xe8284d,
  reply: _0x47ab3e
}) => {
  try {
    if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x57fc80)) {
      return await _0x47ab3e(urlneed);
    }
    const _0x56d5a9 = await dl.youtubedl(_0x57fc80);
    let _0x22dc51 = await getsize(await _0x56d5a9.video["360p"].download());
    const _0x17ff2e = {
      text: sizetoo
    };
    const _0x2d4b30 = {
      quoted: _0xfc3030
    };
    if (_0x22dc51.includes("MB") && _0x22dc51.replace(" MB", '') >= config.MAX_SIZE) {
      return await _0x15148d.sendMessage(_0x4e868a, _0x17ff2e, _0x2d4b30);
    }
    const _0x1252e6 = {
      text: sizetoo
    };
    const _0x33bcdd = {
      quoted: _0xfc3030
    };
    if (_0x22dc51.includes("GB")) {
      return await _0x15148d.sendMessage(_0x4e868a, _0x1252e6, _0x33bcdd);
    }
    const _0x469cdf = {
      quoted: _0xfc3030
    };
    let _0x16dc2f = await _0x15148d.sendMessage(_0x4e868a, {
      "video": {
        "url": await _0x56d5a9.video["360p"].download()
      },
      "caption": config.FOOTER
    }, _0x469cdf);
    const _0x4f480e = {
      text: "🎥",
      key: _0x16dc2f.key
    };
    const _0x32f2b1 = {
      react: _0x4f480e
    };
    await _0x15148d.sendMessage(_0x4e868a, _0x32f2b1);
  } catch (_0x2e273e) {
    _0x47ab3e(N_FOUND);
    _0x35755f(_0x2e273e);
  }
});
const _0x547b8e = {
  pattern: "720p",
  use: ".720p <video url>",
  react: "📽️",
  desc: "Download yt videos.",
  category: "download",
  filename: __filename
};
cmd(_0x547b8e, async (_0x51c46b, _0x1f7798, _0x47a92b, {
  from: _0x4a4b05,
  l: _0x12396d,
  quoted: _0x27f507,
  body: _0x16e2ff,
  isCmd: _0x4c7843,
  command: _0x25aa8d,
  args: _0x136480,
  q: _0x6f9513,
  isGroup: _0x53414c,
  sender: _0x514e4d,
  senderNumber: _0x182335,
  botNumber2: _0x2bcf86,
  botNumber: _0x3e9d1b,
  pushname: _0x3b281e,
  isMe: _0x209361,
  isOwner: _0x188788,
  groupMetadata: _0x126030,
  groupName: _0x55594a,
  participants: _0x9b840c,
  groupAdmins: _0x9d9895,
  isBotAdmins: _0x49760f,
  isAdmins: _0x2b5c59,
  reply: _0x452da7
}) => {
  try {
    if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x6f9513)) {
      return await _0x452da7(urlneed);
    }
    const _0x29d546 = await dl.youtubedl(_0x6f9513);
    let _0x47b7e5 = await getsize(await _0x29d546.video["720p"].download());
    const _0x571ef5 = {
      text: sizetoo
    };
    const _0x43bb8e = {
      quoted: _0x1f7798
    };
    if (_0x47b7e5.includes("MB") && _0x47b7e5.replace(" MB", '') >= config.MAX_SIZE) {
      return await _0x51c46b.sendMessage(_0x4a4b05, _0x571ef5, _0x43bb8e);
    }
    const _0x6425d9 = {
      text: sizetoo
    };
    const _0x1def4d = {
      quoted: _0x1f7798
    };
    if (_0x47b7e5.includes("GB")) {
      return await _0x51c46b.sendMessage(_0x4a4b05, _0x6425d9, _0x1def4d);
    }
    const _0x234519 = {
      quoted: _0x1f7798
    };
    let _0x507ec2 = await _0x51c46b.sendMessage(_0x4a4b05, {
      "video": {
        "url": await _0x29d546.video["720p"].download()
      },
      "caption": config.FOOTER
    }, _0x234519);
    const _0x3eca8c = {
      text: "🎥",
      key: _0x507ec2.key
    };
    const _0xf1c63e = {
      react: _0x3eca8c
    };
    await _0x51c46b.sendMessage(_0x4a4b05, _0xf1c63e);
  } catch (_0x35e557) {
    _0x452da7(N_FOUND);
    _0x12396d(_0x35e557);
  }
});
const _0x49fa8c = {
  pattern: "ytmp3",
  use: ".ytmp3 <yt url>",
  react: "🎧",
  desc: "Download yt song.",
  category: "download",
  filename: __filename
};
cmd(_0x49fa8c, async (_0x542b1e, _0x315594, _0x47a557, {
  from: _0x3b0f34,
  l: _0x347116,
  quoted: _0x15d25f,
  body: _0x114f96,
  isCmd: _0x238b6e,
  command: _0x18bfa4,
  args: _0x291cd7,
  q: _0x1ed4aa,
  isGroup: _0x2e258c,
  sender: _0x5104a8,
  senderNumber: _0x17cf24,
  botNumber2: _0x2c6aa1,
  botNumber: _0x3ffc73,
  pushname: _0x24c8b3,
  isMe: _0x493c93,
  isOwner: _0xd4b294,
  groupMetadata: _0x8eace,
  groupName: _0x173b1e,
  participants: _0x3b6a99,
  groupAdmins: _0x49041a,
  isBotAdmins: _0x93d4c1,
  isAdmins: _0xa3dbbb,
  reply: _0x278041
}) => {
  try {
    if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x1ed4aa)) {
      return await _0x278041(urlneed);
    }
    let _0x39d855 = await ytdl.getInfo(_0x1ed4aa);
    if (_0x39d855.videoDetails.lengthSeconds >= 60000) {
      _0x278041(sizetoo);
      return;
    }
    let _0x3fe237 = _0x39d855.videoDetails.title;
    let _0x4802ea = getRandom(".mp3");
    const _0x333f54 = {
      "filter": _0x2e8595 => _0x2e8595.audioBitrate == 160 || _0x2e8595.audioBitrate == 128
    };
    const _0x2f258d = ytdl(_0x1ed4aa, _0x333f54).pipe(fs.createWriteStream("./" + _0x4802ea));
    await new Promise((_0x42593e, _0x514724) => {
      _0x2f258d.on("error", _0x514724);
      _0x2f258d.on("finish", _0x42593e);
    });
    let _0x5e3826 = fs.statSync("./" + _0x4802ea);
    let _0x4ce1d3 = _0x5e3826.size;
    let _0x46b1d0 = _0x4ce1d3 / 1048576;
    if (_0x46b1d0 <= config.MAX_SIZE) {
      const _0x2fc9ea = {
        "quoted": _0x315594
      };
      let _0x44f42d = await _0x542b1e.sendMessage(_0x3b0f34, {
        "audio": fs.readFileSync("./" + _0x4802ea),
        "mimetype": "audio/mpeg",
        "fileName": _0x3fe237 + ".mp3"
      }, _0x2fc9ea);
      const _0x3b80ad = {
        text: "🎼",
        key: _0x44f42d.key
      };
      const _0x4d6a7a = {
        react: _0x3b80ad
      };
      await _0x542b1e.sendMessage(_0x3b0f34, _0x4d6a7a);
      return fs.unlinkSync("./" + _0x4802ea);
    } else {
      _0x278041(sizetoo);
    }
    fs.unlinkSync("./" + _0x4802ea);
  } catch (_0x402170) {
    _0x278041(N_FOUND);
    _0x347116(_0x402170);
  }
});
const _0x440a35 = {
  pattern: "ytdoc",
  use: ".ytdoc <yt url>",
  react: "🎧",
  desc: "Download yt song.",
  category: "download",
  filename: __filename
};
cmd(_0x440a35, async (_0x164f03, _0x4d6abc, _0x5b44e2, {
  from: _0x266f97,
  l: _0xb6e0f9,
  quoted: _0x534b30,
  body: _0x492e04,
  isCmd: _0x5695ff,
  command: _0x2deccf,
  args: _0x16b458,
  q: _0x179806,
  isGroup: _0x1280a1,
  sender: _0x126558,
  senderNumber: _0xcd6fbc,
  botNumber2: _0x22a463,
  botNumber: _0x5e5b8a,
  pushname: _0x5e1df7,
  isMe: _0x94ca85,
  isOwner: _0x28ba5b,
  groupMetadata: _0xea014c,
  groupName: _0x3e0118,
  participants: _0x5a0aac,
  groupAdmins: _0x2dcff1,
  isBotAdmins: _0x664cb6,
  isAdmins: _0xfe526c,
  reply: _0x263bec
}) => {
  try {
    if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x179806)) {
      return await _0x263bec(urlneed);
    }
    let _0x3eb54b = await ytdl.getInfo(_0x179806);
    if (_0x3eb54b.videoDetails.lengthSeconds >= 60000) {
      _0x263bec(sizetoo);
      return;
    }
    let _0x3c6dd2 = _0x3eb54b.videoDetails.title;
    let _0x45e75e = getRandom(".mp3");
    const _0x47a2f1 = {
      filter: _0x561d06 => _0x561d06.audioBitrate == 160 || _0x561d06.audioBitrate == 128
    };
    const _0x2df1cd = ytdl(_0x179806, _0x47a2f1).pipe(fs.createWriteStream("./" + _0x45e75e));
    await new Promise((_0x1beb58, _0x543349) => {
      _0x2df1cd.on("error", _0x543349);
      _0x2df1cd.on("finish", _0x1beb58);
    });
    let _0x188c46 = fs.statSync("./" + _0x45e75e);
    let _0x58a8a6 = _0x188c46.size;
    let _0x3a9791 = _0x58a8a6 / 1048576;
    if (_0x3a9791 <= config.MAX_SIZE) {
      const _0x5994c4 = {
        quoted: _0x4d6abc
      };
      let _0x44d75b = await _0x164f03.sendMessage(_0x266f97, {
        "document": fs.readFileSync("./" + _0x45e75e),
        "mimetype": "audio/mpeg",
        "fileName": _0x3c6dd2 + ".mp3",
        "caption": config.FOOTER
      }, _0x5994c4);
      const _0x2c50af = {
        text: "🎼",
        key: _0x44d75b.key
      };
      const _0x2afcdf = {
        react: _0x2c50af
      };
      await _0x164f03.sendMessage(_0x266f97, _0x2afcdf);
      return fs.unlinkSync("./" + _0x45e75e);
    } else {
      _0x263bec(sizetoo);
    }
    fs.unlinkSync("./" + _0x45e75e);
  } catch (_0x446bdd) {
    _0x263bec(N_FOUND);
    _0xb6e0f9(_0x446bdd);
  }
});

// Our Website: https://vihangayt.me
