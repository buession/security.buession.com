window.ydoc_plugin_search_json = {
  "快速上手": [
    {
      "title": "",
      "content": "",
      "url": "/docs/quickstart.html",
      "children": [
        {
          "title": "快速入门",
          "url": "/docs/quickstart.html#快速入门",
          "content": "快速入门TIP\n\n官方指南假设您已了解\"JAVA\"方面的相关知识，并且对安全相关的知识有一定认知。\n\nBuession Security 是一款安全方面的框架，实现了当前流行的行为验证、加密、数据脱敏、集成 pac4j 和 shiro、集成 spring security，提供浏览器相关的安全响应头。"
        },
        {
          "title": "下一步可做什么？",
          "url": "/docs/quickstart.html#下一步可做什么？",
          "content": "下一步可做什么？您对 Buession Security 大致了解后，您接下来可以做以下事情：了解兼容性：了解 Buession Security 的兼容性\n安装：安装/引用 Buession Security\n使用：开始使用 Buession Security 功能\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/docs/intro.html",
      "children": [
        {
          "title": "Buession Security 框架是什么？",
          "url": "/docs/intro.html#buession-security-框架是什么？",
          "content": "Buession Security 框架是什么？Pac4j、Shiro 二次封装，集成 Spring Security，提供极验的行为验证 SDK，封装了数据脱敏和多种密码加密方式工具类库。常用功能的封装文档完善中... ...其它同类开源框架的上层封装文档完善中... ..."
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/docs/license.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/docs/module.html",
      "children": [
        {
          "title": "buession-security-core",
          "url": "/docs/module.html#buession-security-core",
          "content": "buession-security-core安全核心类库，安全相关实体类、枚举定义，数据脱敏工具。\n"
        },
        {
          "title": "buession-security-captcha",
          "url": "/docs/module.html#buession-security-captcha",
          "content": "buession-security-captcha极验、阿里云、腾讯云行为验证 SDK\n"
        },
        {
          "title": "buession-security-mcrypt",
          "url": "/docs/module.html#buession-security-mcrypt",
          "content": "buession-security-mcrypt数据加密、解密类库，支持：MD5、SHA1、SHA256、SHA512、BASE64 以及 Discuz 加密算法等等。\n"
        },
        {
          "title": "buession-security-pac4j",
          "url": "/docs/module.html#buession-security-pac4j",
          "content": "buession-security-pac4j对 pac4j 二次封装，集成了 pac4j 和 buji-pac4j\n"
        },
        {
          "title": "buession-security-shiro",
          "url": "/docs/module.html#buession-security-shiro",
          "content": "buession-security-shiroapache shiro 二次封装\n增加 redis 对 session 和 cache 的管理\n"
        },
        {
          "title": "buession-security-spring",
          "url": "/docs/module.html#buession-security-spring",
          "content": "buession-security-spring集成 spring security 框架\n"
        },
        {
          "title": "buession-security-web",
          "url": "/docs/module.html#buession-security-web",
          "content": "buession-security-webweb 安全相关的功能封装，支持 servlet 和 reactive\nHttp 安全构建器，HttpSecurityBuilder\nXSS filter\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/docs/version.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/docs/installation.html",
      "children": [
        {
          "title": "Maven 中央仓库搜索",
          "url": "/docs/installation.html#maven-中央仓库搜索",
          "content": "Maven 中央仓库搜索https://mvnrepository.com/search?q=com.buession.security\nhttps://search.maven.org/search?q=g:com.buession.security\n"
        },
        {
          "title": "手动编译",
          "url": "/docs/installation.html#手动编译",
          "content": "手动编译git clone https://github.com/buession/buession-securitycd buession-security/buession-security-parent && mvn clean install\n"
        },
        {
          "title": "Maven",
          "url": "/docs/installation.html#maven",
          "content": "Maven    com.buession.security\n    buession-security-xxx\n    x.x.x\n\n"
        },
        {
          "title": "Gradle",
          "url": "/docs/installation.html#gradle",
          "content": "Gradlecompile group: 'com.buession.security', name: 'buession-security-xxx', version: 'x.x.x'其中，artifactId 中的 xxx 表示对应的子模块；version 中的 x.x.x 代表版本号，根据需要使用特定版本，建议使用 maven 仓库中已构建好的最新版本的包。"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/docs/requirement.html",
      "children": [
        {
          "title": "环境要求",
          "url": "/docs/requirement.html#环境要求",
          "content": "环境要求JDKJDK 8+构建工具\n\n构建工具\n版本\n\n\n\n\nMaven\n3.5+\n\n\nGradle\n6.x+，推荐 6.3 及以上版本\n\n\nServlet 容器支持 servlet 3.1+，推荐使用 servlet 4.0 及以上版本。"
        }
      ]
    }
  ],
  "参考手册": [
    {
      "title": "",
      "content": "",
      "url": "/manual/index.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/manual/overview.html",
      "children": []
    },
    {
      "title": "buession-security-core 参考手册",
      "content": "该类库为核心包，目前仅实现了 SameSite 枚举的定义和数据脱敏工具 Desensitization。",
      "url": "/manual/2.0/core/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.0/core/index.html#安装",
          "content": "安装    com.buession.security\n    buession-security-core\n    x.x.x\n\n数据脱敏：import com.buession.security.core.Desensitization;\nString str = Desensitization.encode(\"13800138000\", 3); // 1380***8000\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.0/core/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-security-captcha 参考手册",
      "content": "随着互联网的发展，对应用的安全要求越来越高，在安全的前提下，也需要更加注重用户体验。行为式验证码的诞生，避免了用户去读懂扭曲的图片文字，且行为式验证码背景图片采用多种图像加密技术，采用多种字体，且添加了很多随机效果，能有效防止 OCR 文字识别和暴力破解。buession-security-captcha 目前集成了极验行为验证第三代和第四代、阿里云验证码、腾讯云验证码，屏蔽了各行为验证厂商的调用细节。后续会根据实际情况，接入更多厂商的行为验证码，欢迎各位大神可以提供其它厂商的 key 用于开发测试。",
      "url": "/manual/2.0/captcha/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.0/captcha/index.html#安装",
          "content": "安装    com.buession.security\n    buession-security-captcha\n    x.x.x\n\n我们通过实现接口 com.buession.security.captcha.core.RequestData 定义不同厂商行为验证码需要的请求参数。AliYunRequestData：阿里云验证码请求数据\nGeetestV3RequestData：极验第三代行为验证码请求数据\nGeetestV4RequestData：极验第四代行为验证码请求数据\nTencentRequestData：腾讯云验证码请求数据\n"
        },
        {
          "title": "阿里云",
          "url": "/manual/2.0/captcha/index.html#阿里云",
          "content": "阿里云import com.buession.security.captcha.CaptchaClient;import com.buession.security.captcha.aliyun.AliYunCaptchaClient;\nimport com.buession.security.captcha.aliyun.AliYunRequestData;\nimport com.buession.security.captcha.core.RequestData;\nimport com.buession.httpclient.HttpClient;\n\nHttpClient httpClient;\nCaptchaClient captchaClient = new AliYunCaptchaClient(\"Your accessKeyId\", \"Your accessKeySecret\", \"Your appKey\", httpClient);\n\nRequestData request = new AliYunRequestData();\nrequest.setToken(\"token\");\nrequest.setSig(\"sig\");\nrequest.setSessionId(\"session id\");\nrequest.setScene(\"ecene\");\nrequest.setRemoteIp(\"User client ip\");\ncaptchaClient.validate(request);\n"
        },
        {
          "title": "极验",
          "url": "/manual/2.0/captcha/index.html#极验",
          "content": "极验import com.buession.security.captcha.CaptchaClient;import com.buession.security.captcha.geetest.GeetestCaptchaClient;\nimport com.buession.security.captcha.geetest.api.v4.GeetestV4RequestData;\nimport com.buession.security.captcha.core.RequestData;\nimport com.buession.httpclient.HttpClient;\n\nHttpClient httpClient;\nCaptchaClient captchaClient = new GeetestCaptchaClient(\"Your appId\", \"Your secretKey\", \"version\", httpClient);\n\nRequestData request = new GeetestV4RequestData();\nrequest.setLotNumber(\"lot number\");\nrequest.setCaptchaOutput(\"captcha Output\");\nrequest.setPassToken(\"pass token\");\nrequest.setGenTime(\"gen time\");\ncaptchaClient.validate(request);\n"
        },
        {
          "title": "腾讯云",
          "url": "/manual/2.0/captcha/index.html#腾讯云",
          "content": "腾讯云import com.buession.security.captcha.CaptchaClient;import com.buession.security.captcha.tencent.TencentCaptchaClient;\nimport com.buession.security.captcha.tencent.TencentRequestData;\nimport com.buession.security.captcha.core.RequestData;\nimport com.buession.httpclient.HttpClient;\n\nHttpClient httpClient;\nCaptchaClient captchaClient = new TencentCaptchaClient(\"Your secretId\", \"Your secretKey\", httpClient);\n\nRequestData request = new TencentRequestData();\nrequest.setRandstr(\"rand str\");\nrequest.setTicket(\"ticket\");\nrequest.setUserIp(\"User client ip\");\ncaptchaClient.validate(request);\n当然，在您的应用中您可不必这么麻烦的使用，我们已经为您封装好了前端提交参数到 RequestData 的转换，您可不必这么麻烦的一个一个的去设置参数值。在您的 controller 中您可以这么用。import com.buession.lang.Status;import com.buession.web.mvc.Response;\nimport com.buession.security.captcha.CaptchaClient;\nimport com.buession.security.captcha.aliyun.AliyunParameter;\nimport com.buession.security.captcha.validator.servlet.ServletAliYunCaptchaValidator;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\n@RequestMapping(path = \"/captcha\")\npublic class CaptchamentController {\n\n    @Autowired\n    private CaptchaClient captchaClient;\n\n    @RequestMapping(path = \"/validate\", method = RequestMethod.GET)\n    public Status validate(HttpServletRequest request){\n        ServletAliYunCaptchaValidator captchaValidator = new ServletAliYunCaptchaValidator(captchaClient, new AliyunParameter());\n        return captchaValidator.validate(request);\n    }\n\n}\n以上是基于 servlet 的一个简单实例，buession-security-captcha 基于上述模式也可以用于 webflux 环境。CaptchaValidator 的每个最终实现，均通过构造函数设置 com.buession.security.captcha.CaptchaClient 和 com.buession.security.captcha.core.Parameter。通过 com.buession.security.captcha.core.Parameter 的实现配置，用户提交的参数名称，也就是说，您可以自定义行为验证码前端提交到后端的参数名称，每一个 com.buession.security.captcha.core.Parameter 均设置了默认值。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.0/captcha/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-security-captcha 参考手册",
      "content": "本文档用于说明 com.buession.security.captcha.core.Parameter 和官方参数的对应关系。",
      "url": "/manual/2.0/captcha/parameter.html",
      "children": [
        {
          "title": "阿里云",
          "url": "/manual/2.0/captcha/parameter.html#阿里云",
          "content": "阿里云\n\n参数名\n官方参数名\n默认值\n说明\n\n\n\n\nsessionId\nSessionId\nsessionId\n会话 ID\n\n\nsig\nSig\nsig\n签名串\n\n\ntoken\nToken\ntoken\n请求唯一标识\n\n\nscene\nScene\nscene\n场景标识\n\n\n"
        },
        {
          "title": "极验",
          "url": "/manual/2.0/captcha/parameter.html#极验",
          "content": "极验第三代\n\n参数名\n官方参数名\n默认值\n说明\n\n\n\n\nchallenge\nchallenge\nchallenge\n流水号\n\n\nseccode\nseccode\nseccode\n核心校验数据\n\n\nvalidate\nvalidate\nvalidate\n核心校验数据\n\n\nuserId\nuser_id\nuser_id\nuser_id作为终端用户的唯一标识，确定用户的唯一性\n\n\nclientType\nclient_type\nclient_type\n客户端类型\n\n\n第四代\n\n参数名\n官方参数名\n默认值\n说明\n\n\n\n\nlotNumber\nlot_number\nlot_number\n验证流水号\n\n\ncaptchaOutput\ncaptcha_output\ncaptcha_output\n验证输出信息\n\n\npassToken\npass_token\npass_token\n验证通过标识\n\n\ngenTime\ngen_time\ngen_time\n验证通过时间戳\n\n\n"
        },
        {
          "title": "腾讯云",
          "url": "/manual/2.0/captcha/parameter.html#腾讯云",
          "content": "腾讯云\n\n参数名\n官方参数名\n默认值\n说明\n\n\n\n\nrandStr\nRandstr\nRandstr\n客户端验证回调的随机串\n\n\nticket\nTicket\nTicket\n票据\n\n\n"
        }
      ]
    },
    {
      "title": "buession-security-mcrypt 参考手册",
      "content": "数据加密、解密类库，支持：MD5、SHA1、SHA256、SHA512、BASE64 以及 Discuz 加密算法等等。",
      "url": "/manual/2.0/mcrypt/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.0/mcrypt/index.html#安装",
          "content": "安装    com.buession.security\n    buession-security-mcrypt\n    x.x.x\n\n随着互联网的发展，对应用的安全要求越来越高，需要通过各种不同的加密算法，对铭感数据加密，包括可逆的（如：手机号码、身份证号码）和不可逆的（如：密码）。buession-security-mcrypt 基于此背景封装了大量的加解密、散列/哈希等算法，尚未囊括市面上主流的加密算法，会在后续的版本中继续添加。encode：加密，对任意对象进行加密，如果参数为 char[]、byte[] 时，将会 new String 创建一个 String 对象，其它对象会调用 toString() 方法转换为字符串后，再进行加密\ndecode：解密，对 CharSequence 进行解密\nimport com.buession.security.mcrypt.Sha1Mcrypt;\nSha1Mcrypt mcrypt = new Sha1Mcrypt();\nmcrypt.encode(\"Abc\");\nimport com.buession.security.mcrypt.HmacSha512Mcrypt;\nHmacSha512Mcrypt mcrypt = new HmacSha512Mcrypt();\nmcrypt.encode(new Integer(100));\n您可以指定加密 key。import com.buession.security.mcrypt.Sha1Mcrypt;\nSha1Mcrypt mcrypt = new Sha1Mcrypt(\"UTF-8\", \"key\");\nmcrypt.encode(\"Abc\");\nimport com.buession.security.mcrypt.HmacSha512Mcrypt;\nHmacSha512Mcrypt mcrypt = new HmacSha512Mcrypt(\"UTF-8\", \"key\");\nmcrypt.encode(new Integer(100));\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.0/mcrypt/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-security-pac4j 参考手册",
      "content": "对 pac4j 二次封装，集成了 pac4j 和 buji-pac4j。",
      "url": "/manual/2.0/pac4j/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.0/pac4j/index.html#安装",
          "content": "安装    com.buession.security\n    buession-security-pac4j\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.0/pac4j/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-security-shiro 参考手册",
      "content": "apache shiro 二次封装，增加 redis 对 session 和 cache 的管理。",
      "url": "/manual/2.0/shiro/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.0/shiro/index.html#安装",
          "content": "安装    com.buession.security\n    buession-security-shiro\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.0/shiro/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-security-spring 参考手册",
      "content": "集成 spring security 框架。",
      "url": "/manual/2.0/spring/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.0/spring/index.html#安装",
          "content": "安装    com.buession.security\n    buession-security-spring\n    x.x.x\n\n该模块无功能，仅仅整合把 spring security 的依赖整合进来了。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.0/spring/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-security-web 参考手册",
      "content": "web 安全相关的功能封装，支持 servlet 和 reactive，增加 XSS 过滤器。",
      "url": "/manual/2.0/web/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.0/web/index.html#安装",
          "content": "安装    com.buession.security\n    buession-security-web\n    x.x.x\n\n您可以通过 ServletWebSecurityConfigurerAdapterConfiguration、ReactiveWebSecurityConfigurerAdapterConfiguration 来控制 HTTP 安全相关响应头，是 spring security 默认参配置的修改。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.0/web/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    }
  ]
}