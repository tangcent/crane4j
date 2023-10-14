(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{307:function(a,s,t){"use strict";t.r(s);var n=t(14),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"mybatisplus-插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mybatisplus-插件"}},[a._v("#")]),a._v(" MybatisPlus 插件")]),a._v(" "),s("p",[s("code",[a._v("crane4j")]),a._v(" 提供 "),s("code",[a._v("MybatisPlus")]),a._v(" 的扩展组件，允许基于 "),s("code",[a._v("MybatisPlus")]),a._v(" 的 "),s("code",[a._v("BaseMapper")]),a._v(" 自动构建数据源容器，以便快速的实现查询关联数据并用于填充。")]),a._v(" "),s("h2",{attrs:{id:"_1-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装"}},[a._v("#")]),a._v(" 1.安装")]),a._v(" "),s("p",[a._v("在开始前，请先确保已经引入必要的 crane4j 配置，然后在此基础上，额外的引入下述依赖：")]),a._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- 引入 crane4j-extension-mybatis-plus --\x3e")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("cn.crane4j"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("crane4j-extension-mybatis-plus"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("${last-version}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- 引入 mybatis-plus 依赖，若已有则可以跳过 --\x3e")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("com.baomidou"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("mybatis-plus-boot-starter"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("${last-version}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),s("p",[a._v("然后在启动类上添加 "),s("code",[a._v("@EnableCrane4j")]),a._v(" 或单独添加 "),s("code",[a._v("@EnableCrane4jMybatisPlusExtension")]),a._v(" 注解即可：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@EnableCrane4j")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@SpringBootApplication")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MbossChargeApplication")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SpringApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MbossChargeApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"_2-注册mapper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-注册mapper"}},[a._v("#")]),a._v(" 2.注册Mapper")]),a._v(" "),s("p",[a._v("在使用前，你需要通过自动注册、手动注册或懒加载的方式向 crane4j 注册 "),s("code",[a._v("BaseMapper")]),a._v(" 接口。")]),a._v(" "),s("h3",{attrs:{id:"懒加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#懒加载"}},[a._v("#")]),a._v(" 懒加载")]),a._v(" "),s("p",[a._v("在 spring 环境中，用户默认不需要进行额外的操作，"),s("code",[a._v("MybatisPlusQueryContainerProvider")]),a._v(" 会在用户使用时根据 "),s("code",[a._v("beanName")]),a._v(" 自动从 spring 上下文中获得对应的 "),s("code",[a._v("Mapper")]),a._v("，并完成自动注册，即懒加载。")]),a._v(" "),s("h3",{attrs:{id:"自动注册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动注册"}},[a._v("#")]),a._v(" 自动注册")]),a._v(" "),s("p",[a._v("在 spring 环境中，用户也可以指定 "),s("code",[a._v("auto-register-mapper")]),a._v(" 为 "),s("code",[a._v("true")]),a._v(" 开启自动注册，相关配置如下：")]),a._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("crane4j")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("mybatis-plus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("auto-register-mapper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启动自动注册")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("includes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" xxxMapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" xxxMapper "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 仅注册指定 Mapper")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("excludes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" xxxMapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" xxxMapper "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 仅排除指定 Mapper")]),a._v("\n")])])]),s("p",[a._v("在开启自动注册的情况下，spring 上下文中任何符合 "),s("code",[a._v("includes")]),a._v(" 与 "),s("code",[a._v("excludes")]),a._v(" 规则的 "),s("code",[a._v("Mapper")]),a._v(" 都会被注册。")]),a._v(" "),s("h3",{attrs:{id:"手动注册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手动注册"}},[a._v("#")]),a._v(" 手动注册")]),a._v(" "),s("p",[a._v("用户也可以获取 "),s("code",[a._v("MybatisPlusQueryContainerProvider")]),a._v(" 进行手动注册：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MybatisPlusQueryContainerProvider")]),a._v(" register "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SpringUtil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MybatisPlusQueryContainerProvider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nregister"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("registerRepository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"xxxMapper"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" xxxMapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"_3-使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用"}},[a._v("#")]),a._v(" 3.使用")]),a._v(" "),s("p",[a._v("用户可以使用 "),s("code",[a._v("@AssembleMp")]),a._v(" 注解来配置以 "),s("code",[a._v("BaseMapper")]),a._v(" 接口的查询方法作为数据源的装配操作。这个注解会被配置解析器中的专门的注解解析器 "),s("code",[a._v("AssembleMpAnnotationHandler")]),a._v(" 解析为 "),s("code",[a._v("AssembleOperation")]),a._v("。")]),a._v(" "),s("p",[a._v("在使用时，由于可以同时指定"),s("strong",[a._v("查询的条件字段")]),a._v("和"),s("strong",[a._v("查询字段")]),a._v("，从而有四种情况：")]),a._v(" "),s("ul",[s("li",[a._v("根据默认主键查询全部字段；")]),a._v(" "),s("li",[a._v("根据默认主键查询指定字段；")]),a._v(" "),s("li",[a._v("根据指定外键查询全部字段；")]),a._v(" "),s("li",[a._v("根据指定外键查询指定字段；")])]),a._v(" "),s("p",[a._v("假设我们有一个数据库表映射对象如下：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@TableName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"foo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@TableId")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),a._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@TableField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"user_name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" userName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@TableField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"user_age"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),a._v(" userAge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("并且在 Spring 上下文中已经有了一个继承 "),s("code",[a._v("BaseMapper")]),a._v(" 接口的 "),s("code",[a._v("FooMapper")]),a._v(" bean，其 bean 名称默认为 "),s("code",[a._v("fooMapper")]),a._v("。")]),a._v(" "),s("h3",{attrs:{id:"根据主键查询全部字段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#根据主键查询全部字段"}},[a._v("#")]),a._v(" 根据主键查询全部字段")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@AssembleMp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n        mapper "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"fooMapper"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        props "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" ref "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),a._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("当执行装配时，数据源等同于基于 "),s("code",[a._v("id")]),a._v(" 批量查询出来的 "),s("code",[a._v("Foo")]),a._v(" 对象，SQL 为 "),s("code",[a._v("select * from foo where id in ?")]),a._v("。")]),a._v(" "),s("h3",{attrs:{id:"根据主键查询指定字段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#根据主键查询指定字段"}},[a._v("#")]),a._v(" 根据主键查询指定字段")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@AssembleMp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    mapper "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"fooMapper"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    selects "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"userName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"userAge"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 要查询的字段")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),a._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("上述配置相当于使用 "),s("code",[a._v("QueryWrapper")]),a._v(" 构建并执行了 "),s("code",[a._v("select user_name AS userName, user_age AS userAge, id from foo where id in ?")]),a._v(" 这条 SQL，查询出的数据将按照 "),s("code",[a._v("Foo")]),a._v(" 中配置的主键 "),s("code",[a._v("id")]),a._v(" 进行分组。")]),a._v(" "),s("p",[s("strong",[a._v("查询字段名为实体类中对应的属性名，构建 SQL 时会自动转换为查询 SQL")]),a._v("。")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("默认情况下，"),s("code",[a._v("crane4j")]),a._v(" 将使用被 "),s("code",[a._v("@TableId")]),a._v(" 注解标记的属性作为主键。")])]),a._v(" "),s("h3",{attrs:{id:"根据指定外键查询全部字段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#根据指定外键查询全部字段"}},[a._v("#")]),a._v(" 根据指定外键查询全部字段")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@AssembleMp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    mapper "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"fooMapper"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    where "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"userName"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 查询的条件字段")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("上述配置相当于使用 "),s("code",[a._v("QueryWrapper")]),a._v(" 构建并执行了 "),s("code",[a._v("select * from foo where user_name in ?")]),a._v(" 这条 SQL，查询出的数据将按照用户指定的 "),s("code",[a._v("userName")]),a._v(" 属性进行分组。")]),a._v(" "),s("h3",{attrs:{id:"根据指定外键查询指定字段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#根据指定外键查询指定字段"}},[a._v("#")]),a._v(" 根据指定外键查询指定字段")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@AssembleMp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    mapper "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"fooMapper"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    selects "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"userName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"userAge"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 要查询的字段")]),a._v("\n    where "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"userName"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 查询的条件字段")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v("\n\n "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("上述配置相当于使用 "),s("code",[a._v("QueryWrapper")]),a._v(" 构建并执行了 "),s("code",[a._v("select user_age AS userAge, user_name AS userName from foo where user_name in ?")]),a._v(" 这条 SQL，查询出的数据将按照用户指定的 "),s("code",[a._v("name")]),a._v(" 属性进行分组。")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("由于查询出的数据需要根据用户指定的外键字段进行分组，并与键值对应，因此如果用户指定了查询字段，但未包含该外键字段时，将自动在查询字段后面追加该外键字段。")])]),a._v(" "),s("h2",{attrs:{id:"_4-指定查询字段-sql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-指定查询字段-sql"}},[a._v("#")]),a._v(" 4.指定查询字段 SQL")]),a._v(" "),s("p",[a._v("通常情况下，建议用户始终使用"),s("strong",[a._v("实体类中的属性名作为查询字段/查询外键")]),a._v("，"),s("code",[a._v("crane4j")]),a._v(" 会借助 MP 的 "),s("code",[a._v("TableInfo")]),a._v(" 将其转换为对应的表字段 SQL。")]),a._v(" "),s("p",[a._v("然而，有时确实需要自定义查询字段的情况，因此可以直接编写自定义 SQL 作为查询字段。")]),a._v(" "),s("p",[a._v("例如，假设有以下 "),s("code",[a._v("Bean")]),a._v("：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@TableName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"foo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FooDO")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@TableId")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),a._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@TableField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"user_name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@TableField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"user_age"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),a._v(" age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("然后装配配置如下：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FooVO")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@AssembleMp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n        mapper "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"fooMapper"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        selects "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"user_name AS name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"userAge AS age"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),a._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("最终执行的 SQL 为："),s("code",[a._v("select user_age AS age, user_name AS name from foo where user_name in ?")]),a._v("。")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),s("p",[a._v("需要注意的是，该查询是基于 "),s("code",[a._v("QueryWrapper")]),a._v(" 完成的，因此在这种情况下，查询的表字段可能与用户的对象属性不一致，且无法自动设置别名。")])]),a._v(" "),s("h2",{attrs:{id:"_5-对结果分组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-对结果分组"}},[a._v("#")]),a._v(" 5.对结果分组")]),a._v(" "),s("p",[a._v("与方法容器类似，基于 MyBatis Plus 的查询也允许指定查询结果的一对一或一对多映射类型。例如：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DeptEmpVO")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@AssembleMp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n        mapper "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"empMapper"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" where "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"deptId"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 根据部门 id 查询员工集合")]),a._v("\n        mappingType "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MappingType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("ONE_TO_MANY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 按部门 id 进行一对多映射")]),a._v("\n        handler "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"oneToManyAssembleOperationHandler"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 一对多映射处理器")]),a._v("\n        props "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" ref "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"deptNames"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 将指定部门下所有的员工名称映射到 empNames 集合")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),a._v(" deptId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" empNames"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("上述示例中，使用 "),s("code",[a._v("@AssembleMp")]),a._v(" 注解指定在 "),s("code",[a._v("empMapper")]),a._v(" 中根据部门 id 查询员工集合，然后按部门 id 进行一对多映射。最后，将员工集合中的员工名称映射到 "),s("code",[a._v("DeptEmpVO")]),a._v(" 对象的 "),s("code",[a._v("empNames")]),a._v(" 集合中。")]),a._v(" "),s("p",[a._v("这样，我们可以实现多对一的映射关系。")])])}),[],!1,null,null,null);s.default=e.exports}}]);