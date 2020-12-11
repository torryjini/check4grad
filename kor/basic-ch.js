var Modal = {
  lib12to14: function() {
    var word = "教养领域进修要求"
    var content = "👉共同教养\n- 국어 : 글쓰기\n- 英语 : English1(Communication in English)\nEnglish2(English fo Professional Track)" +
      "\n- 其他 : 논리와사고(ACT)/회계와사회/독서와토론(창의와소통)/한국사\n" +
      "进修회계학원론(회계원리)时, 免'회계와사회'" +
      "\n👉核心教养 : 受讲9学分以上。" +
      "\n👉选择教养 : 自律进修\n" + "教养最多只认证45学分!"
    swal(word, content, "info");
  },
  lib2015: function() {
    var word = "教养领域进修要求"
    var content = "👉共同教养\n- 국어 : 글쓰기\n- 英语 : Communication in English\n- 其他 : 창의와소통/회계와사회/ACT/한국사\n" +
      "进修회계학원론(회계원리)时, 免'회계와사회'" +
      "\n👉核心教养 : 4种领域中各领域需要修一个以上课程 \n" +
      "👉选择教养 : 自律进修\n" + "👉教养学分最多可以认证45学分!"
    swal(word, content, "info");
  },
  lib2016: function() {
    var AdYear = Number(document.getElementById("ad-year").value);
    var College = document.getElementById("college_select").value;
    var Engin = ["engineering", "ict", "software"]
    var word = "教养领域进修要求"
    var content1618 = "👉共同教养\n- 국어 : 글쓰기\n- 英语 : Communication in English\n- 其他 : 창의와소통/ACT/한국사/앙트레프레너십시대의회계(회계와사회)" +
      "\n进修회계학원론(회계원리)时, 免'앙트레프레너십시대의회계'" +
      "\n👉核心教养 : 도전 / 창의 / 융합 / 신뢰 / 소통\n" +
      "各领域需要进修一个以上课程!\n👉选择教养 : 自律进修\n" + "👉教养最多可以认证45学分!"
    var contenteng = "👉共同教养\n- 국어 : 글쓰기\n- 英语 : Communication in English\n- 其他 : 창의와소통/ACT/한국사/\n앙트레프레너십시대의회계/\n디자인적사고와문제해결" +
      "\n进修회계학원론(회계원리)时, 免'앙트레프레너십시대의회계'" +
      "\n👉核心教养 : 도전 / 창의 / 융합 / 신뢰 / 소통\n" +
      "各领域需要进修一个以上课程!\n👉选择教养 : 自律进修\n" + "👉教养最多可以认证45学分!"
    var content = "👉共同教养\n- 국어 : 글쓰기\n- 英语 : Communication in English\n- 其他 : 창의와소통/ACT/한국사/\n앙트레프레너십시대의회계/\n컴퓨팅적사고와문제해결" +
      "\n进修회계학원론(회계원리)时, 免'앙트레프레너십시대의회계'" +
      "\n👉核心教养 : 도전 / 창의 / 융합 / 신뢰 / 소통\n" +
      "各领域需要进修一个以上课程!\n👉选择教养 : 自律进修\n" + "👉教养最多可以认证45学分!"

    if (Engin.includes(College)) {
      if (AdYear >= 2016 && AdYear <= 2018) {
        swal(word, content1618, "info");
      } else {
        swal(word, contenteng, "info");
      }
    } else {
      swal(word, content, "info");
    }
  },
  major12to15: function() {
    var word = "专业领域进修要求"
    var content = "👉专业 : 请参考各专业的具体要求\n" +
      "👉双专业 : 请参考双专业学科的要求\n双专业的专业基础认证为自由选择" +
      "\n👉联系/融合/设计专业(연계/융합/설계전공) : 请参考各部分的教课课程表确认必修课程！" +
      "\n👉副专业 : 需要包括副专业的专业必修6学分以上" +
      "\n👉教职 : 确认教职过程进修情况请联系\n(Tel.02-820-5080)" +
      "\n👉总进修学分 : 132学分以上\n(教养最多可以认证45学分)"
    swal(word, content, "info");
  },
  major2016: function() {
    var word = "专业领域进修要求"
    var content = "👉专业 : 请参考各学科的具体要求。\n" +
      "👉双专业 : 请参考双专业学科的要求\n 双专业的专业基础认证为自由选择" +
      "\n👉联系/融合/设计专业(연계/융합/설계전공) : 请参考各部分的教课课程表确认必修课程!" +
      "\n👉副专业 : 需要包括副专业的专业必修6学分以上" +
      "\n👉自由选择 : 必修修完CAU세미나1学分" +
      "\n👉教职 : 确认教职过程进修情况请联系\n(Tel.02-820-5080)" +
      "\n👉总进修学分 : 132 学分以上\n(教养最多可以认证45学分)"
    swal(word, content, "info");
  },
  major_tr: function() {
    var word = "学分进修基准"
    var content = "👉教养 : 不需要进修\n" +
      "👉专业 : 请参考各专业的具体要求\n" +
      "👉多专业 : 只针对2年级插班生" +
      "\n- 双专业 : 请参考双专业学科的要求\n 双专业的专业基础认证为自由选择" +
      "\n- 联系/融合/设计专业(연계/융합/설계전공) : 请参考各部分的教课课程表确认必修课程!" +
      "\n👉副专业 : 需要包括副专业的专业必修6学分以上" +
      "\n👉教职 : 确认教职过程进修情况请联系(Tel.02-820-5080)" +
      "\n👉总进修学分 : 66 学分以上(2年级插班生：99学分以上)"
    swal(word, content, "info");
  }
}

var Result = {
  lib12to14: function() {
    var AdYear = Number(document.getElementById("ad-year").value);
    var College = document.getElementById("college_select").value;
    var elective_point = Number(document.getElementById("elective_liberal").value);
    var common_kor_point = Number(document.getElementById("common_kor").value);
    var common_eng_point = Number(document.getElementById("common_eng").value);
    var common_eng_ex = document.getElementById("eng_ex").checked;
    var common_etc_point = Number(document.getElementById("common_etc").value);
    var account_check_SF = document.getElementById("account_check").checked;
    var core_total_point = Number(document.getElementById("core_total").value);
    var liberal_total_point = Number(document.getElementById("liberal_total").value);
    var word = "👉入学年度 : " + AdYear + "年\n";

    if (AdYear < 1000) {
      document.getElementById("student-info").scrollIntoView();
      swal("请选择入学年度!", "", "error");
      return false;
    }

    if (common_kor_point < 2) {
      word += "👉共同教养\n - 국어 : 缺少" + [2 - common_kor_point] + " 学分\n";
    } else {
      word += "👉共同教养\n - 국어 : 通过\n";
    }

    if (common_eng_point < 4 && common_eng_ex) {
      word += " - 英语 : 免\n"
    } else if (common_eng_point < 4 && !common_eng_ex) {
      word += " - 英语 : 缺少" + [4 - common_eng_point] + " 学分\n";
    } else {
      word += " - 英语 : 通过\n";
    }

    if (!account_check_SF) {
      if (common_etc_point < 8) {
        word += " - 其他 : 缺少" + [8 - common_etc_point] + " 学分\n"
      } else {
        word += " - 其他 : 通过\n"
      }
    } else {
      if (common_etc_point < 6) {
        word += " - 其他 : 缺少" + [6 - common_etc_point] + " 学分(회계와사회 : 免)\n"
      } else {
        word += " - 其他 : 通过(회계와사회 : 免)\n"
      }
    }

    if (core_total_point < 9) {
      word += "👉核心教养 : 缺少" + [9 - core_total_point] + " 学分"
    } else {
      word += "👉核心教养 : 通过最少学分"
    }

    word += "\n👉选择教养 : " + elective_point + " 学分"

    if (liberal_total_point <= 45) {
      word += "\n👉教养领域 总计 : 缺少" + liberal_total_point + " 学分"
    } else {
      word += "\n👉教养领域 总计 : " + liberal_total_point + " 学分_超过" + [liberal_total_point - 45] + "学分（学分超过45学分时只认证45学分。）"
    }

    if (common_kor_point == 2 && core_total_point >= 9) {
      if (common_eng_point >= 4 && common_etc_point == 8) {
        swal("教养领域结果", word, "success")
      } else if (common_eng_point <= 4 && common_eng_ex && common_etc_point == 8) {
        swal("教养领域结果", word, "success")
      } else if (common_eng_point >= 4 && common_etc_point >= 6 && account_check_SF) {
        swal("教养领域结果", word, "success")
      } else if (common_eng_point <= 4 && common_eng_ex && common_etc_point >= 6 && account_check_SF) {
        swal("教养领域结果", word, "success")
      } else {
        swal("教养领域结果", word, "error")
      }
    } else {
      swal("教养领域结果", word, "error")
    }
  },
  lib2015: function() {
    var AdYear = Number(document.getElementById("ad-year").value);
    var College = document.getElementById("college_select").value;
    var elective_point = Number(document.getElementById("elective_liberal").value);
    var common_kor_point = Number(document.getElementById("common_kor").value);
    var common_eng_point = Number(document.getElementById("common_eng").value);
    var common_eng_ex = document.getElementById("eng_ex").checked;
    var common_etc_point = Number(document.getElementById("common_etc").value);
    var account_check_SF = document.getElementById("account_check").checked;
    var core_total_point = Number(document.getElementById("core_total").value);
    var MACH1 = Number(document.getElementById("mach1").value);
    var MACH1none = document.getElementById("mach1_none").checked;
    var MACH2 = Number(document.getElementById("mach2").value);
    var MACH2none = document.getElementById("mach2_none").checked;
    var MACH1_st = Number(document.getElementById("mach1_st").value);
    var MACH2_st = Number(document.getElementById("mach2_st").value);
    var liberal_total_point = Number(document.getElementById("liberal_total").value);
    var word = "👉入学年度 : " + AdYear + "年\n";

    if (College == "none") {
      document.getElementById("student-info").scrollIntoView();
      swal("请选择所属大学!", "", "error");
      return false;
    }

    if (common_kor_point < 2) {
      word += "👉共同教养\n - 국어 : 缺少" + [2 - common_kor_point] + "学分\n";
    } else {
      word += "👉共同教养\n - 국어 : 通过\n";
    }

    if (common_eng_point < 2 && common_eng_ex) {
      word += " - 英语 : 免\n"
    } else if (common_eng_point < 2 && !common_eng_ex) {
      word += " - 英语 : 缺少" + [2 - common_eng_point] + " 学分\n";
    } else {
      word += " - 英语 : 通过\n";
    }

    if (!account_check_SF) {
      if (common_etc_point < 8) {
        word += " - 其他 : 缺少" + [8 - common_etc_point] + " 学分\n"
      } else {
        word += " - 其他 : 通过\n"
      }
    } else {
      if (common_etc_point < 6) {
        word += " - 其他 : 缺少" + [6 - common_etc_point] + " 学分(회계와사회 : 免)\n"
      } else {
        word += " - 其他 : 通过(회계와사회 : 免)\n"
      }
    }

    if (core_total_point < 12) {
      word += "👉核心教养 : 缺少" + [12 - core_total_point] + " 学分\n- 核心教养的4种领域中每个领域需要进修1个以上的课程!"
    } else {
      word += "👉核心教养 : 通过最少学分\n- 确认核心教养各领域的进修情况（每个领域需要进修1个以上的课程!）"
    }

    word += "\n👉选择教养 : " + elective_point + " 学分"

    if (liberal_total_point <= 45) {
      word += "\n👉教养领域 总计 : 缺少" + liberal_total_point + " 学分 "
    } else {
      word += "\n👉教养领域 总计 : " + liberal_total_point + " 学分_ 超过" + [liberal_total_point - 45] + "学分（学分超过45学分时只认证45学分。）"
    }

    if (!MACH1none) {
      if (MACH1 < 4) {
        word += "\n👉MACH교양 : 缺少" + [4 - MACH1] + " 学分"
      } else {
        word += "\n👉MACH교양 : 通过"
      }
    }

    if (!MACH2none) {
      if (MACH2 < 4) {
        word += "\n👉MACH실습 : 缺少" + [2 - MACH2] + " 学分"
      } else {
        word += "\n👉MACH실습 : 通过"
      }
    }

    if (common_kor_point == 2 && core_total_point >= 11 && MACH1 >= MACH1_st && MACH2 >= MACH2_st) {
      if (common_eng_point == 2 && common_etc_point == 8) {
        swal("教养领域结果", word, "success")
      } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point == 8) {
        swal("教养领域结果", word, "success")
      } else if (common_eng_point == 2 && common_etc_point >= 6 && account_check_SF) {
        swal("教养领域结果", word, "success")
      } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point >= 6 && account_check_SF) {
        swal("教养领域结果", word, "success")
      } else {
        swal("教养领域结果", word, "error")
      }
    } else {
      swal("教养领域结果", word, "error")
    }
  },
  lib2016: function() {
    var AdYear = Number(document.getElementById("ad-year").value);
    var College = document.getElementById("college_select").value;
    var elective_point = Number(document.getElementById("elective_liberal").value);
    var common_kor_point = Number(document.getElementById("common_kor").value);
    var common_eng_point = Number(document.getElementById("common_eng").value);
    var common_eng_ex = document.getElementById("eng_ex").checked;
    var cometcst = Number(document.getElementById("com_etc_st").value);
    var common_etc_point = Number(document.getElementById("common_etc").value);
    var account_check_SF = document.getElementById("account_check").checked;
    var Core1 = document.getElementById("core1").checked;
    var Core2 = document.getElementById("core2").checked;
    var Core3 = document.getElementById("core3").checked;
    var Core4 = document.getElementById("core4").checked;
    var Core5 = document.getElementById("core5").checked;
    var core_total_point = Number(document.getElementById("core_total").value);
    var MACH1 = Number(document.getElementById("mach1").value);
    var MACH1none = document.getElementById("mach1_none").checked;
    var MACH2 = Number(document.getElementById("mach2").value);
    var MACH2none = document.getElementById("mach2_none").checked;
    var MACH1_st = Number(document.getElementById("mach1_st").value);
    var MACH2_st = Number(document.getElementById("mach2_st").value);
    var liberal_total_point = Number(document.getElementById("liberal_total").value);
    var word = "👉入学年度 : " + AdYear + "年\n";

    if (AdYear < 1000) {
      document.getElementById("student-info").scrollIntoView();
      swal("请选择入学年度!", "", "error");
      return false;
    }

    if (College == "none") {
      document.getElementById("student-info").scrollIntoView();
      swal("请选择所属大学!", "", "error");
      return false;
    }

    if (core_total_point > 0 && !Core1 && !Core2 && !Core3 && !Core4 && !Core5) {
      swal("请选择核心教养!", "", "error")
      return false;
    }

    if (Core1 || Core2 || Core3 || Core4 || Core5) {
      if (core_total_point == 0) {
        swal("请输入核心教养学分!", "", "error")
        return false;
      }
    }

    if (common_kor_point < 2) {
      word += "👉共同教养\n - 국어 : 缺少" + [2 - common_kor_point] + " 学分\n";
    } else {
      word += "👉共同教养\n - 국어 : 通过\n";
    }

    if (common_eng_point < 2 && common_eng_ex) {
      word += " - 英语 : 免\n"
    } else if (common_eng_point < 2 && !common_eng_ex) {
      word += " - 英语 : 缺少" + [2 - common_eng_point] + " 学分\n";
    } else {
      word += " - 英语 : 通过\n";
    }

    if (!account_check_SF) {
      if (common_etc_point < cometcst) {
        word += " - 其他 : 缺少" + [cometcst - common_etc_point] + " 学分\n"
      } else {
        word += " - 其他 : 通过\n"
      }
    } else {
      if (common_etc_point < cometcst - 2) {
        word += " - 其他 : 缺少" + [cometcst - 2 - common_etc_point] + " 学分(앙트레프레너십시대의회계 : 免)\n"
      } else {
        word += " - 其他 : 通过(앙트레프레너십시대의회계 : 免)\n"
      }
    }

    if (Core1 && Core2 && Core3 && Core4 && Core5 && core_total_point >= 14) {
      word += "👉核心教养 : 通过"
    } else if (core_total_point < 15) {
      word += "👉核心教养 : 缺少" + [15 - core_total_point] + " 学分\n-  未进修领域 : "
    } else {
      word += "👉核心教养 : 通过最少学分\n-未进修领域 : "
    }

    if (!Core1) {
      word += "도전 "
    }
    if (!Core2) {
      word += "창의 "
    }
    if (!Core3) {
      word += "융합 "
    }
    if (!Core4) {
      word += "신뢰 "
    }
    if (!Core5) {
      word += "소통"
    }

    var Engin = ["engineering", "ict", "software"]
    if (AdYear >= 2019 && Engin.includes(College)) {
      word += "\n - 需进修一个以上的MACH教养!"
    }

    word += "\n👉选择教养 : " + elective_point + " 学分"

    if (!MACH1none) {
      if (MACH1 < 4) {
        word += "\n👉MACH교양 : 缺少" + [4 - MACH1] + " 学分"
      } else {
        word += "\n👉MACH교양 : 通过"
      }
    }

    if (!MACH2none) {
      if (MACH2 < 4) {
        word += "\n👉MACH실습 : 缺少" + [2 - MACH2] + " 学分"
      } else {
        word += "\n👉MACH실습 : 通过"
      }
    }

    if (liberal_total_point <= 45) {
      word += "\n👉教养领域 总计 : 缺少" + liberal_total_point + " 学分"
    } else {
      word += "\n👉教养领域 总计 : " + liberal_total_point + " 学分_超过" + [liberal_total_point - 45] + "学分（学分超过45学分时只认证45学分）"
    }

    if (common_kor_point == 2 && Core1 && Core2 && Core3 && Core4 && Core5 && core_total_point >= 14 && MACH1 >= MACH1_st && MACH2 >= MACH2_st) {
      if (common_eng_point == 2 && common_etc_point >= cometcst) {
        swal("教养领域结果", word, "success")
      } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point >= cometcst) {
        swal("教养领域结果", word, "success")
      } else if (common_eng_point == 2 && common_etc_point >= [cometcst - 2] && account_check_SF) {
        swal("教养领域结果", word, "success")
      } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point >= [cometcst - 2] && account_check_SF) {
        swal("教养领域结果", word, "success")
      } else {
        swal("教养领域结果", word, "error")
      }
    } else {
      swal("教养领域结果", word, "error")
    }
  },
  etc: function() {
    var English_result = document.getElementById("English").checked;
    var Hanja_result = document.getElementById("Hanja").checked;
    var Korean_result = document.getElementById("Korean").checked;
    var Paper_result = document.getElementById("major_paper").checked;
    var Paper_result2 = document.getElementById("double_major_paper").checked;
    var Average_result = Number(document.getElementById("average").value);

    if (Average_result > 4.5) {
      swal("平均学分4.5满分!", "", "error")
      return false;
    }

    var word = "👉졸업인정제\n";

    if (!English_result) {
      word += "- 영어 : 未通过\n"
    } else {
      word += "- 영어 : 通过\n"
    }

    if (Hanja_result) {
      word += "- 한자 : 通过\n"
    } else {
      word += "- 한자 : 未通过\n"
    }

    if (Korean_result) {
      word += "- 한국어(TOPIK) : 通过\n"
    } else {
      word += "- 한국어(TOPIK) : 未通过\n"
    }

    if (Paper_result) {
      word += "👉毕业考试/论文\n- 主专业 : 合格\n"
    } else {
      word += "👉毕业考试/论文\n- 主专业 : 不合格\n"
    }

    if (Paper_result2) {
      word += "- 双专业 : 合格 / 无 \n"
    } else {
      word += "- 双专业 : 不合格\n"
    }

    if (Average_result >= 2) {
      word += "👉平均学分 : 合格"
    } else {
      word += "👉平均学分 : 不合格_不可毕业"
    }

    if (English_result && Hanja_result && Korean_result && Paper_result && Paper_result2 && Average_result >= 2) {
      swal("其他毕业条件结果", word, "success");
    } else if (Average_result >= 2) {
      if (!English_result || !Hanja_result || !Korean_result || !Paper_result || !Paper_result2) {
        swal("其他毕业条件结果", word, "warning");
      }
    } else if (Average_result <= 2) {
      swal("其他毕业条件结果", word, "error");
    }
  }
}

function Major_result() {
  var AdYear = Number(document.getElementById("ad-year").value);
  var Majorstandard = document.getElementById("MultiMajor_select").value;
  var MajorSelect = document.getElementById("Major_select").value;
  var LinkCross = Number(document.getElementById("cross_point1").value);
  var Fusion = document.getElementById("fusion-options");
  var Fusiontext = Fusion.options[Fusion.selectedIndex].text;
  var FusionCross = Number(document.getElementById("cross_point2").value);
  var PlanCross = Number(document.getElementById("cross_point3").value);

  if (AdYear < 1000) {
    document.getElementById("student-info").scrollIntoView();
    swal("请选择入学年度!", "", "error");
    return false;
  }

  if (Fusiontext.includes("문화") || Fusiontext.includes("창업") || Fusiontext.includes("게임")) {
    if (FusionCross > 6) {
      document.getElementById("double_major_none").scrollIntoView();
      swal(Fusiontext + "융합전공最多可以交叉认证6学分!\n ", "", "error")
      return false;
    }
  } else if (Fusiontext.includes("金融")) {
    if (FusionCross > 15) {
      document.getElementById("double_major_none").scrollIntoView();
      swal(Fusiontext + "융합전공最多可以交叉认证15学分!\n", "", "error")
      return false;
    }
  } else if (Fusiontext.includes("인문") || Fusiontext.includes("보안") || Fusiontext.includes("테크") || Fusiontext.includes("벤처")) {
    if (FusionCross > 12) {
      document.getElementById("double_major_none").scrollIntoView();
      swal(Fusiontext + "융합전공最多可以交叉认证12学分! \n", "", "error")
      return false;
    }
  }

  if (MajorSelect == "none") {
    document.getElementById("student-info").scrollIntoView();
    swal("请选择专业学科!", "", "error");
    return false;
  } else if (Majorstandard < 45) {
    document.getElementById("student-info").scrollIntoView();
    swal("请选择是否是多专业!", "", "error");
    return false;
  } else if (LinkCross > 12) {
    document.getElementById("double_major_point").scrollIntoView();
    swal("联系专业(연계전공)最多可以交叉认证12学分!", "", "error")
    return false;
  } else if (PlanCross > 6) {
    document.getElementById("link_major_none").scrollIntoView();
    swal("自我设计专业(자기설계전공)最多可以交叉认证6学分!", "", "error")
    return false;
  } else {
    BaseNeceresult(Majorstandard);
  }
}