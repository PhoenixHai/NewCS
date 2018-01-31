//所有的标签
var totalTags=[
	{
		"ID":1,
		"TitleName":"互联网/电子商务",
		"TitleID":0,
		"Remarks":null,
		"UserID":0
	},
	{
		"ID":2,
		"TitleName":"Java开发",
		"TitleID":0,
		"Remarks":null,
		"UserID":0
	},
	{
		"ID":3,
		"TitleName":"测试工程师",
		"TitleID":0,
		"Remarks":null,
		"UserID":0
	},
	{
		"ID":4,
		"TitleName":"网络推广",
		"TitleID":0,
		"Remarks":null,
		"UserID":0
	},
	{
		"ID":5,
		"TitleName":"测试工程师",
		"TitleID":0,
		"Remarks":null,
		"UserID":0
	},
	{
		"ID":6,
		"TitleName":"网络推广",
		"TitleID":0,
		"Remarks":null,
		"UserID":0
	},
	{
		"ID":7,
		"TitleName":"风险控制",
		"TitleID":0,
		"Remarks":null,
		"UserID":0
	},
	{
		"ID":8,
		"TitleName":"经济研究员",
		"TitleID":0,
		"Remarks":null,
		"UserID":0
	},
	{
		"ID":9,
		"TitleName":"汽车及零配件",
		"TitleID":0,
		"Remarks":null,
		"UserID":0
	},
	{
		"ID":10,
		"TitleName":"经济研究员",
		"TitleID":0,
		"Remarks":null,
		"UserID":0
	},
	{
		"ID":11,
		"TitleName":"售后服务",
		"TitleID":0,
		"Remarks":null,
		"UserID":0
	},
	{
		"ID":12,
		"TitleName":"房地产",
		"TitleID":0,
		"Remarks":null,
		"UserID":0
	},
	{
		"ID":13,
		"TitleName":"成本管理",
		"TitleID":0,
		"Remarks":null,
		"UserID":0
	},
	{
		"ID":14,
		"TitleName":"销售/市场",
		"TitleID":0,
		"Remarks":null,
		"UserID":0
	}
]

//个人简历标签信息
var UserTitleList = [
    {
        "ID":5,
        "TitleName":"测试工程师",
        "TitleID":3,
        "Remarks":"",
        "UserID":5
    },
    {
        "ID":6,
        "TitleName":"网络推广",
        "TitleID":4,
        "Remarks":"",
        "UserID":5
    },
    {
        "ID":10,
        "TitleName":"经济研究员",
        "TitleID":8,
        "Remarks":"",
        "UserID":5
    }
]

//个人基本信息
var ResumeBasic = {
    "ID":2,
    "UserID":5,
    "Name":"",
    "Tel":"13761646494",
    "Email":"lichxi1002@126.com",
    "Gender":1,"AddressID":0,
    "AddressInfo":"上海长宁区",
    "PicturePath":"",
    "Remarks":null,
    "CreatedUser":5,
    "CreatedTime":"2018-01-04T21:15:45.067",
    "ModifyUser":5,
    "ModifyTime":"2018-01-23T11:30:57.513"
}

//个人教育背景信息
var EducationBackround = [
    {
        "ID":16,
        "ResumeID":2,
        "SchoolName":"哥伦比亚大学教育学院",
        "Education":12,
        "Major":"应用统计",
        "EndDate":"2016-07",
        "CreatedUser":5,
        "CreatedTime":"2018-01-05T13:30:58.447"
    },
    {
        "ID":17,
        "ResumeID":2,
        "SchoolName":"迈阿密大学牛津分校",
        "Education":11,
        "Major":"金融专业",
        "EndDate":"2011-07",
        "CreatedUser":5,
        "CreatedTime":"2018-01-05T13:31:41.67"
    },
    {
        "ID":18,
        "ResumeID":2,
        "SchoolName":"迈阿密大学牛津分校",
        "Education":11,
        "Major":"会计专业",
        "EndDate":"2008-07",
        "CreatedUser":5,
        "CreatedTime":"2018-01-05T13:32:02.333"
    }
]

//个人荣誉信息
var Award = [
    {
        "ID":11,
        "ResumeID":2,
        "HonorName":"优等毕业生",
        "GetTime":"2015-01-01T00:00:00",
        "CreatedUser":5,
        "CreatedTime":"2018-01-05T13:32:19.92"
    },
    {
        "ID":12,
        "ResumeID":2,
        "HonorName":"美国大学院长颁发优秀学生称号",
        "GetTime":"2012-01-01T00:00:00",
        "CreatedUser":5,
        "CreatedTime":"2018-01-05T13:32:34.04"
    }
]

//个人实习经历信息
var InternshipExperience = [
    {
        "ID":14,
        "CompanyLogo":"../../Content/img/position_head.png",
        "ResumeID":2,
        "CompanyName":"丁德国际教育",
        "AddressInfo":"上海",
        "PositionName":"海外留学部",
        "BeginDate":"2015-05-01T00:00:00",
        "EndDate":"2015-08-01T00:00:00",
        "JobDescription":"以GMAT/GRE 数学为主进行教学调研并授课",
        "CreatedUser":5,
        "CreatedTime":"2018-01-05T13:35:35.117"
    }
]

//个人语言技能信息
var Sepcilty = [
    {
        "ID":4,
        "ResumeID":2,
        "SepciltyName":"英语",
        "Skilled":"404",
        "SkillDescription":"托福 103",
        "CreatedUser":5,
        "CreatedTime":"2018-01-05T13:36:04.83"
    }
]

//个人课外活动信息
var Activity = [
    {
        "ID":12,
        "ResumeID":2,
        "ActivityName":"国际学生咨询委员会",
        "AttendTime":"2013-03-01T00:00:00",
        "AddressID":0,
        "AddressInfo":"俄亥俄，美国",
        "Description":"参与并策划多项国际学生交流研讨会",
        "CreatedUser":5,
        "CreatedTime":"2018-01-05T13:36:33.463"
    }
]


//微信图片
var ResumeBasicPicturePaths = '/UserPhoto/case021515158987801.png';
//var ResumeBasicPicturePaths = '/UserPhoto/微信图片1515102349915.jpg';