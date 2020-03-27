export default {
  User: [
    {
      userid: 1,
      name: "무현"
    },
    {
      userid: 2,
      name: "경원"
    },
    {
      userid: 3,
      name: "준호"
    }
  ],
  Content: [
    {
      contentid: 1,
      userid: 1,
      title: "애국가",
      context: "동해물과 백두산이 마르고 닳도록\n하느님이 보우하사 우리나라 만세\n무궁화 삼천리 화려강산\n대한사람 대한으로 길이 보전하세\n\n" +
        "남산위에 저 소나무 철갑을 두른 듯\n바람서리 불변함은 우리 기상일세\n무궁화 삼천리 화려강산\n대한사람 대한으로 길이 보전하세\n\n" +
        "가을하늘 공활한데 높고 구름 없이\n밝은 달은 우리가슴 일편단심일세\n무궁화 삼천리 화려강산\n대한사람 대한으로 길이 보전하세\n\n" +
        "이 기상과 이 맘으로 충성을 다하여\n괴로우나 즐거우나 나라사랑하세\n무궁화 삼천리 화려강산\n대한사람 대한으로 길이 보전하세\n\n" +
        "Donghae mulgwa Baekdusani mareugo daltorok\nHaneunimi bouhasa urinara manse.\nMugunghwa samcheolli hwaryeo gangsan\nDaehan saram, daehaneuro giri bojeonhase.\n\n" +
        "Namsan wie jeo sonamu cheolgabeul dureun deut\nBaram seori bulbyeonhameun uri gisang-ilse.\nMugunghwa samcheolli hwaryeo gangsan\nDaehan saram, daehaneuro giri bojeonhase.\n\n" +
        "Ga-eul haneul gonghwalhande nopgo gureum eopsi\nBalgeun dareun uri gaseum ilpyeondansimilse.\nMugunghwa samcheolli hwaryeo gangsan\nDaehan saram, daehaneuro giri bojeonhase.\n\n" +
        "I gisanggwa i mameuro chungseong-eul dahayeo\nGoerouna jeulgeouna nara saranghase.\n\nMugunghwa samcheolli hwaryeo gangsan\nDaehan saram, daehaneuro giri bojeonhase.\n\n",
      created_at: "2020-03-01"
    },
    {
      contentid: 2,
      userid: 2,
      title: "국기에 대한 경례",
      context: "나는 자유롭고 정의로운 대한민국의 무궁한 영광을 위하여 충성을 다할 것을 굳게 다짐합니다.",
      created_at: "2020-03-01"
    }
  ],
  Comment: [
    {
      commentid: 1,
      contentid: 1,
      userid: 2,
      context: "대한민국 만세",
      created_at: "2020-03-01"
    },
    {
      commentid: 2,
      contentid: 2,
      userid: 1,
      context: "자유롭고 정의로운 대한민국 만세",
      created_at: "2020-03-01"
    }
  ],
  SubComment: [
    {
      subcommentid: 1,
      commentid: 1,
      userid: 1,
      context: "愛國",
      created_at: "2020-03-02"
    },
    {
      subcommentid: 2,
      commentid: 2,
      userid: 3,
      context: "무궁한 영광 만세",
      created_at: "2020-03-04"
    }
  ]
}