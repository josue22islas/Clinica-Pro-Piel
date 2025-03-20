 window.F2W_REACTIONS = (() => {
    const t = [
        [{
            key: "background-color",
            from: "rgba(255,255,255,0.8)",
            to: "revert"
        }, {
            key: "filter",
            from: "drop-shadow(0px 4px 20px rgba(0,0,0,0.25))",
            to: "revert"
        }, {
            key: "backface-visibility",
            from: "hidden",
            to: "revert"
        }, {
            key: "transform",
            from: "translateZ(0)",
            to: "revert"
        }, {
            key: "background-image",
            from: "revert",
            to: "linear-gradient(0deg, rgba(255,255,255,0.8) 15%, rgba(255,255,255,0.8) 37%, rgba(255,255,255,0.8) 56%, rgba(134,243,214,0.8) 80%)"
        }, {
            key: "background-blend-mode",
            from: "revert",
            to: "normal"
        }, {
            key: "box-shadow",
            from: "revert",
            to: "0px 0px 38.9px #2eced5,0px 0px 22.2px #2eced5,0px 0px 13px #2eced5,0px 0px 6.5px #ebffff,0px 0px 1.9px #ebffff,0px 0px 0.9px #ebffff"
        }],
        [{
            key: "filter",
            from: "revert",
            to: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))"
        }],
        [{
            key: "color",
            from: "#53c7ab",
            to: "#2c5aff"
        }],
        [{
            key: "border-radius",
            from: "8px",
            to: "0px"
        }, {
            key: "background-color",
            from: "#53c7ab",
            to: "revert"
        }, {
            key: "filter",
            from: "revert",
            to: "drop-shadow(0px 0px 12.7px #2eced5)"
        }],
        [{
            key: "--f2w-order",
            from: "0",
            to: "1"
        }],
        [{
            key: "display",
            from: "none",
            to: "revert"
        }, {
            key: "opacity",
            from: "0",
            to: "revert"
        }],
        [{
            key: "background-color",
            from: "rgba(255,255,255,0.8)",
            to: "revert"
        }, {
            key: "filter",
            from: "drop-shadow(0px 4px 20px rgba(0,0,0,0.25))",
            to: "revert"
        }, {
            key: "backface-visibility",
            from: "hidden",
            to: "revert"
        }, {
            key: "transform",
            from: "translateZ(0)",
            to: "revert"
        }, {
            key: "background-image",
            from: "revert",
            to: "linear-gradient(0deg, rgba(255,255,255,0.8) 15%, rgba(255,255,255,0.8) 36%, rgba(255,255,255,0.8) 57%, rgba(134,243,214,0.8) 80%)"
        }, {
            key: "background-blend-mode",
            from: "revert",
            to: "normal"
        }, {
            key: "box-shadow",
            from: "revert",
            to: "0px 0px 38.9px #2eced5,0px 0px 22.2px #2eced5,0px 0px 13px #2eced5,0px 0px 6.5px #ebffff,0px 0px 1.9px #ebffff,0px 0px 0.9px #ebffff"
        }],
        [{
            key: "box-shadow",
            from: "revert",
            to: "0px 0px 12.3px #2eced5,0px 0px 7px #2eced5,0px 0px 4.1px #2eced5,0px 0px 2px #ebffff,0px 0px 0.6px #ebffff,0px 0px 0.3px #ebffff"
        }],
        [{
            key: "background-color",
            from: "#53c7ab",
            to: "revert"
        }, {
            key: "background-image",
            from: "revert",
            to: "radial-gradient(ellipse 50% 50% at 50% 50%, #53c7ab 0%, #2eced5 100%)"
        }, {
            key: "background-blend-mode",
            from: "revert",
            to: "normal"
        }, {
            key: "box-shadow",
            from: "revert",
            to: "0px 0px 12.1px #fff,0px 0px 6.9px #fff,0px 0px 4px #fff,0px 0px 2px #fff,0px 0px 0.6px #fff,0px 0px 0.3px #fff"
        }],
        [{
            key: "color",
            from: "#fffcfc",
            to: "#fff"
        }],
        [{
            key: "flex-direction",
            from: "row",
            to: "column"
        }, {
            key: "grid-column-gap",
            from: "0px",
            to: "revert"
        }, {
            key: "align-items",
            from: "center",
            to: "start"
        }, {
            key: "justify-content",
            from: "center",
            to: "flex-start"
        }, {
            key: "height",
            from: "70px",
            to: "revert"
        }, {
            key: "padding",
            from: "10px 16px",
            to: "10px 10px 15px"
        }, {
            key: "overflow",
            from: "revert",
            to: "hidden"
        }, {
            key: "grid-row-gap",
            from: "revert",
            to: "15px"
        }, {
            key: "min-width",
            from: "revert",
            to: "390px"
        }, {
            key: "max-width",
            from: "revert",
            to: "720px"
        }, {
            key: "backface-visibility",
            from: "revert",
            to: "hidden"
        }, {
            key: "transform",
            from: "revert",
            to: "translateZ(0)"
        }],
        [{
            key: "display",
            from: "block",
            to: "none"
        }, {
            key: "opacity",
            from: "revert",
            to: "0"
        }],
        [{
            key: "display",
            from: "flex",
            to: "none"
        }, {
            key: "opacity",
            from: "revert",
            to: "0"
        }],
        [{
            key: "display",
            from: "revert",
            to: "none"
        }, {
            key: "opacity",
            from: "revert",
            to: "0"
        }],
        [{
            key: "display",
            from: "none",
            to: "flex"
        }, {
            key: "opacity",
            from: "0",
            to: "revert"
        }],
        [{
            key: "display",
            from: "none",
            to: "block"
        }, {
            key: "opacity",
            from: "0",
            to: "revert"
        }],
        [{
            key: "display",
            from: "none",
            to: "inline"
        }, {
            key: "opacity",
            from: "0",
            to: "revert"
        }],
        [{
            key: "overflow",
            from: "hidden",
            to: "revert"
        }, {
            key: "flex-direction",
            from: "column",
            to: "row"
        }, {
            key: "grid-row-gap",
            from: "15px",
            to: "revert"
        }, {
            key: "align-items",
            from: "start",
            to: "center"
        }, {
            key: "justify-content",
            from: "flex-start",
            to: "center"
        }, {
            key: "min-width",
            from: "390px",
            to: "revert"
        }, {
            key: "max-width",
            from: "720px",
            to: "revert"
        }, {
            key: "backface-visibility",
            from: "hidden",
            to: "revert"
        }, {
            key: "transform",
            from: "translateZ(0)",
            to: "revert"
        }, {
            key: "padding",
            from: "10px 10px 15px",
            to: "10px 16px"
        }, {
            key: "grid-column-gap",
            from: "revert",
            to: "0px"
        }, {
            key: "height",
            from: "revert",
            to: "70px"
        }],
        [{
            key: "display",
            from: "inline",
            to: "none"
        }, {
            key: "opacity",
            from: "revert",
            to: "0"
        }],
        [{
            key: "background-color",
            from: "#53c7ab",
            to: "revert"
        }, {
            key: "background-image",
            from: "revert",
            to: "radial-gradient(ellipse 50% 50% at 50% 50%, #53c7ab 0%, #2eced5 100%)"
        }, {
            key: "background-blend-mode",
            from: "revert",
            to: "normal"
        }, {
            key: "box-shadow",
            from: "revert",
            to: "0px 0px 17.5px #42f5e9,0px 0px 10px #42f5e9,0px 0px 5.8px #42f5e9,0px 0px 2.9px #42f5e9,0px 0px 0.8px #42f5e9,0px 0px 0.4px #42f5e9"
        }],
        [{
            key: "background-color",
            from: "rgba(255,255,255,0.8)",
            to: "revert"
        }, {
            key: "filter",
            from: "drop-shadow(0px 4px 20px rgba(0,0,0,0.25))",
            to: "revert"
        }, {
            key: "backface-visibility",
            from: "hidden",
            to: "revert"
        }, {
            key: "transform",
            from: "translateZ(0)",
            to: "revert"
        }, {
            key: "background-image",
            from: "revert",
            to: "linear-gradient(270deg, rgba(255,255,255,0.8) 14.9%, rgba(255,255,255,0.8) 36.9%, rgba(255,255,255,0.8) 58.9%, rgba(134,243,214,0.8) 79.9%)"
        }, {
            key: "background-blend-mode",
            from: "revert",
            to: "normal"
        }, {
            key: "box-shadow",
            from: "revert",
            to: "0px 0px 40.7px #2eced5,0px 0px 23.2px #2eced5,0px 0px 13.6px #2eced5,0px 0px 6.8px #ebffff,0px 0px 1.9px #ebffff,0px 0px 1px #ebffff"
        }],
        [{
            key: "height",
            from: "40px",
            to: "calc(-221px + 100%)"
        }, {
            key: "top",
            from: "revert",
            to: "221px"
        }],
        [{
            key: "background-color",
            from: "rgba(255,255,255,0.8)",
            to: "revert"
        }, {
            key: "filter",
            from: "drop-shadow(0px 4px 20px rgba(0,0,0,0.25))",
            to: "revert"
        }, {
            key: "backface-visibility",
            from: "hidden",
            to: "revert"
        }, {
            key: "transform",
            from: "translateZ(0)",
            to: "revert"
        }, {
            key: "background-image",
            from: "revert",
            to: "linear-gradient(270deg, rgba(255,255,255,0.8) 4%, rgba(255,255,255,0.8) 33.2%, rgba(255,255,255,0.8) 58.4%, rgba(134,243,214,0.8) 78.3%)"
        }, {
            key: "background-blend-mode",
            from: "revert",
            to: "normal"
        }, {
            key: "box-shadow",
            from: "revert",
            to: "0px 0px 40.7px #0eced5,0px 0px 23.2px #0eced5,0px 0px 13.6px #0eced5,0px 0px 6.8px #e3ffff,0px 0px 1.9px #e3ffff,0px 0px 1px #e3ffff"
        }],
        [{
            key: "grid-row-gap",
            from: "70px",
            to: "0px"
        }, {
            key: "min-width",
            from: "816px",
            to: "720px"
        }],
        [{
            key: "background-color",
            from: "#eef3ff",
            to: "revert"
        }, {
            key: "grid-row-gap",
            from: "23px",
            to: "80px"
        }, {
            key: "--f2w-order",
            from: "0",
            to: "1"
        }, {
            key: "padding",
            from: "200px 95px 50px",
            to: "104px 91px 60px 93px"
        }],
        [{
            key: "display",
            from: "none",
            to: "-webkit-inline-box"
        }, {
            key: "opacity",
            from: "0",
            to: "revert"
        }],
        [{
            key: "opacity",
            from: "0.5",
            to: "0"
        }, {
            key: "display",
            from: "revert",
            to: "none"
        }],
        [{
            key: "--f2w-order",
            from: "3",
            to: "7"
        }, {
            key: "padding",
            from: "58px 67px 79px",
            to: "0px 67px 79px"
        }, {
            key: "height",
            from: "revert",
            to: "979.3px"
        }],
        [{
            key: "--f2w-order",
            from: "4",
            to: "8"
        }],
        [{
            key: "background-color",
            from: "rgba(255,255,255,0.8)",
            to: "revert"
        }, {
            key: "filter",
            from: "drop-shadow(0px 4px 20px rgba(0,0,0,0.25))",
            to: "revert"
        }, {
            key: "backface-visibility",
            from: "hidden",
            to: "revert"
        }, {
            key: "transform",
            from: "translateZ(0)",
            to: "revert"
        }, {
            key: "background-image",
            from: "revert",
            to: "linear-gradient(270deg, rgba(255,255,255,0.8) 3.2%, rgba(255,255,255,0.8) 33.4%, rgba(255,255,255,0.8) 59.2%, rgba(134,243,214,0.8) 78.5%)"
        }, {
            key: "background-blend-mode",
            from: "revert",
            to: "normal"
        }, {
            key: "box-shadow",
            from: "revert",
            to: "0px 0px 40.7px #0eced5,0px 0px 23.2px #0eced5,0px 0px 13.6px #0eced5,0px 0px 6.8px #e3ffff,0px 0px 1.9px #e3ffff,0px 0px 1px #e3ffff"
        }],
        [{
            key: "box-shadow",
            from: "revert",
            to: "0px 0px 15.6px #2eced5,0px 0px 8.9px #2eced5,0px 0px 5.2px #2eced5,0px 0px 2.6px #ebffff,0px 0px 0.7px #ebffff,0px 0px 0.4px #ebffff"
        }],
        [{
            key: "--f2w-attr-href",
            from: "#node-id:1176:446",
            to: "javascript:void(0)"
        }],
        [{
            key: "color",
            from: "#20526f",
            to: "#53c7ab"
        }],
        [{
            key: "left",
            from: "76px",
            to: "77px"
        }],
        [{
            key: "color",
            from: "#53c7ab",
            to: "#20526f"
        }],
        [{
            key: "--f2w-attr-href",
            from: "javascript:void(0)",
            to: "#node-id:1176:446"
        }],
        [{
            key: "left",
            from: "77px",
            to: "76px"
        }],
        [{
            key: "width",
            from: "40px",
            to: "50px"
        }, {
            key: "height",
            from: "40px",
            to: "50px"
        }],
        [{
            key: "flex-direction",
            from: "row",
            to: "column"
        }, {
            key: "grid-column-gap",
            from: "10px",
            to: "revert"
        }, {
            key: "justify-content",
            from: "flex-start",
            to: "center"
        }, {
            key: "width",
            from: "50px",
            to: "304px"
        }, {
            key: "height",
            from: "50px",
            to: "413px"
        }, {
            key: "padding",
            from: "0px",
            to: "5px 4px"
        }, {
            key: "grid-row-gap",
            from: "revert",
            to: "10px"
        }, {
            key: "filter",
            from: "revert",
            to: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))"
        }],
        [{
            key: "width",
            from: "50px",
            to: "40px"
        }, {
            key: "height",
            from: "50px",
            to: "40px"
        }, {
            key: "display",
            from: "revert",
            to: "none"
        }, {
            key: "opacity",
            from: "revert",
            to: "0"
        }],
        [{
            key: "flex-direction",
            from: "column",
            to: "row"
        }, {
            key: "grid-row-gap",
            from: "10px",
            to: "revert"
        }, {
            key: "justify-content",
            from: "center",
            to: "flex-start"
        }, {
            key: "width",
            from: "304px",
            to: "40px"
        }, {
            key: "height",
            from: "413px",
            to: "40px"
        }, {
            key: "filter",
            from: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))",
            to: "revert"
        }, {
            key: "padding",
            from: "5px 4px",
            to: "0px"
        }, {
            key: "grid-column-gap",
            from: "revert",
            to: "10px"
        }],
        [{
            key: "box-shadow",
            from: "revert",
            to: "0px 0px 20.3px #bababa,0px 0px 11.6px #bababa,0px 0px 6.8px #bababa,0px 0px 3.4px #bababa,0px 0px 1px #bababa,0px 0px 0.5px #bababa"
        }],
        [{
            key: "top",
            from: "311px",
            to: "211px"
        }, {
            key: "height",
            from: "92px",
            to: "192px"
        }],
        [{
            from: "Ros\xE1cea",
            to: "Ros\xE1cea                                                                                          ",
            key: "$innerHTML"
        }],
        [{
            key: "--f2w-order",
            from: "0",
            to: "5"
        }],
        [{
            from: "Leer M\xE1s ",
            to: "Leer M\xE1s",
            key: "$innerHTML"
        }],
        [{
            key: "background-color",
            from: "rgba(255,255,255,0.8)",
            to: "revert"
        }, {
            key: "filter",
            from: "drop-shadow(0px 4px 20px rgba(0,0,0,0.25))",
            to: "revert"
        }, {
            key: "backface-visibility",
            from: "hidden",
            to: "revert"
        }, {
            key: "transform",
            from: "translateZ(0)",
            to: "revert"
        }, {
            key: "background-image",
            from: "revert",
            to: "linear-gradient(270deg, rgba(255,255,255,0.8) 8.4%, rgba(255,255,255,0.8) 30.5%, rgba(255,255,255,0.8) 55.9%, rgba(134,243,214,0.8) 74.8%)"
        }, {
            key: "background-blend-mode",
            from: "revert",
            to: "normal"
        }, {
            key: "box-shadow",
            from: "revert",
            to: "0px 0px 44.6px #2eced5,0px 0px 25.5px #2eced5,0px 0px 14.9px #2eced5,0px 0px 7.4px #2eced5,0px 0px 2.1px #2eced5,0px 0px 1.1px #2eced5"
        }],
        [{
            key: "--f2w-order",
            from: "0",
            to: "1"
        }, {
            key: "top",
            from: "calc(-96px + 50%)",
            to: "65px"
        }],
        [{
            from: "En el \xE1rea de podolog\xEDa, nos enfocamos en mantener tus pies sanos y libres de molestias. Desde ex\xE1menes regulares hasta recomendaciones personalizadas, te ayudamos a prevenir enfermedades y complicaciones futuras. Utilizamos instrumental 100% esterilizado para garantizar tu seguridad y comodidad. ",
            to: "En el \xE1rea de podolog\xEDa, nos enfocamos en mantener tus pies sanos y libres de molestias. Desde ex\xE1menes regulares hasta recomendaciones personalizadas, te ayudamos a prevenir enfermedades y complicaciones futuras. Utilizamos instrumental 100% esterilizado para garantizar tu seguridad y comodidad.",
            key: "$innerHTML"
        }],
        [{
            key: "--f2w-order",
            from: "1",
            to: "2"
        }, {
            key: "bottom",
            from: "-0.5px",
            to: "0px"
        }],
        [{
            key: "--f2w-order",
            from: "2",
            to: "0"
        }],
        [{
            key: "color",
            from: "#03c976",
            to: "#2c5aff"
        }, {
            key: "right",
            from: "-7.7%",
            to: "-6.6%"
        }, {
            key: "width",
            from: "107.7%",
            to: "106.6%"
        }],
        [{
            key: "color",
            from: "#03c976",
            to: "#2c5aff"
        }],
        [{
            key: "background-color",
            from: "rgba(255,255,255,0.8)",
            to: "revert"
        }, {
            key: "filter",
            from: "drop-shadow(0px 4px 20px rgba(0,0,0,0.25))",
            to: "revert"
        }, {
            key: "backface-visibility",
            from: "hidden",
            to: "revert"
        }, {
            key: "transform",
            from: "translateZ(0)",
            to: "revert"
        }, {
            key: "background-image",
            from: "revert",
            to: "linear-gradient(270deg, rgba(255,255,255,0.8) 8.9%, rgba(255,255,255,0.8) 26.4%, rgba(255,255,255,0.8) 47.9%, rgba(134,243,214,0.8) 74.9%)"
        }, {
            key: "background-blend-mode",
            from: "revert",
            to: "normal"
        }, {
            key: "box-shadow",
            from: "revert",
            to: "0px 0px 44.6px #2eced5,0px 0px 25.5px #2eced5,0px 0px 14.9px #2eced5,0px 0px 7.4px #2eced5,0px 0px 2.1px #2eced5,0px 0px 1.1px #2eced5"
        }],
        [{
            key: "grid-row-gap",
            from: "70px",
            to: "0px"
        }],
        [{
            key: "background-color",
            from: "#eef3ff",
            to: "#f8f8f7"
        }, {
            key: "flex-wrap",
            from: "nowrap",
            to: "wrap"
        }, {
            key: "flex-direction",
            from: "column",
            to: "row"
        }, {
            key: "grid-row-gap",
            from: "23px",
            to: "revert"
        }, {
            key: "--f2w-order",
            from: "0",
            to: "3"
        }, {
            key: "padding",
            from: "200px 156px 50px 172px",
            to: "66px 50px"
        }, {
            key: "overflow",
            from: "revert",
            to: "hidden"
        }, {
            key: "row-gap",
            from: "revert",
            to: "68px"
        }, {
            key: "align-content",
            from: "revert",
            to: "center"
        }, {
            key: "grid-column-gap",
            from: "revert",
            to: "25px"
        }],
        [{
            key: "justify-content",
            from: "flex-end",
            to: "safe center"
        }, {
            key: "--f2w-order",
            from: "3",
            to: "7"
        }],
        [{
            key: "--f2w-order",
            from: "1",
            to: "0"
        }]
    ];
    return {
        1: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[0],
                reactions: [{
                    type: "hover",
                    from: "1"
                }],
                eltId: "Component_mobile"
            }],
            rootId: "Component_mobile"
        },
        18: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[1],
                reactions: [{
                    type: "hover",
                    from: "18"
                }],
                eltId: "Cont_ctenos_mobile"
            }, {
                props: t[2],
                eltId: "I1799_1757_1799_1713_1778_1156"
            }, {
                props: t[2],
                eltId: "__14"
            }],
            rootId: "Cont_ctenos_mobile"
        },
        19: {
            type: "ALIAS",
            alias: "18"
        },
        29: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[3],
                reactions: [{
                    type: "hover",
                    from: "29"
                }],
                eltId: "tag_mobile"
            }, {
                props: t[4],
                eltId: "I1799_1757_1799_1714_1778_1164"
            }, {
                props: t[5],
                eltId: "Rectangle_2"
            }],
            rootId: "tag_mobile"
        },
        30: {
            type: "ALIAS",
            alias: "29"
        },
        42: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[0],
                reactions: [{
                    type: "hover",
                    from: "42"
                }],
                eltId: "Component_mobile_2"
            }],
            rootId: "Component_mobile_2"
        },
        59: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[1],
                reactions: [{
                    type: "hover",
                    from: "59"
                }],
                eltId: "Cont_ctenos_mobile_0"
            }, {
                props: t[2],
                eltId: "I1799_1769_1799_1282_1778_1156"
            }, {
                props: t[2],
                eltId: "__19"
            }],
            rootId: "Cont_ctenos_mobile_0"
        },
        60: {
            type: "ALIAS",
            alias: "59"
        },
        70: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[3],
                reactions: [{
                    type: "hover",
                    from: "70"
                }],
                eltId: "tag_mobile_0"
            }, {
                props: t[4],
                eltId: "I1799_1769_1799_1283_1778_1164"
            }, {
                props: t[5],
                eltId: "Rectangle_2_0"
            }],
            rootId: "tag_mobile_0"
        },
        71: {
            type: "ALIAS",
            alias: "70"
        },
        83: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[6],
                reactions: [{
                    type: "hover",
                    from: "83"
                }],
                eltId: "Component_movile_3"
            }],
            rootId: "Component_movile_3"
        },
        100: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[1],
                reactions: [{
                    type: "hover",
                    from: "100"
                }],
                eltId: "Cont_ctenos_mobile_1"
            }, {
                props: t[2],
                eltId: "I1799_1781_1799_1328_1778_1156"
            }, {
                props: t[2],
                eltId: "__24"
            }],
            rootId: "Cont_ctenos_mobile_1"
        },
        101: {
            type: "ALIAS",
            alias: "100"
        },
        111: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[3],
                reactions: [{
                    type: "hover",
                    from: "111"
                }],
                eltId: "tag_mobile_1"
            }, {
                props: t[4],
                eltId: "I1799_1781_1799_1329_1778_1164"
            }, {
                props: t[5],
                eltId: "Rectangle_2_1"
            }],
            rootId: "tag_mobile_1"
        },
        112: {
            type: "ALIAS",
            alias: "111"
        },
        124: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[7],
                reactions: [{
                    type: "hover",
                    from: "124"
                }],
                eltId: "Link_mobile"
            }],
            rootId: "Link_mobile"
        },
        129: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[8],
                reactions: [{
                    type: "hover",
                    from: "129"
                }],
                eltId: "Agendar"
            }, {
                props: t[9],
                eltId: "I1620_4538_1122_438"
            }, {
                props: t[9],
                eltId: "__57"
            }],
            rootId: "Agendar"
        },
        140: {
            type: "ANIMATE",
            animations: [{
                props: t[10],
                eltId: "tres_barras"
            }, {
                props: t[11],
                eltId: "Vector"
            }, {
                props: t[12],
                eltId: "Frame_12"
            }, {
                props: t[13],
                eltId: "Image_0"
            }, {
                props: t[5],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_1",
                altId: "Vector_3"
            }, {
                props: t[14],
                eltId: "Frame_13"
            }, {
                props: t[14],
                eltId: "Frame_8"
            }, {
                props: t[5],
                eltId: "ph_house_fill"
            }, {
                props: t[15],
                eltId: "Vector_11"
            }, {
                props: t[16],
                eltId: "I1620_4584_1263_760"
            }, {
                props: t[5],
                eltId: "Text_input_1"
            }, {
                props: t[16],
                eltId: "I1620_4584_1263_763"
            }, {
                props: t[16],
                eltId: "I1620_4584_1263_764"
            }, {
                props: t[16],
                eltId: "I1620_4584_1263_765"
            }],
            rootId: "tres_barras"
        },
        141: {
            type: "ALIAS",
            alias: "140"
        },
        148: {
            type: "ANIMATE",
            animations: [{
                props: t[17],
                eltId: "tres_barras"
            }, {
                props: t[15],
                eltId: "Vector"
            }, {
                props: t[14],
                eltId: "Frame_12"
            }, {
                props: t[5],
                eltId: "Image_0"
            }, {
                props: t[13],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_3",
                altId: "Vector_1"
            }, {
                props: t[12],
                eltId: "Frame_13"
            }, {
                props: t[12],
                eltId: "Frame_8"
            }, {
                props: t[13],
                eltId: "ph_house_fill"
            }, {
                props: t[11],
                eltId: "Vector_11"
            }, {
                props: t[18],
                eltId: "I1620_4584_1263_760"
            }, {
                props: t[13],
                eltId: "Text_input_1"
            }, {
                props: t[18],
                eltId: "I1620_4584_1263_763"
            }, {
                props: t[18],
                eltId: "I1620_4584_1263_764"
            }, {
                props: t[18],
                eltId: "I1620_4584_1263_765"
            }],
            rootId: "tres_barras"
        },
        149: {
            type: "ANIMATE",
            animations: [{
                props: t[17],
                eltId: "tres_barras"
            }, {
                props: t[15],
                eltId: "Vector"
            }, {
                props: t[14],
                eltId: "Frame_12"
            }, {
                props: t[5],
                eltId: "Image_0"
            }, {
                props: t[13],
                reactions: [{
                    type: "click",
                    from: "149",
                    to: "148"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_5",
                altId: "Vector_1"
            }, {
                props: t[18],
                reactions: [{
                    type: "click",
                    from: "182",
                    to: "181"
                }],
                eltId: "I1620_4584_1263_764"
            }, {
                props: t[18],
                reactions: [{
                    type: "click",
                    from: "189",
                    to: "188"
                }],
                eltId: "I1620_4584_1263_765"
            }, {
                props: t[18],
                eltId: "I1620_4584_1263_806"
            }, {
                props: t[12],
                eltId: "Frame_10"
            }, {
                props: t[13],
                eltId: "healthicons_doctor_24px"
            }, {
                props: t[11],
                eltId: "Vector_13"
            }, {
                props: t[18],
                eltId: "I1620_4584_1263_807"
            }, {
                eltId: "Text_input_4",
                altId: "Text_input_2"
            }],
            rootId: "tres_barras"
        },
        150: {
            type: "ANIMATE",
            animations: [{
                props: t[17],
                eltId: "tres_barras"
            }, {
                props: t[15],
                eltId: "Vector"
            }, {
                props: t[14],
                eltId: "Frame_12"
            }, {
                props: t[5],
                eltId: "Image_0"
            }, {
                props: t[13],
                reactions: [{
                    type: "click",
                    from: "150",
                    to: "148"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_7",
                altId: "Vector_1"
            }, {
                props: t[18],
                reactions: [{
                    type: "click",
                    from: "175",
                    to: "174"
                }],
                eltId: "I1620_4584_1263_763"
            }, {
                props: t[18],
                reactions: [{
                    type: "click",
                    from: "190",
                    to: "188"
                }],
                eltId: "I1620_4584_1263_765"
            }, {
                props: t[18],
                reactions: [{
                    type: "click",
                    from: "196",
                    to: "195"
                }],
                eltId: "I1620_4584_1263_806"
            }, {
                eltId: "Text_input_6",
                altId: "Text_input_2"
            }, {
                props: t[12],
                eltId: "Frame_9"
            }, {
                props: t[13],
                eltId: "lsicon_user_crowd_filled"
            }, {
                props: t[11],
                eltId: "Vector_15"
            }, {
                props: t[18],
                eltId: "I1620_4584_1263_817"
            }],
            rootId: "tres_barras"
        },
        151: {
            type: "ANIMATE",
            animations: [{
                props: t[17],
                eltId: "tres_barras"
            }, {
                props: t[15],
                eltId: "Vector"
            }, {
                props: t[14],
                eltId: "Frame_12"
            }, {
                props: t[5],
                eltId: "Image_0"
            }, {
                props: t[13],
                reactions: [{
                    type: "click",
                    from: "151",
                    to: "148"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_9",
                altId: "Vector_1"
            }, {
                props: t[18],
                reactions: [{
                    type: "click",
                    from: "176",
                    to: "174"
                }],
                eltId: "I1620_4584_1263_763"
            }, {
                props: t[18],
                reactions: [{
                    type: "click",
                    from: "183",
                    to: "181"
                }],
                eltId: "I1620_4584_1263_764"
            }, {
                props: t[18],
                reactions: [{
                    type: "click",
                    from: "197",
                    to: "195"
                }],
                eltId: "I1620_4584_1263_806"
            }, {
                eltId: "Text_input_7",
                altId: "Text_input_2"
            }, {
                props: t[12],
                eltId: "Frame_11"
            }, {
                props: t[13],
                eltId: "fluent_call_16_filled"
            }, {
                props: t[11],
                eltId: "Vector_17"
            }, {
                props: t[18],
                eltId: "I1620_4584_1263_827"
            }],
            rootId: "tres_barras"
        },
        174: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "148",
                    to: "149"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_3",
                altId: "Vector_5"
            }, {
                props: t[12],
                eltId: "Frame_13"
            }, {
                props: t[12],
                eltId: "Frame_8"
            }, {
                props: t[13],
                eltId: "ph_house_fill"
            }, {
                props: t[11],
                eltId: "Vector_11"
            }, {
                props: t[18],
                eltId: "I1620_4584_1263_760"
            }, {
                props: t[13],
                eltId: "Text_input_1"
            }, {
                props: t[18],
                eltId: "I1620_4584_1263_763"
            }, {
                reactions: [{
                    type: "click",
                    from: "181",
                    to: "182"
                }],
                eltId: "I1620_4584_1263_764"
            }, {
                reactions: [{
                    type: "click",
                    from: "188",
                    to: "189"
                }],
                eltId: "I1620_4584_1263_765"
            }, {
                props: t[16],
                eltId: "I1620_4584_1263_806"
            }, {
                props: t[14],
                eltId: "Frame_10"
            }, {
                props: t[5],
                eltId: "healthicons_doctor_24px"
            }, {
                props: t[15],
                eltId: "Vector_13"
            }, {
                props: t[16],
                eltId: "I1620_4584_1263_807"
            }, {
                eltId: "Text_input_2",
                altId: "Text_input_4"
            }],
            rootId: "tres_barras"
        },
        175: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "150",
                    to: "149"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_7",
                altId: "Vector_5"
            }, {
                props: t[18],
                reactions: [{
                    type: "click",
                    from: "175",
                    to: "174"
                }],
                eltId: "I1620_4584_1263_763"
            }, {
                props: t[16],
                reactions: [{
                    type: "click",
                    from: "181",
                    to: "182"
                }],
                eltId: "I1620_4584_1263_764"
            }, {
                reactions: [{
                    type: "click",
                    from: "190",
                    to: "189"
                }],
                eltId: "I1620_4584_1263_765"
            }, {
                reactions: [{
                    type: "click",
                    from: "196",
                    to: "195"
                }],
                eltId: "I1620_4584_1263_806"
            }, {
                props: t[14],
                eltId: "Frame_10"
            }, {
                props: t[5],
                eltId: "healthicons_doctor_24px"
            }, {
                props: t[15],
                eltId: "Vector_13"
            }, {
                props: t[16],
                eltId: "I1620_4584_1263_807"
            }, {
                eltId: "Text_input_6",
                altId: "Text_input_4"
            }, {
                props: t[12],
                eltId: "Frame_9"
            }, {
                props: t[13],
                eltId: "lsicon_user_crowd_filled"
            }, {
                props: t[11],
                eltId: "Vector_15"
            }, {
                props: t[18],
                eltId: "I1620_4584_1263_817"
            }],
            rootId: "tres_barras"
        },
        176: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "151",
                    to: "149"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_9",
                altId: "Vector_5"
            }, {
                props: t[18],
                reactions: [{
                    type: "click",
                    from: "176",
                    to: "174"
                }],
                eltId: "I1620_4584_1263_763"
            }, {
                reactions: [{
                    type: "click",
                    from: "183",
                    to: "182"
                }],
                eltId: "I1620_4584_1263_764"
            }, {
                props: t[16],
                reactions: [{
                    type: "click",
                    from: "188",
                    to: "189"
                }],
                eltId: "I1620_4584_1263_765"
            }, {
                reactions: [{
                    type: "click",
                    from: "197",
                    to: "195"
                }],
                eltId: "I1620_4584_1263_806"
            }, {
                props: t[14],
                eltId: "Frame_10"
            }, {
                props: t[5],
                eltId: "healthicons_doctor_24px"
            }, {
                props: t[15],
                eltId: "Vector_13"
            }, {
                props: t[16],
                eltId: "I1620_4584_1263_807"
            }, {
                eltId: "Text_input_7",
                altId: "Text_input_4"
            }, {
                props: t[12],
                eltId: "Frame_11"
            }, {
                props: t[13],
                eltId: "fluent_call_16_filled"
            }, {
                props: t[11],
                eltId: "Vector_17"
            }, {
                props: t[18],
                eltId: "I1620_4584_1263_827"
            }],
            rootId: "tres_barras"
        },
        181: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "148",
                    to: "150"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_3",
                altId: "Vector_7"
            }, {
                props: t[12],
                eltId: "Frame_13"
            }, {
                props: t[12],
                eltId: "Frame_8"
            }, {
                props: t[13],
                eltId: "ph_house_fill"
            }, {
                props: t[11],
                eltId: "Vector_11"
            }, {
                props: t[18],
                eltId: "I1620_4584_1263_760"
            }, {
                props: t[13],
                eltId: "Text_input_1"
            }, {
                reactions: [{
                    type: "click",
                    from: "174",
                    to: "175"
                }],
                eltId: "I1620_4584_1263_763"
            }, {
                props: t[18],
                eltId: "I1620_4584_1263_764"
            }, {
                reactions: [{
                    type: "click",
                    from: "188",
                    to: "190"
                }],
                eltId: "I1620_4584_1263_765"
            }, {
                props: t[16],
                reactions: [{
                    type: "click",
                    from: "195",
                    to: "196"
                }],
                eltId: "I1620_4584_1263_806"
            }, {
                eltId: "Text_input_2",
                altId: "Text_input_6"
            }, {
                props: t[14],
                eltId: "Frame_9"
            }, {
                props: t[5],
                eltId: "lsicon_user_crowd_filled"
            }, {
                props: t[15],
                eltId: "Vector_15"
            }, {
                props: t[16],
                eltId: "I1620_4584_1263_817"
            }],
            rootId: "tres_barras"
        },
        182: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "149",
                    to: "150"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_5",
                altId: "Vector_7"
            }, {
                props: t[16],
                reactions: [{
                    type: "click",
                    from: "174",
                    to: "175"
                }],
                eltId: "I1620_4584_1263_763"
            }, {
                props: t[18],
                reactions: [{
                    type: "click",
                    from: "182",
                    to: "181"
                }],
                eltId: "I1620_4584_1263_764"
            }, {
                reactions: [{
                    type: "click",
                    from: "189",
                    to: "190"
                }],
                eltId: "I1620_4584_1263_765"
            }, {
                reactions: [{
                    type: "click",
                    from: "195",
                    to: "196"
                }],
                eltId: "I1620_4584_1263_806"
            }, {
                props: t[12],
                eltId: "Frame_10"
            }, {
                props: t[13],
                eltId: "healthicons_doctor_24px"
            }, {
                props: t[11],
                eltId: "Vector_13"
            }, {
                props: t[18],
                eltId: "I1620_4584_1263_807"
            }, {
                eltId: "Text_input_4",
                altId: "Text_input_6"
            }, {
                props: t[14],
                eltId: "Frame_9"
            }, {
                props: t[5],
                eltId: "lsicon_user_crowd_filled"
            }, {
                props: t[15],
                eltId: "Vector_15"
            }, {
                props: t[16],
                eltId: "I1620_4584_1263_817"
            }],
            rootId: "tres_barras"
        },
        183: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "151",
                    to: "150"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_9",
                altId: "Vector_7"
            }, {
                reactions: [{
                    type: "click",
                    from: "176",
                    to: "175"
                }],
                eltId: "I1620_4584_1263_763"
            }, {
                props: t[18],
                reactions: [{
                    type: "click",
                    from: "183",
                    to: "181"
                }],
                eltId: "I1620_4584_1263_764"
            }, {
                props: t[16],
                reactions: [{
                    type: "click",
                    from: "188",
                    to: "190"
                }],
                eltId: "I1620_4584_1263_765"
            }, {
                reactions: [{
                    type: "click",
                    from: "197",
                    to: "196"
                }],
                eltId: "I1620_4584_1263_806"
            }, {
                eltId: "Text_input_7",
                altId: "Text_input_6"
            }, {
                props: t[14],
                eltId: "Frame_9"
            }, {
                props: t[5],
                eltId: "lsicon_user_crowd_filled"
            }, {
                props: t[15],
                eltId: "Vector_15"
            }, {
                props: t[16],
                eltId: "I1620_4584_1263_817"
            }, {
                props: t[12],
                eltId: "Frame_11"
            }, {
                props: t[13],
                eltId: "fluent_call_16_filled"
            }, {
                props: t[11],
                eltId: "Vector_17"
            }, {
                props: t[18],
                eltId: "I1620_4584_1263_827"
            }],
            rootId: "tres_barras"
        },
        188: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "148",
                    to: "151"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_3",
                altId: "Vector_9"
            }, {
                props: t[12],
                eltId: "Frame_13"
            }, {
                props: t[12],
                eltId: "Frame_8"
            }, {
                props: t[13],
                eltId: "ph_house_fill"
            }, {
                props: t[11],
                eltId: "Vector_11"
            }, {
                props: t[18],
                eltId: "I1620_4584_1263_760"
            }, {
                props: t[13],
                eltId: "Text_input_1"
            }, {
                reactions: [{
                    type: "click",
                    from: "174",
                    to: "176"
                }],
                eltId: "I1620_4584_1263_763"
            }, {
                reactions: [{
                    type: "click",
                    from: "181",
                    to: "183"
                }],
                eltId: "I1620_4584_1263_764"
            }, {
                props: t[18],
                eltId: "I1620_4584_1263_765"
            }, {
                props: t[16],
                reactions: [{
                    type: "click",
                    from: "195",
                    to: "197"
                }],
                eltId: "I1620_4584_1263_806"
            }, {
                eltId: "Text_input_2",
                altId: "Text_input_7"
            }, {
                props: t[14],
                eltId: "Frame_11"
            }, {
                props: t[5],
                eltId: "fluent_call_16_filled"
            }, {
                props: t[15],
                eltId: "Vector_17"
            }, {
                props: t[16],
                eltId: "I1620_4584_1263_827"
            }],
            rootId: "tres_barras"
        },
        189: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "149",
                    to: "151"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_5",
                altId: "Vector_9"
            }, {
                props: t[16],
                reactions: [{
                    type: "click",
                    from: "174",
                    to: "176"
                }],
                eltId: "I1620_4584_1263_763"
            }, {
                reactions: [{
                    type: "click",
                    from: "182",
                    to: "183"
                }],
                eltId: "I1620_4584_1263_764"
            }, {
                props: t[18],
                reactions: [{
                    type: "click",
                    from: "189",
                    to: "188"
                }],
                eltId: "I1620_4584_1263_765"
            }, {
                reactions: [{
                    type: "click",
                    from: "195",
                    to: "197"
                }],
                eltId: "I1620_4584_1263_806"
            }, {
                props: t[12],
                eltId: "Frame_10"
            }, {
                props: t[13],
                eltId: "healthicons_doctor_24px"
            }, {
                props: t[11],
                eltId: "Vector_13"
            }, {
                props: t[18],
                eltId: "I1620_4584_1263_807"
            }, {
                eltId: "Text_input_4",
                altId: "Text_input_7"
            }, {
                props: t[14],
                eltId: "Frame_11"
            }, {
                props: t[5],
                eltId: "fluent_call_16_filled"
            }, {
                props: t[15],
                eltId: "Vector_17"
            }, {
                props: t[16],
                eltId: "I1620_4584_1263_827"
            }],
            rootId: "tres_barras"
        },
        190: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "150",
                    to: "151"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_7",
                altId: "Vector_9"
            }, {
                reactions: [{
                    type: "click",
                    from: "175",
                    to: "176"
                }],
                eltId: "I1620_4584_1263_763"
            }, {
                props: t[16],
                reactions: [{
                    type: "click",
                    from: "181",
                    to: "183"
                }],
                eltId: "I1620_4584_1263_764"
            }, {
                props: t[18],
                reactions: [{
                    type: "click",
                    from: "190",
                    to: "188"
                }],
                eltId: "I1620_4584_1263_765"
            }, {
                reactions: [{
                    type: "click",
                    from: "196",
                    to: "197"
                }],
                eltId: "I1620_4584_1263_806"
            }, {
                eltId: "Text_input_6",
                altId: "Text_input_7"
            }, {
                props: t[12],
                eltId: "Frame_9"
            }, {
                props: t[13],
                eltId: "lsicon_user_crowd_filled"
            }, {
                props: t[11],
                eltId: "Vector_15"
            }, {
                props: t[18],
                eltId: "I1620_4584_1263_817"
            }, {
                props: t[14],
                eltId: "Frame_11"
            }, {
                props: t[5],
                eltId: "fluent_call_16_filled"
            }, {
                props: t[15],
                eltId: "Vector_17"
            }, {
                props: t[16],
                eltId: "I1620_4584_1263_827"
            }],
            rootId: "tres_barras"
        },
        195: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "149",
                    to: "148"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_5",
                altId: "Vector_3"
            }, {
                props: t[14],
                eltId: "Frame_13"
            }, {
                props: t[14],
                eltId: "Frame_8"
            }, {
                props: t[5],
                eltId: "ph_house_fill"
            }, {
                props: t[15],
                eltId: "Vector_11"
            }, {
                props: t[16],
                eltId: "I1620_4584_1263_760"
            }, {
                props: t[5],
                eltId: "Text_input_1"
            }, {
                props: t[16],
                eltId: "I1620_4584_1263_763"
            }, {
                reactions: [{
                    type: "click",
                    from: "182",
                    to: "181"
                }],
                eltId: "I1620_4584_1263_764"
            }, {
                reactions: [{
                    type: "click",
                    from: "189",
                    to: "188"
                }],
                eltId: "I1620_4584_1263_765"
            }, {
                props: t[18],
                eltId: "I1620_4584_1263_806"
            }, {
                props: t[12],
                eltId: "Frame_10"
            }, {
                props: t[13],
                eltId: "healthicons_doctor_24px"
            }, {
                props: t[11],
                eltId: "Vector_13"
            }, {
                props: t[18],
                eltId: "I1620_4584_1263_807"
            }, {
                eltId: "Text_input_4",
                altId: "Text_input_2"
            }],
            rootId: "tres_barras"
        },
        196: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "150",
                    to: "148"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_7",
                altId: "Vector_3"
            }, {
                props: t[14],
                eltId: "Frame_13"
            }, {
                props: t[14],
                eltId: "Frame_8"
            }, {
                props: t[5],
                eltId: "ph_house_fill"
            }, {
                props: t[15],
                eltId: "Vector_11"
            }, {
                props: t[16],
                eltId: "I1620_4584_1263_760"
            }, {
                props: t[5],
                eltId: "Text_input_1"
            }, {
                reactions: [{
                    type: "click",
                    from: "175",
                    to: "174"
                }],
                eltId: "I1620_4584_1263_763"
            }, {
                props: t[16],
                eltId: "I1620_4584_1263_764"
            }, {
                reactions: [{
                    type: "click",
                    from: "190",
                    to: "188"
                }],
                eltId: "I1620_4584_1263_765"
            }, {
                props: t[18],
                reactions: [{
                    type: "click",
                    from: "196",
                    to: "195"
                }],
                eltId: "I1620_4584_1263_806"
            }, {
                eltId: "Text_input_6",
                altId: "Text_input_2"
            }, {
                props: t[12],
                eltId: "Frame_9"
            }, {
                props: t[13],
                eltId: "lsicon_user_crowd_filled"
            }, {
                props: t[11],
                eltId: "Vector_15"
            }, {
                props: t[18],
                eltId: "I1620_4584_1263_817"
            }],
            rootId: "tres_barras"
        },
        197: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "151",
                    to: "148"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_9",
                altId: "Vector_3"
            }, {
                props: t[14],
                eltId: "Frame_13"
            }, {
                props: t[14],
                eltId: "Frame_8"
            }, {
                props: t[5],
                eltId: "ph_house_fill"
            }, {
                props: t[15],
                eltId: "Vector_11"
            }, {
                props: t[16],
                eltId: "I1620_4584_1263_760"
            }, {
                props: t[5],
                eltId: "Text_input_1"
            }, {
                reactions: [{
                    type: "click",
                    from: "176",
                    to: "174"
                }],
                eltId: "I1620_4584_1263_763"
            }, {
                reactions: [{
                    type: "click",
                    from: "183",
                    to: "181"
                }],
                eltId: "I1620_4584_1263_764"
            }, {
                props: t[16],
                eltId: "I1620_4584_1263_765"
            }, {
                props: t[18],
                reactions: [{
                    type: "click",
                    from: "197",
                    to: "195"
                }],
                eltId: "I1620_4584_1263_806"
            }, {
                eltId: "Text_input_7",
                altId: "Text_input_2"
            }, {
                props: t[12],
                eltId: "Frame_11"
            }, {
                props: t[13],
                eltId: "fluent_call_16_filled"
            }, {
                props: t[11],
                eltId: "Vector_17"
            }, {
                props: t[18],
                eltId: "I1620_4584_1263_827"
            }],
            rootId: "tres_barras"
        },
        258: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[19],
                reactions: [{
                    type: "hover",
                    from: "258"
                }],
                eltId: "Ver_m_s_"
            }],
            rootId: "Ver_m_s_"
        },
        269: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[20],
                reactions: [{
                    type: "hover",
                    from: "269"
                }],
                eltId: "Component_table"
            }, {
                props: t[21],
                eltId: "Frame_4_2"
            }],
            rootId: "Component_table"
        },
        291: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[1],
                reactions: [{
                    type: "hover",
                    from: "291"
                }],
                eltId: "Cont_ctenos_table"
            }, {
                props: t[2],
                eltId: "I1775_1113_1778_1080_1775_1201"
            }, {
                props: t[2],
                eltId: "__93"
            }],
            rootId: "Cont_ctenos_table"
        },
        292: {
            type: "ALIAS",
            alias: "291"
        },
        304: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[3],
                reactions: [{
                    type: "hover",
                    from: "304"
                }],
                eltId: "tag_table"
            }, {
                props: t[4],
                eltId: "I1775_1113_1778_1088_1775_1214"
            }, {
                props: t[5],
                eltId: "Rectangle_2_2"
            }],
            rootId: "tag_table"
        },
        305: {
            type: "ALIAS",
            alias: "304"
        },
        319: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[22],
                reactions: [{
                    type: "hover",
                    from: "319"
                }],
                eltId: "Component_table_2"
            }, {
                reactions: [{
                    type: "hover",
                    from: "354",
                    to: "358"
                }],
                eltId: "tag_table_0"
            }],
            rootId: "Component_table_2"
        },
        341: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[1],
                reactions: [{
                    type: "hover",
                    from: "341"
                }],
                eltId: "Cont_ctenos_table_0"
            }, {
                props: t[2],
                eltId: "I1775_1124_1778_1109_1775_1201"
            }, {
                props: t[2],
                eltId: "__100"
            }],
            rootId: "Cont_ctenos_table_0"
        },
        342: {
            type: "ALIAS",
            alias: "341"
        },
        354: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[3],
                reactions: [{
                    type: "hover",
                    from: "354"
                }],
                eltId: "tag_table_0"
            }, {
                props: t[4],
                eltId: "I1775_1124_1778_1110_1775_1214"
            }, {
                props: t[5],
                eltId: "Rectangle_2_3"
            }],
            rootId: "tag_table_0"
        },
        355: {
            type: "ANIMATE",
            animations: [{
                props: t[23],
                eltId: "Table_Servicios"
            }, {
                props: t[24],
                eltId: "Frame_0"
            }, {
                props: t[13],
                eltId: "Frame_3_0"
            }, {
                props: t[18],
                eltId: "_1620_4360"
            }, {
                props: t[11],
                eltId: "Line_1_0"
            }, {
                props: t[18],
                eltId: "_1620_4362"
            }, {
                props: t[14],
                eltId: "Frame_1"
            }, {
                props: t[5],
                eltId: "Group"
            }, {
                props: t[5],
                eltId: "Rectangle_0"
            }, {
                props: t[5],
                eltId: "Frame_2"
            }, {
                props: t[14],
                eltId: "Frame_5"
            }, {
                props: t[16],
                eltId: "_1333_753"
            }, {
                props: t[25],
                eltId: "_1333_754"
            }, {
                props: t[16],
                eltId: "_1333_755"
            }, {
                props: t[14],
                eltId: "Ver_m_s_"
            }, {
                props: t[16],
                eltId: "I1464_516_1457_526"
            }, {
                props: t[12],
                eltId: "Frame_26_0"
            }, {
                props: t[13],
                eltId: "pngwing_com_12_2_0"
            }, {
                props: t[13],
                eltId: "Component_table"
            }, {
                props: t[13],
                eltId: "Frame_22_2"
            }, {
                props: t[13],
                eltId: "Rectangle_1_2"
            }, {
                props: t[13],
                eltId: "Frame_27_2"
            }, {
                props: t[18],
                eltId: "I1775_1113_1765_1053"
            }, {
                props: t[18],
                eltId: "I1775_1113_1765_1054"
            }, {
                props: t[13],
                eltId: "Frame_4_2"
            }, {
                props: t[13],
                eltId: "Cont_ctenos_table"
            }, {
                props: t[18],
                eltId: "I1775_1113_1778_1080_1775_1201"
            }, {
                props: t[12],
                eltId: "tag_table"
            }, {
                props: t[18],
                eltId: "I1775_1113_1778_1088_1775_1214"
            }, {
                props: t[13],
                eltId: "Component_table_2"
            }, {
                props: t[13],
                eltId: "Frame_22_3"
            }, {
                props: t[13],
                eltId: "Rectangle_1_3"
            }, {
                props: t[13],
                eltId: "Frame_27_3"
            }, {
                props: t[18],
                eltId: "I1775_1124_1765_1064"
            }, {
                props: t[18],
                eltId: "I1775_1124_1765_1065"
            }, {
                props: t[13],
                eltId: "Frame_4_3"
            }, {
                props: t[13],
                eltId: "Cont_ctenos_table_0"
            }, {
                props: t[18],
                eltId: "I1775_1124_1778_1109_1775_1201"
            }, {
                props: t[12],
                eltId: "tag_table_0"
            }, {
                props: t[18],
                eltId: "I1775_1124_1778_1110_1775_1214"
            }, {
                props: t[13],
                eltId: "Component_table_3"
            }, {
                props: t[13],
                eltId: "Frame_22_4"
            }, {
                props: t[13],
                eltId: "Rectangle_1_4"
            }, {
                props: t[13],
                eltId: "Frame_27_4"
            }, {
                props: t[18],
                eltId: "I1775_1135_1765_1075"
            }, {
                props: t[18],
                eltId: "I1775_1135_1765_1076"
            }, {
                props: t[13],
                eltId: "Frame_4_4"
            }, {
                props: t[13],
                eltId: "Cont_ctenos_table_1"
            }, {
                props: t[18],
                eltId: "I1775_1135_1778_1124_1775_1201"
            }, {
                props: t[12],
                eltId: "tag_table_1"
            }, {
                props: t[18],
                eltId: "I1775_1135_1778_1125_1775_1214"
            }, {
                props: t[12],
                eltId: "Container_28"
            }, {
                props: t[12],
                eltId: "Container_29"
            }, {
                props: t[13],
                eltId: "Container_30"
            }, {
                props: t[12],
                eltId: "Margin_1"
            }, {
                props: t[12],
                eltId: "Container_31"
            }, {
                props: t[12],
                eltId: "Container_32"
            }, {
                props: t[12],
                eltId: "Heading_2"
            }, {
                props: t[18],
                eltId: "_1812_1162"
            }, {
                props: t[12],
                eltId: "Container_33"
            }, {
                props: t[12],
                eltId: "Container_34"
            }, {
                props: t[18],
                eltId: "_1812_1165"
            }, {
                props: t[12],
                eltId: "Margin_2"
            }, {
                props: t[12],
                eltId: "Container_35"
            }, {
                props: t[12],
                eltId: "Container_36"
            }, {
                props: t[12],
                eltId: "Container_37"
            }, {
                props: t[18],
                eltId: "_1812_1170"
            }, {
                props: t[12],
                eltId: "Background_5"
            }, {
                props: t[13],
                eltId: "Background_6"
            }, {
                props: t[12],
                eltId: "Container_38"
            }, {
                props: t[12],
                eltId: "Container_39"
            }, {
                props: t[18],
                eltId: "_1812_1175"
            }, {
                props: t[12],
                eltId: "Margin_3"
            }, {
                props: t[12],
                eltId: "Container_40"
            }, {
                props: t[12],
                eltId: "Container_41"
            }, {
                props: t[12],
                eltId: "Container_42"
            }, {
                props: t[18],
                eltId: "_1812_1180"
            }, {
                props: t[12],
                eltId: "Background_7"
            }, {
                props: t[13],
                eltId: "Background_8"
            }, {
                props: t[12],
                eltId: "Container_43"
            }, {
                props: t[12],
                eltId: "Container_44"
            }, {
                props: t[18],
                eltId: "_1812_1185"
            }, {
                props: t[12],
                eltId: "Container_45"
            }, {
                props: t[12],
                eltId: "Container_46"
            }, {
                props: t[12],
                eltId: "Container_47"
            }, {
                props: t[12],
                eltId: "Container_48"
            }, {
                props: t[18],
                eltId: "_1812_1190"
            }, {
                props: t[12],
                eltId: "Background_9"
            }, {
                props: t[13],
                eltId: "Background_10"
            }, {
                props: t[12],
                eltId: "Container_49"
            }, {
                props: t[12],
                eltId: "Container_50"
            }, {
                props: t[18],
                eltId: "_1812_1195"
            }, {
                props: t[12],
                eltId: "Frame_29_0"
            }, {
                props: t[12],
                eltId: "Container_51"
            }, {
                props: t[12],
                eltId: "Container_52"
            }, {
                props: t[13],
                eltId: "bg_why_choose_us_1024x693_png_0"
            }, {
                props: t[12],
                eltId: "Container_53"
            }, {
                props: t[12],
                eltId: "Container_54"
            }, {
                props: t[26],
                eltId: "Rectangle_3"
            }, {
                props: t[12],
                eltId: "Container_55"
            }, {
                props: t[12],
                eltId: "Container_56"
            }, {
                props: t[13],
                eltId: "Sin_titulo_5_png_0"
            }, {
                props: t[13],
                eltId: "Container_57"
            }, {
                props: t[13],
                eltId: "Container_58"
            }, {
                props: t[12],
                eltId: "Section_0"
            }, {
                props: t[13],
                eltId: "Container_59"
            }, {
                props: t[18],
                eltId: "_1812_1210"
            }, {
                props: t[18],
                eltId: "_1812_1211"
            }, {
                props: t[12],
                eltId: "Link"
            }, {
                props: t[12],
                eltId: "Container_60"
            }, {
                props: t[12],
                eltId: "Container_61"
            }, {
                props: t[18],
                eltId: "I1816_1410_1816_1396"
            }, {
                props: t[27],
                eltId: "floater_0"
            }, {
                props: t[28],
                eltId: "Navbar"
            }, {
                reactions: [{
                    type: "click",
                    from: "646",
                    to: "649"
                }],
                eltId: "Text_input_12"
            }, {
                reactions: [{
                    type: "click",
                    from: "672",
                    to: "675"
                }],
                eltId: "Text_input_14"
            }, {
                reactions: [{
                    type: "click",
                    from: "698",
                    to: "701"
                }],
                eltId: "Button"
            }, {
                props: t[5],
                eltId: "Frame_15"
            }, {
                props: t[15],
                eltId: "Vector_22"
            }, {
                props: t[15],
                eltId: "video"
            }, {
                props: t[5],
                eltId: "Ellipse"
            }, {
                props: t[15],
                eltId: "Vector_24"
            }, {
                props: t[14],
                eltId: "Frame_6"
            }, {
                props: t[16],
                eltId: "_1333_905"
            }, {
                props: t[16],
                eltId: "_1333_906"
            }, {
                props: t[14],
                eltId: "WhatsApp"
            }, {
                props: t[5],
                eltId: "Vertical_container_1"
            }, {
                props: t[5],
                eltId: "_1"
            }, {
                eltId: "Group_0",
                altId: "Group_4"
            }, {
                props: t[5],
                eltId: "Ellipse_0"
            }, {
                props: t[5],
                eltId: "Image_3"
            }, {
                props: t[14],
                eltId: "Frame_7"
            }, {
                props: t[16],
                eltId: "_1333_758"
            }, {
                props: t[16],
                eltId: "_1333_759"
            }, {
                props: t[16],
                eltId: "_1333_760"
            }, {
                props: t[14],
                eltId: "Frame_14"
            }, {
                props: t[5],
                eltId: "Property_1_card_4"
            }, {
                props: t[5],
                eltId: "Frame_16"
            }, {
                props: t[16],
                eltId: "I1333_762_239_55"
            }, {
                props: t[5],
                eltId: "Property_1_card_4_0"
            }, {
                props: t[5],
                eltId: "Frame_17"
            }, {
                props: t[16],
                eltId: "I1333_763_244_27"
            }, {
                props: t[5],
                eltId: "Property_1_card_4_1"
            }, {
                props: t[5],
                eltId: "Frame_18"
            }, {
                props: t[16],
                eltId: "I1333_764_244_41"
            }, {
                props: t[5],
                eltId: "Property_1_card_4_2"
            }, {
                props: t[5],
                eltId: "Frame_19"
            }, {
                props: t[16],
                eltId: "I1333_765_244_87"
            }, {
                props: t[5],
                eltId: "Property_1_card_4_3"
            }, {
                props: t[5],
                eltId: "Frame_20"
            }, {
                props: t[16],
                eltId: "I1333_766_245_112"
            }, {
                props: t[5],
                eltId: "Property_1_card_4_4"
            }, {
                props: t[5],
                eltId: "Frame_21"
            }, {
                props: t[16],
                eltId: "I1333_767_245_126"
            }, {
                props: t[5],
                eltId: "Property_1_card_4_5"
            }, {
                props: t[5],
                eltId: "Frame_23"
            }, {
                props: t[16],
                eltId: "I1333_768_248_30"
            }, {
                props: t[5],
                eltId: "Property_1_card_4_6"
            }, {
                props: t[5],
                eltId: "Frame_24"
            }, {
                props: t[16],
                eltId: "I1333_769_249_41"
            }, {
                props: t[5],
                eltId: "Property_1_card_4_7"
            }, {
                props: t[5],
                eltId: "Frame_25"
            }, {
                props: t[16],
                eltId: "I1333_770_249_52"
            }, {
                props: t[14],
                eltId: "Frame_30"
            }, {
                props: t[14],
                eltId: "Frame_31"
            }, {
                props: t[14],
                eltId: "Frame_32"
            }, {
                props: t[14],
                eltId: "Frame_33"
            }, {
                props: t[16],
                eltId: "_1333_775"
            }, {
                props: t[16],
                eltId: "_1333_776"
            }, {
                props: t[16],
                eltId: "_1333_777"
            }, {
                props: t[14],
                eltId: "Frame_34"
            }, {
                props: t[14],
                eltId: "Frame_35"
            }, {
                props: t[16],
                eltId: "_1333_780"
            }, {
                props: t[16],
                eltId: "_1333_781"
            }, {
                props: t[16],
                eltId: "_1333_782"
            }, {
                props: t[14],
                eltId: "Frame_36"
            }, {
                props: t[14],
                eltId: "Frame_37"
            }, {
                props: t[16],
                eltId: "_1333_785"
            }, {
                props: t[16],
                eltId: "_1333_786"
            }, {
                props: t[16],
                eltId: "_1333_787"
            }, {
                props: t[14],
                eltId: "Frame_38"
            }, {
                props: t[14],
                eltId: "Frame_39"
            }, {
                props: t[16],
                eltId: "_1333_790"
            }, {
                props: t[16],
                eltId: "_1333_791"
            }, {
                props: t[16],
                eltId: "_1333_792"
            }, {
                props: t[14],
                eltId: "Frame_40"
            }, {
                props: t[5],
                eltId: "Group_12"
            }, {
                props: t[5],
                eltId: "Ellipse_2"
            }, {
                props: t[5],
                eltId: "Ellipse_3"
            }, {
                props: t[5],
                eltId: "Ellipse_4"
            }, {
                props: t[5],
                eltId: "Ellipse_5"
            }, {
                props: t[5],
                eltId: "Ellipse_6"
            }, {
                props: t[5],
                eltId: "Ellipse_7"
            }, {
                props: t[5],
                eltId: "Ellipse_8"
            }, {
                props: t[5],
                eltId: "Ellipse_9"
            }, {
                props: t[5],
                eltId: "Ellipse_10"
            }, {
                props: t[5],
                eltId: "Ellipse_11"
            }, {
                props: t[5],
                eltId: "Ellipse_12"
            }, {
                props: t[5],
                eltId: "Ellipse_13"
            }, {
                props: t[5],
                eltId: "Image_13"
            }, {
                props: t[5],
                eltId: "Group_13"
            }, {
                props: t[5],
                eltId: "Ellipse_14"
            }, {
                props: t[5],
                eltId: "Ellipse_15"
            }, {
                props: t[5],
                eltId: "Ellipse_16"
            }, {
                props: t[5],
                eltId: "Ellipse_17"
            }, {
                props: t[5],
                eltId: "Ellipse_18"
            }, {
                props: t[5],
                eltId: "Ellipse_19"
            }, {
                props: t[5],
                eltId: "Ellipse_20"
            }, {
                props: t[5],
                eltId: "Ellipse_21"
            }, {
                props: t[5],
                eltId: "Ellipse_22"
            }, {
                props: t[5],
                eltId: "Ellipse_23"
            }, {
                props: t[5],
                eltId: "Ellipse_24"
            }, {
                props: t[5],
                eltId: "Ellipse_25"
            }, {
                props: t[5],
                eltId: "Image_14"
            }, {
                props: t[14],
                eltId: "Frame_41"
            }, {
                props: t[14],
                eltId: "Frame_42"
            }, {
                props: t[5],
                eltId: "Group_14"
            }, {
                props: t[5],
                eltId: "Frame_43"
            }, {
                props: t[5],
                eltId: "Group_15"
            }, {
                props: t[5],
                eltId: "Frame_44"
            }, {
                props: t[15],
                eltId: "Vector_53"
            }, {
                props: t[5],
                eltId: "Frame_45"
            }, {
                props: t[15],
                eltId: "Vector_55"
            }, {
                props: t[5],
                eltId: "Frame_46"
            }, {
                props: t[15],
                eltId: "Vector_57"
            }, {
                props: t[5],
                eltId: "Frame_47"
            }, {
                props: t[15],
                eltId: "Vector_59"
            }, {
                props: t[5],
                eltId: "Frame_48"
            }, {
                props: t[15],
                eltId: "Vector_61"
            }, {
                props: t[16],
                eltId: "_1333_837"
            }, {
                props: t[5],
                eltId: "Frame_49"
            }, {
                props: t[15],
                eltId: "Group_16"
            }, {
                props: t[5],
                eltId: "Group_20"
            }, {
                props: t[5],
                eltId: "Frame_50"
            }, {
                props: t[5],
                eltId: "Group_21"
            }, {
                props: t[5],
                eltId: "Frame_51"
            }, {
                props: t[15],
                eltId: "Vector_65"
            }, {
                props: t[5],
                eltId: "Frame_52"
            }, {
                props: t[15],
                eltId: "Vector_67"
            }, {
                props: t[5],
                eltId: "Frame_53"
            }, {
                props: t[15],
                eltId: "Vector_69"
            }, {
                props: t[5],
                eltId: "Frame_54"
            }, {
                props: t[15],
                eltId: "Vector_71"
            }, {
                props: t[5],
                eltId: "Frame_55"
            }, {
                props: t[15],
                eltId: "Vector_73"
            }, {
                props: t[16],
                eltId: "_1333_859"
            }, {
                props: t[5],
                eltId: "Frame_56"
            }, {
                props: t[15],
                eltId: "Group_22"
            }, {
                props: t[5],
                eltId: "Group_26"
            }, {
                props: t[5],
                eltId: "Frame_57"
            }, {
                props: t[5],
                eltId: "Group_27"
            }, {
                props: t[5],
                eltId: "Frame_58"
            }, {
                props: t[15],
                eltId: "Vector_77"
            }, {
                props: t[5],
                eltId: "Frame_59"
            }, {
                props: t[15],
                eltId: "Vector_79"
            }, {
                props: t[5],
                eltId: "Frame_60"
            }, {
                props: t[15],
                eltId: "Vector_81"
            }, {
                props: t[5],
                eltId: "Frame_61"
            }, {
                props: t[15],
                eltId: "Vector_83"
            }, {
                props: t[5],
                eltId: "Frame_62"
            }, {
                props: t[15],
                eltId: "Vector_85"
            }, {
                props: t[16],
                eltId: "_1333_881"
            }, {
                props: t[5],
                eltId: "Frame_63"
            }, {
                props: t[15],
                eltId: "Group_28"
            }, {
                props: t[14],
                eltId: "Frame_64"
            }, {
                props: t[16],
                eltId: "_1333_891"
            }, {
                props: t[16],
                eltId: "_1333_892"
            }, {
                props: t[16],
                eltId: "_1333_893"
            }, {
                props: t[14],
                eltId: "Leer_m_s_"
            }, {
                props: t[16],
                eltId: "I1464_524_1464_513"
            }, {
                props: t[14],
                eltId: "Frame_65"
            }, {
                props: t[5],
                eltId: "Frame_66"
            }, {
                props: t[15],
                eltId: "Vector_89"
            }, {
                props: t[14],
                eltId: "Agendar_Cita"
            }, {
                props: t[16],
                eltId: "I1477_590_1464_530"
            }, {
                props: t[5],
                eltId: "Frame_67"
            }, {
                props: t[16],
                eltId: "_1333_900"
            }, {
                props: t[16],
                eltId: "_1333_901"
            }],
            rootId: "Table_Servicios"
        },
        356: {
            type: "ALIAS",
            alias: "355"
        },
        357: {
            type: "ALIAS",
            alias: "355"
        },
        358: {
            type: "ALIAS",
            alias: "354"
        },
        359: {
            type: "ALIAS",
            alias: "355"
        },
        373: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[29],
                reactions: [{
                    type: "hover",
                    from: "373"
                }],
                eltId: "Component_table_3"
            }],
            rootId: "Component_table_3"
        },
        395: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[1],
                reactions: [{
                    type: "hover",
                    from: "395"
                }],
                eltId: "Cont_ctenos_table_1"
            }, {
                props: t[2],
                eltId: "I1775_1135_1778_1124_1775_1201"
            }, {
                props: t[2],
                eltId: "__105"
            }],
            rootId: "Cont_ctenos_table_1"
        },
        396: {
            type: "ALIAS",
            alias: "395"
        },
        408: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[3],
                reactions: [{
                    type: "hover",
                    from: "408"
                }],
                eltId: "tag_table_1"
            }, {
                props: t[4],
                eltId: "I1775_1135_1778_1125_1775_1214"
            }, {
                props: t[5],
                eltId: "Rectangle_2_4"
            }],
            rootId: "tag_table_1"
        },
        409: {
            type: "ALIAS",
            alias: "408"
        },
        537: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[30],
                reactions: [{
                    type: "hover",
                    from: "537"
                }],
                eltId: "Link"
            }],
            rootId: "Link"
        },
        588: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[8],
                reactions: [{
                    type: "hover",
                    from: "588"
                }],
                eltId: "Agendar_0"
            }, {
                props: t[9],
                eltId: "I1620_4422_1122_438"
            }, {
                props: t[9],
                eltId: "__139"
            }],
            rootId: "Agendar_0"
        },
        589: {
            type: "ALIAS",
            alias: "588"
        },
        623: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[31],
                eltId: "nav"
            }, {
                reactions: [{
                    type: "click",
                    from: "623"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[32],
                eltId: "I1620_4431_1175_723"
            }, {
                props: t[32],
                eltId: "__142"
            }, {
                props: t[33],
                reactions: [{
                    type: "click",
                    to: "646"
                }],
                eltId: "Text_input_12"
            }, {
                props: t[34],
                eltId: "I1620_4431_1175_725"
            }, {
                props: t[34],
                eltId: "__143"
            }, {
                props: t[13],
                eltId: "Text_input_13"
            }, {
                reactions: [{
                    type: "click",
                    from: "673",
                    to: "672"
                }],
                eltId: "Text_input_14"
            }, {
                reactions: [{
                    type: "click",
                    from: "699",
                    to: "698"
                }],
                eltId: "Button"
            }, {
                props: t[5],
                eltId: "Text_input_17"
            }],
            rootId: "nav"
        },
        624: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "click",
                    from: "624"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[32],
                eltId: "I1620_4431_1175_723"
            }, {
                props: t[32],
                eltId: "__142"
            }, {
                reactions: [{
                    type: "click",
                    from: "647",
                    to: "646"
                }],
                eltId: "Text_input_12"
            }, {
                reactions: [{
                    type: "click",
                    to: "672"
                }],
                eltId: "Text_input_14"
            }, {
                props: t[34],
                eltId: "I1620_4431_1175_727"
            }, {
                props: t[34],
                eltId: "__144"
            }, {
                props: t[13],
                eltId: "Text_input_15"
            }, {
                reactions: [{
                    type: "click",
                    from: "700",
                    to: "698"
                }],
                eltId: "Button"
            }, {
                props: t[5],
                eltId: "Text_input_17"
            }],
            rootId: "nav"
        },
        625: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "625"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[32],
                eltId: "I1620_4431_1175_723"
            }, {
                props: t[32],
                eltId: "__142"
            }, {
                reactions: [{
                    type: "click",
                    from: "648",
                    to: "646"
                }],
                eltId: "Text_input_12"
            }, {
                reactions: [{
                    type: "click",
                    from: "674",
                    to: "672"
                }],
                eltId: "Text_input_14"
            }, {
                reactions: [{
                    type: "click",
                    to: "698"
                }],
                eltId: "Button"
            }, {
                props: t[34],
                eltId: "I1620_4431_1175_729"
            }, {
                props: t[34],
                eltId: "__145"
            }, {
                props: t[13],
                eltId: "Text_input_16"
            }, {
                props: t[5],
                eltId: "Text_input_17"
            }],
            rootId: "nav"
        },
        626: {
            type: "ALIAS",
            alias: "623"
        },
        627: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "click",
                    from: "627"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[32],
                eltId: "I1620_4431_1175_723"
            }, {
                props: t[32],
                eltId: "__142"
            }, {
                reactions: [{
                    type: "click",
                    from: "650",
                    to: "649"
                }],
                eltId: "Text_input_12"
            }, {
                reactions: [{
                    type: "click",
                    to: "675"
                }],
                eltId: "Text_input_14"
            }, {
                props: t[34],
                eltId: "I1620_4431_1175_727"
            }, {
                props: t[34],
                eltId: "__144"
            }, {
                props: t[13],
                eltId: "Text_input_15"
            }, {
                reactions: [{
                    type: "click",
                    from: "703",
                    to: "701"
                }],
                eltId: "Button"
            }, {
                props: t[5],
                eltId: "Text_input_17"
            }],
            rootId: "nav"
        },
        628: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "628"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[32],
                eltId: "I1620_4431_1175_723"
            }, {
                props: t[32],
                eltId: "__142"
            }, {
                reactions: [{
                    type: "click",
                    from: "651",
                    to: "649"
                }],
                eltId: "Text_input_12"
            }, {
                reactions: [{
                    type: "click",
                    from: "677",
                    to: "675"
                }],
                eltId: "Text_input_14"
            }, {
                reactions: [{
                    type: "click",
                    to: "701"
                }],
                eltId: "Button"
            }, {
                props: t[34],
                eltId: "I1620_4431_1175_729"
            }, {
                props: t[34],
                eltId: "__145"
            }, {
                props: t[13],
                eltId: "Text_input_16"
            }, {
                props: t[5],
                eltId: "Text_input_17"
            }],
            rootId: "nav"
        },
        646: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[35],
                eltId: "nav"
            }, {
                reactions: [{
                    type: "click",
                    to: "623"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[34],
                eltId: "I1620_4431_1175_723"
            }, {
                props: t[34],
                eltId: "__142"
            }, {
                props: t[36],
                reactions: [{
                    type: "click",
                    from: "646"
                }],
                eltId: "Text_input_12"
            }, {
                props: t[32],
                eltId: "I1620_4431_1175_725"
            }, {
                props: t[32],
                eltId: "__143"
            }, {
                props: t[5],
                eltId: "Text_input_13"
            }, {
                reactions: [{
                    type: "click",
                    from: "672",
                    to: "673"
                }],
                eltId: "Text_input_14"
            }, {
                reactions: [{
                    type: "click",
                    from: "698",
                    to: "699"
                }],
                eltId: "Button"
            }, {
                props: t[13],
                eltId: "Text_input_17"
            }],
            rootId: "nav"
        },
        647: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[35],
                eltId: "nav"
            }, {
                reactions: [{
                    type: "click",
                    from: "624",
                    to: "623"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[36],
                reactions: [{
                    type: "click",
                    from: "647"
                }],
                eltId: "Text_input_12"
            }, {
                props: t[32],
                eltId: "I1620_4431_1175_725"
            }, {
                props: t[32],
                eltId: "__143"
            }, {
                props: t[5],
                eltId: "Text_input_13"
            }, {
                reactions: [{
                    type: "click",
                    to: "673"
                }],
                eltId: "Text_input_14"
            }, {
                props: t[34],
                eltId: "I1620_4431_1175_727"
            }, {
                props: t[34],
                eltId: "__144"
            }, {
                props: t[13],
                eltId: "Text_input_15"
            }, {
                reactions: [{
                    type: "click",
                    from: "700",
                    to: "699"
                }],
                eltId: "Button"
            }],
            rootId: "nav"
        },
        648: {
            type: "ANIMATE",
            animations: [{
                props: t[35],
                eltId: "nav"
            }, {
                reactions: [{
                    type: "click",
                    from: "625",
                    to: "623"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[36],
                reactions: [{
                    type: "click",
                    from: "648"
                }],
                eltId: "Text_input_12"
            }, {
                props: t[32],
                eltId: "I1620_4431_1175_725"
            }, {
                props: t[32],
                eltId: "__143"
            }, {
                props: t[5],
                eltId: "Text_input_13"
            }, {
                reactions: [{
                    type: "click",
                    from: "674",
                    to: "673"
                }],
                eltId: "Text_input_14"
            }, {
                reactions: [{
                    type: "click",
                    to: "699"
                }],
                eltId: "Button"
            }, {
                props: t[34],
                eltId: "I1620_4431_1175_729"
            }, {
                props: t[34],
                eltId: "__145"
            }, {
                props: t[13],
                eltId: "Text_input_16"
            }],
            rootId: "nav"
        },
        649: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[35],
                eltId: "nav"
            }, {
                reactions: [{
                    type: "click",
                    to: "623"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[34],
                eltId: "I1620_4431_1175_723"
            }, {
                props: t[34],
                eltId: "__142"
            }, {
                props: t[36],
                reactions: [{
                    type: "click",
                    from: "649"
                }],
                eltId: "Text_input_12"
            }, {
                props: t[32],
                eltId: "I1620_4431_1175_725"
            }, {
                props: t[32],
                eltId: "__143"
            }, {
                props: t[5],
                eltId: "Text_input_13"
            }, {
                reactions: [{
                    type: "click",
                    from: "675",
                    to: "676"
                }],
                eltId: "Text_input_14"
            }, {
                reactions: [{
                    type: "click",
                    from: "701",
                    to: "702"
                }],
                eltId: "Button"
            }, {
                props: t[13],
                eltId: "Text_input_17"
            }],
            rootId: "nav"
        },
        650: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[35],
                eltId: "nav"
            }, {
                reactions: [{
                    type: "click",
                    from: "627",
                    to: "623"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[36],
                reactions: [{
                    type: "click",
                    from: "650"
                }],
                eltId: "Text_input_12"
            }, {
                props: t[32],
                eltId: "I1620_4431_1175_725"
            }, {
                props: t[32],
                eltId: "__143"
            }, {
                props: t[5],
                eltId: "Text_input_13"
            }, {
                reactions: [{
                    type: "click",
                    to: "676"
                }],
                eltId: "Text_input_14"
            }, {
                props: t[34],
                eltId: "I1620_4431_1175_727"
            }, {
                props: t[34],
                eltId: "__144"
            }, {
                props: t[13],
                eltId: "Text_input_15"
            }, {
                reactions: [{
                    type: "click",
                    from: "703",
                    to: "702"
                }],
                eltId: "Button"
            }],
            rootId: "nav"
        },
        651: {
            type: "ANIMATE",
            animations: [{
                props: t[35],
                eltId: "nav"
            }, {
                reactions: [{
                    type: "click",
                    from: "628",
                    to: "623"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[36],
                reactions: [{
                    type: "click",
                    from: "651"
                }],
                eltId: "Text_input_12"
            }, {
                props: t[32],
                eltId: "I1620_4431_1175_725"
            }, {
                props: t[32],
                eltId: "__143"
            }, {
                props: t[5],
                eltId: "Text_input_13"
            }, {
                reactions: [{
                    type: "click",
                    from: "677",
                    to: "676"
                }],
                eltId: "Text_input_14"
            }, {
                reactions: [{
                    type: "click",
                    to: "702"
                }],
                eltId: "Button"
            }, {
                props: t[34],
                eltId: "I1620_4431_1175_729"
            }, {
                props: t[34],
                eltId: "__145"
            }, {
                props: t[13],
                eltId: "Text_input_16"
            }],
            rootId: "nav"
        },
        672: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "click",
                    to: "624"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[34],
                eltId: "I1620_4431_1175_723"
            }, {
                props: t[34],
                eltId: "__142"
            }, {
                reactions: [{
                    type: "click",
                    from: "646",
                    to: "647"
                }],
                eltId: "Text_input_12"
            }, {
                reactions: [{
                    type: "click",
                    from: "672"
                }],
                eltId: "Text_input_14"
            }, {
                props: t[32],
                eltId: "I1620_4431_1175_727"
            }, {
                props: t[32],
                eltId: "__144"
            }, {
                props: t[5],
                eltId: "Text_input_15"
            }, {
                reactions: [{
                    type: "click",
                    from: "698",
                    to: "700"
                }],
                eltId: "Button"
            }, {
                props: t[13],
                eltId: "Text_input_17"
            }],
            rootId: "nav"
        },
        673: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[31],
                eltId: "nav"
            }, {
                reactions: [{
                    type: "click",
                    from: "623",
                    to: "624"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[33],
                reactions: [{
                    type: "click",
                    to: "647"
                }],
                eltId: "Text_input_12"
            }, {
                props: t[34],
                eltId: "I1620_4431_1175_725"
            }, {
                props: t[34],
                eltId: "__143"
            }, {
                props: t[13],
                eltId: "Text_input_13"
            }, {
                reactions: [{
                    type: "click",
                    from: "673"
                }],
                eltId: "Text_input_14"
            }, {
                props: t[32],
                eltId: "I1620_4431_1175_727"
            }, {
                props: t[32],
                eltId: "__144"
            }, {
                props: t[5],
                eltId: "Text_input_15"
            }, {
                reactions: [{
                    type: "click",
                    from: "699",
                    to: "700"
                }],
                eltId: "Button"
            }],
            rootId: "nav"
        },
        674: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "625",
                    to: "624"
                }],
                eltId: "Text_input_11"
            }, {
                reactions: [{
                    type: "click",
                    from: "648",
                    to: "647"
                }],
                eltId: "Text_input_12"
            }, {
                reactions: [{
                    type: "click",
                    from: "674"
                }],
                eltId: "Text_input_14"
            }, {
                props: t[32],
                eltId: "I1620_4431_1175_727"
            }, {
                props: t[32],
                eltId: "__144"
            }, {
                props: t[5],
                eltId: "Text_input_15"
            }, {
                reactions: [{
                    type: "click",
                    to: "700"
                }],
                eltId: "Button"
            }, {
                props: t[34],
                eltId: "I1620_4431_1175_729"
            }, {
                props: t[34],
                eltId: "__145"
            }, {
                props: t[13],
                eltId: "Text_input_16"
            }],
            rootId: "nav"
        },
        675: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "click",
                    to: "627"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[34],
                eltId: "I1620_4431_1175_723"
            }, {
                props: t[34],
                eltId: "__142"
            }, {
                reactions: [{
                    type: "click",
                    from: "649",
                    to: "650"
                }],
                eltId: "Text_input_12"
            }, {
                reactions: [{
                    type: "click",
                    from: "675"
                }],
                eltId: "Text_input_14"
            }, {
                props: t[32],
                eltId: "I1620_4431_1175_727"
            }, {
                props: t[32],
                eltId: "__144"
            }, {
                props: t[5],
                eltId: "Text_input_15"
            }, {
                reactions: [{
                    type: "click",
                    from: "701",
                    to: "703"
                }],
                eltId: "Button"
            }, {
                props: t[13],
                eltId: "Text_input_17"
            }],
            rootId: "nav"
        },
        676: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[31],
                eltId: "nav"
            }, {
                reactions: [{
                    type: "click",
                    from: "623",
                    to: "627"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[33],
                reactions: [{
                    type: "click",
                    to: "650"
                }],
                eltId: "Text_input_12"
            }, {
                props: t[34],
                eltId: "I1620_4431_1175_725"
            }, {
                props: t[34],
                eltId: "__143"
            }, {
                props: t[13],
                eltId: "Text_input_13"
            }, {
                reactions: [{
                    type: "click",
                    from: "676"
                }],
                eltId: "Text_input_14"
            }, {
                props: t[32],
                eltId: "I1620_4431_1175_727"
            }, {
                props: t[32],
                eltId: "__144"
            }, {
                props: t[5],
                eltId: "Text_input_15"
            }, {
                reactions: [{
                    type: "click",
                    from: "702",
                    to: "703"
                }],
                eltId: "Button"
            }],
            rootId: "nav"
        },
        677: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "628",
                    to: "627"
                }],
                eltId: "Text_input_11"
            }, {
                reactions: [{
                    type: "click",
                    from: "651",
                    to: "650"
                }],
                eltId: "Text_input_12"
            }, {
                reactions: [{
                    type: "click",
                    from: "677"
                }],
                eltId: "Text_input_14"
            }, {
                props: t[32],
                eltId: "I1620_4431_1175_727"
            }, {
                props: t[32],
                eltId: "__144"
            }, {
                props: t[5],
                eltId: "Text_input_15"
            }, {
                reactions: [{
                    type: "click",
                    to: "703"
                }],
                eltId: "Button"
            }, {
                props: t[34],
                eltId: "I1620_4431_1175_729"
            }, {
                props: t[34],
                eltId: "__145"
            }, {
                props: t[13],
                eltId: "Text_input_16"
            }],
            rootId: "nav"
        },
        698: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "click",
                    to: "625"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[34],
                eltId: "I1620_4431_1175_723"
            }, {
                props: t[34],
                eltId: "__142"
            }, {
                reactions: [{
                    type: "click",
                    from: "646",
                    to: "648"
                }],
                eltId: "Text_input_12"
            }, {
                reactions: [{
                    type: "click",
                    from: "672",
                    to: "674"
                }],
                eltId: "Text_input_14"
            }, {
                reactions: [{
                    type: "click",
                    from: "698"
                }],
                eltId: "Button"
            }, {
                props: t[32],
                eltId: "I1620_4431_1175_729"
            }, {
                props: t[32],
                eltId: "__145"
            }, {
                props: t[5],
                eltId: "Text_input_16"
            }, {
                props: t[13],
                eltId: "Text_input_17"
            }],
            rootId: "nav"
        },
        699: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[31],
                eltId: "nav"
            }, {
                reactions: [{
                    type: "click",
                    from: "623",
                    to: "625"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[33],
                reactions: [{
                    type: "click",
                    to: "648"
                }],
                eltId: "Text_input_12"
            }, {
                props: t[34],
                eltId: "I1620_4431_1175_725"
            }, {
                props: t[34],
                eltId: "__143"
            }, {
                props: t[13],
                eltId: "Text_input_13"
            }, {
                reactions: [{
                    type: "click",
                    from: "673",
                    to: "674"
                }],
                eltId: "Text_input_14"
            }, {
                reactions: [{
                    type: "click",
                    from: "699"
                }],
                eltId: "Button"
            }, {
                props: t[32],
                eltId: "I1620_4431_1175_729"
            }, {
                props: t[32],
                eltId: "__145"
            }, {
                props: t[5],
                eltId: "Text_input_16"
            }],
            rootId: "nav"
        },
        700: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "624",
                    to: "625"
                }],
                eltId: "Text_input_11"
            }, {
                reactions: [{
                    type: "click",
                    from: "647",
                    to: "648"
                }],
                eltId: "Text_input_12"
            }, {
                reactions: [{
                    type: "click",
                    to: "674"
                }],
                eltId: "Text_input_14"
            }, {
                props: t[34],
                eltId: "I1620_4431_1175_727"
            }, {
                props: t[34],
                eltId: "__144"
            }, {
                props: t[13],
                eltId: "Text_input_15"
            }, {
                reactions: [{
                    type: "click",
                    from: "700"
                }],
                eltId: "Button"
            }, {
                props: t[32],
                eltId: "I1620_4431_1175_729"
            }, {
                props: t[32],
                eltId: "__145"
            }, {
                props: t[5],
                eltId: "Text_input_16"
            }],
            rootId: "nav"
        },
        701: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "click",
                    to: "628"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[34],
                eltId: "I1620_4431_1175_723"
            }, {
                props: t[34],
                eltId: "__142"
            }, {
                reactions: [{
                    type: "click",
                    from: "649",
                    to: "651"
                }],
                eltId: "Text_input_12"
            }, {
                reactions: [{
                    type: "click",
                    from: "675",
                    to: "677"
                }],
                eltId: "Text_input_14"
            }, {
                reactions: [{
                    type: "click",
                    from: "701"
                }],
                eltId: "Button"
            }, {
                props: t[32],
                eltId: "I1620_4431_1175_729"
            }, {
                props: t[32],
                eltId: "__145"
            }, {
                props: t[5],
                eltId: "Text_input_16"
            }, {
                props: t[13],
                eltId: "Text_input_17"
            }],
            rootId: "nav"
        },
        702: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[31],
                eltId: "nav"
            }, {
                reactions: [{
                    type: "click",
                    from: "623",
                    to: "628"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[33],
                reactions: [{
                    type: "click",
                    to: "651"
                }],
                eltId: "Text_input_12"
            }, {
                props: t[34],
                eltId: "I1620_4431_1175_725"
            }, {
                props: t[34],
                eltId: "__143"
            }, {
                props: t[13],
                eltId: "Text_input_13"
            }, {
                reactions: [{
                    type: "click",
                    from: "676",
                    to: "677"
                }],
                eltId: "Text_input_14"
            }, {
                reactions: [{
                    type: "click",
                    from: "702"
                }],
                eltId: "Button"
            }, {
                props: t[32],
                eltId: "I1620_4431_1175_729"
            }, {
                props: t[32],
                eltId: "__145"
            }, {
                props: t[5],
                eltId: "Text_input_16"
            }],
            rootId: "nav"
        },
        703: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "627",
                    to: "628"
                }],
                eltId: "Text_input_11"
            }, {
                reactions: [{
                    type: "click",
                    from: "650",
                    to: "651"
                }],
                eltId: "Text_input_12"
            }, {
                reactions: [{
                    type: "click",
                    to: "677"
                }],
                eltId: "Text_input_14"
            }, {
                props: t[34],
                eltId: "I1620_4431_1175_727"
            }, {
                props: t[34],
                eltId: "__144"
            }, {
                props: t[13],
                eltId: "Text_input_15"
            }, {
                reactions: [{
                    type: "click",
                    from: "703"
                }],
                eltId: "Button"
            }, {
                props: t[32],
                eltId: "I1620_4431_1175_729"
            }, {
                props: t[32],
                eltId: "__145"
            }, {
                props: t[5],
                eltId: "Text_input_16"
            }],
            rootId: "nav"
        },
        745: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[37],
                reactions: [{
                    type: "hover",
                    from: "745"
                }, {
                    type: "click",
                    to: "746"
                }],
                eltId: "WhatsApp"
            }, {
                props: t[37],
                eltId: "Vertical_container_1"
            }],
            rootId: "WhatsApp"
        },
        746: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[38],
                reactions: [{
                    type: "click",
                    from: "746"
                }],
                eltId: "WhatsApp"
            }, {
                props: t[39],
                eltId: "Vertical_container_1"
            }, {
                props: t[5],
                eltId: "Group_1"
            }, {
                props: t[5],
                eltId: "Frame_4_5"
            }, {
                props: t[5],
                eltId: "https_lottiefiles_com_animations_doctor_consultation_E1yd0wb6cx"
            }, {
                props: t[5],
                eltId: "Frame_5_0"
            }, {
                props: t[16],
                eltId: "I1543_563_1125_460"
            }, {
                props: t[16],
                eltId: "I1543_563_1125_461"
            }, {
                props: t[5],
                eltId: "mi_circle_error"
            }, {
                props: t[15],
                eltId: "Vector_26"
            }, {
                eltId: "linea_whatsApp",
                altId: "linea_whatsApp_0"
            }],
            rootId: "WhatsApp"
        },
        766: {
            type: "ANIMATE",
            animations: [{
                props: t[40],
                reactions: [{
                    type: "hover",
                    to: "745"
                }],
                eltId: "WhatsApp"
            }, {
                props: t[5],
                eltId: "Vertical_container_1"
            }, {
                props: t[13],
                eltId: "Group_1"
            }, {
                props: t[13],
                eltId: "Frame_4_5"
            }, {
                props: t[13],
                eltId: "https_lottiefiles_com_animations_doctor_consultation_E1yd0wb6cx"
            }, {
                props: t[13],
                eltId: "Frame_5_0"
            }, {
                props: t[18],
                eltId: "I1543_563_1125_460"
            }, {
                props: t[18],
                eltId: "I1543_563_1125_461"
            }, {
                props: t[13],
                eltId: "mi_circle_error"
            }, {
                props: t[11],
                eltId: "Vector_26"
            }, {
                eltId: "linea_whatsApp_0",
                altId: "linea_whatsApp"
            }],
            rootId: "WhatsApp"
        },
        771: {
            type: "ANIMATE",
            transition: {
                type: "DISSOLVE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                eltId: "linea_whatsApp_0",
                altId: "linea_whatsApp_1"
            }],
            rootId: "linea_whatsApp_0"
        },
        775: {
            type: "ANIMATE",
            transition: {
                type: "DISSOLVE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                eltId: "l_nea",
                altId: "l_nea_0"
            }],
            rootId: "l_nea"
        },
        776: {
            type: "ANIMATE",
            transition: {
                type: "DISSOLVE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                eltId: "l_nea_0",
                altId: "l_nea"
            }],
            rootId: "l_nea_0"
        },
        779: {
            type: "ANIMATE",
            transition: {
                type: "DISSOLVE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                eltId: "l_nea_1",
                altId: "l_nea_2"
            }],
            rootId: "l_nea_1"
        },
        780: {
            type: "ANIMATE",
            transition: {
                type: "DISSOLVE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                eltId: "l_nea_2",
                altId: "l_nea_1"
            }],
            rootId: "l_nea_2"
        },
        783: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,783",
                    to: "T800ms,784"
                }],
                eltId: "_1"
            }, {
                eltId: "Group_4",
                altId: "Group_6"
            }],
            rootId: "_1"
        },
        784: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,784",
                    to: "T800ms,785"
                }],
                eltId: "_1"
            }, {
                eltId: "Group_6",
                altId: "Group_8"
            }],
            rootId: "_1"
        },
        785: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,785",
                    to: "T800ms,786"
                }],
                eltId: "_1"
            }, {
                eltId: "Group_8",
                altId: "Group_10"
            }],
            rootId: "_1"
        },
        786: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,786",
                    to: "T800ms,783"
                }],
                eltId: "_1"
            }, {
                eltId: "Group_10",
                altId: "Group_4"
            }],
            rootId: "_1"
        },
        811: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[41],
                reactions: [{
                    type: "hover",
                    from: "811"
                }],
                eltId: "Property_1_card_4"
            }, {
                props: t[42],
                eltId: "Frame_16"
            }, {
                props: t[4],
                eltId: "I1333_762_239_55"
            }, {
                props: t[25],
                eltId: "I1333_762_239_59"
            }, {
                props: t[16],
                eltId: "I1333_762_239_67"
            }, {
                props: t[15],
                eltId: "Line"
            }, {
                props: t[5],
                eltId: "Image_4"
            }],
            rootId: "Property_1_card_4"
        },
        829: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[41],
                reactions: [{
                    type: "hover",
                    from: "829"
                }],
                eltId: "Property_1_card_4_0"
            }, {
                props: t[42],
                eltId: "Frame_17"
            }, {
                props: t[4],
                eltId: "I1333_763_244_27"
            }, {
                props: t[43],
                eltId: "__199"
            }, {
                props: t[25],
                eltId: "I1333_763_244_30"
            }, {
                props: t[16],
                eltId: "I1333_763_244_32"
            }, {
                props: t[15],
                eltId: "Line_2"
            }, {
                props: t[5],
                eltId: "Image_5"
            }],
            rootId: "Property_1_card_4_0"
        },
        848: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[41],
                reactions: [{
                    type: "hover",
                    from: "848"
                }],
                eltId: "Property_1_card_4_1"
            }, {
                props: t[42],
                eltId: "Frame_18"
            }, {
                props: t[4],
                eltId: "I1333_764_244_41"
            }, {
                props: t[16],
                eltId: "I1333_764_244_44"
            }, {
                props: t[16],
                eltId: "I1333_764_244_46"
            }, {
                props: t[15],
                eltId: "Line_4"
            }, {
                props: t[5],
                eltId: "Image_6"
            }],
            rootId: "Property_1_card_4_1"
        },
        866: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[41],
                reactions: [{
                    type: "hover",
                    from: "866"
                }],
                eltId: "Property_1_card_4_2"
            }, {
                props: t[42],
                eltId: "Frame_19"
            }, {
                props: t[4],
                eltId: "I1333_765_244_87"
            }, {
                props: t[16],
                eltId: "I1333_765_244_90"
            }, {
                props: t[16],
                eltId: "I1333_765_244_92"
            }, {
                props: t[15],
                eltId: "Line_6"
            }, {
                props: t[5],
                eltId: "Image_7"
            }],
            rootId: "Property_1_card_4_2"
        },
        884: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[41],
                reactions: [{
                    type: "hover",
                    from: "884"
                }],
                eltId: "Property_1_card_4_3"
            }, {
                props: t[42],
                eltId: "Frame_20"
            }, {
                props: t[4],
                eltId: "I1333_766_245_112"
            }, {
                props: t[25],
                eltId: "I1333_766_245_115"
            }, {
                props: t[16],
                eltId: "I1333_766_245_117"
            }, {
                props: t[15],
                eltId: "Line_8"
            }, {
                props: t[5],
                eltId: "Image_8"
            }],
            rootId: "Property_1_card_4_3"
        },
        902: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[41],
                reactions: [{
                    type: "hover",
                    from: "902"
                }],
                eltId: "Property_1_card_4_4"
            }, {
                props: t[42],
                eltId: "Frame_21"
            }, {
                props: t[4],
                eltId: "I1333_767_245_126"
            }, {
                props: t[16],
                eltId: "I1333_767_245_129"
            }, {
                props: t[16],
                eltId: "I1333_767_245_131"
            }, {
                props: t[15],
                eltId: "Line_10"
            }, {
                props: t[5],
                eltId: "Image_9"
            }],
            rootId: "Property_1_card_4_4"
        },
        920: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[41],
                reactions: [{
                    type: "hover",
                    from: "920"
                }],
                eltId: "Property_1_card_4_5"
            }, {
                props: t[42],
                eltId: "Frame_23"
            }, {
                props: t[4],
                eltId: "I1333_768_248_30"
            }, {
                props: t[16],
                eltId: "I1333_768_248_33"
            }, {
                props: t[16],
                eltId: "I1333_768_248_35"
            }, {
                props: t[15],
                eltId: "Line_12"
            }, {
                props: t[5],
                eltId: "Image_10"
            }],
            rootId: "Property_1_card_4_5"
        },
        938: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[41],
                reactions: [{
                    type: "hover",
                    from: "938"
                }],
                eltId: "Property_1_card_4_6"
            }, {
                props: t[42],
                eltId: "Frame_24"
            }, {
                props: t[4],
                eltId: "I1333_769_249_41"
            }, {
                props: t[25],
                eltId: "I1333_769_249_44"
            }, {
                props: t[16],
                eltId: "I1333_769_249_46"
            }, {
                props: t[15],
                eltId: "Line_14"
            }, {
                props: t[5],
                eltId: "Image_11"
            }],
            rootId: "Property_1_card_4_6"
        },
        956: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[41],
                reactions: [{
                    type: "hover",
                    from: "956"
                }],
                eltId: "Property_1_card_4_7"
            }, {
                props: t[42],
                eltId: "Frame_25"
            }, {
                props: t[44],
                eltId: "I1333_770_249_52"
            }, {
                props: t[25],
                eltId: "I1333_770_249_55"
            }, {
                props: t[16],
                eltId: "I1333_770_249_56"
            }, {
                props: t[16],
                eltId: "I1333_770_249_57"
            }, {
                props: t[15],
                eltId: "Line_16"
            }, {
                props: t[5],
                eltId: "Image_12"
            }],
            rootId: "Property_1_card_4_7"
        },
        1186: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[19],
                reactions: [{
                    type: "hover",
                    from: "1186"
                }],
                eltId: "Leer_m_s_"
            }, {
                props: t[45],
                eltId: "__317"
            }],
            rootId: "Leer_m_s_"
        },
        1200: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[19],
                reactions: [{
                    type: "hover",
                    from: "1200"
                }],
                eltId: "Agendar_Cita"
            }],
            rootId: "Agendar_Cita"
        },
        1225: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[41],
                reactions: [{
                    type: "hover",
                    from: "1225"
                }],
                eltId: "Property_1_card_4_8"
            }, {
                props: t[42],
                eltId: "Frame_69"
            }, {
                props: t[4],
                eltId: "I1291_775_239_55"
            }, {
                props: t[25],
                eltId: "I1291_775_239_59"
            }, {
                props: t[16],
                eltId: "I1291_775_239_67"
            }, {
                props: t[15],
                eltId: "Line_18"
            }, {
                props: t[5],
                eltId: "Image_15"
            }],
            rootId: "Property_1_card_4_8"
        },
        1243: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[41],
                reactions: [{
                    type: "hover",
                    from: "1243"
                }],
                eltId: "Property_1_card_4_9"
            }, {
                props: t[42],
                eltId: "Frame_70"
            }, {
                props: t[4],
                eltId: "I1291_776_244_27"
            }, {
                props: t[43],
                eltId: "__336"
            }, {
                props: t[25],
                eltId: "I1291_776_244_30"
            }, {
                props: t[16],
                eltId: "I1291_776_244_32"
            }, {
                props: t[15],
                eltId: "Line_20"
            }, {
                props: t[5],
                eltId: "Image_16"
            }],
            rootId: "Property_1_card_4_9"
        },
        1262: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[41],
                reactions: [{
                    type: "hover",
                    from: "1262"
                }],
                eltId: "Property_1_card_4_10"
            }, {
                props: t[42],
                eltId: "Frame_71"
            }, {
                props: t[4],
                eltId: "I1291_777_244_41"
            }, {
                props: t[16],
                eltId: "I1291_777_244_44"
            }, {
                props: t[16],
                eltId: "I1291_777_244_46"
            }, {
                props: t[15],
                eltId: "Line_22"
            }, {
                props: t[5],
                eltId: "Image_17"
            }],
            rootId: "Property_1_card_4_10"
        },
        1280: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[41],
                reactions: [{
                    type: "hover",
                    from: "1280"
                }],
                eltId: "Property_1_card_4_11"
            }, {
                props: t[42],
                eltId: "Frame_72"
            }, {
                props: t[4],
                eltId: "I1291_778_244_87"
            }, {
                props: t[16],
                eltId: "I1291_778_244_90"
            }, {
                props: t[16],
                eltId: "I1291_778_244_92"
            }, {
                props: t[15],
                eltId: "Line_24"
            }, {
                props: t[5],
                eltId: "Image_18"
            }],
            rootId: "Property_1_card_4_11"
        },
        1298: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[41],
                reactions: [{
                    type: "hover",
                    from: "1298"
                }],
                eltId: "Property_1_card_4_12"
            }, {
                props: t[42],
                eltId: "Frame_73"
            }, {
                props: t[4],
                eltId: "I1291_779_245_112"
            }, {
                props: t[25],
                eltId: "I1291_779_245_115"
            }, {
                props: t[16],
                eltId: "I1291_779_245_117"
            }, {
                props: t[15],
                eltId: "Line_26"
            }, {
                props: t[5],
                eltId: "Image_19"
            }],
            rootId: "Property_1_card_4_12"
        },
        1316: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[41],
                reactions: [{
                    type: "hover",
                    from: "1316"
                }],
                eltId: "Property_1_card_4_13"
            }, {
                props: t[42],
                eltId: "Frame_74"
            }, {
                props: t[4],
                eltId: "I1291_780_245_126"
            }, {
                props: t[16],
                eltId: "I1291_780_245_129"
            }, {
                props: t[16],
                eltId: "I1291_780_245_131"
            }, {
                props: t[15],
                eltId: "Line_28"
            }, {
                props: t[5],
                eltId: "Image_20"
            }],
            rootId: "Property_1_card_4_13"
        },
        1334: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[41],
                reactions: [{
                    type: "hover",
                    from: "1334"
                }],
                eltId: "Property_1_card_4_14"
            }, {
                props: t[42],
                eltId: "Frame_75"
            }, {
                props: t[4],
                eltId: "I1291_781_248_30"
            }, {
                props: t[16],
                eltId: "I1291_781_248_33"
            }, {
                props: t[16],
                eltId: "I1291_781_248_35"
            }, {
                props: t[15],
                eltId: "Line_30"
            }, {
                props: t[5],
                eltId: "Image_21"
            }],
            rootId: "Property_1_card_4_14"
        },
        1352: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[41],
                reactions: [{
                    type: "hover",
                    from: "1352"
                }],
                eltId: "Property_1_card_4_15"
            }, {
                props: t[42],
                eltId: "Frame_76"
            }, {
                props: t[4],
                eltId: "I1291_782_249_41"
            }, {
                props: t[25],
                eltId: "I1291_782_249_44"
            }, {
                props: t[16],
                eltId: "I1291_782_249_46"
            }, {
                props: t[15],
                eltId: "Line_32"
            }, {
                props: t[5],
                eltId: "Image_22"
            }],
            rootId: "Property_1_card_4_15"
        },
        1370: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[41],
                reactions: [{
                    type: "hover",
                    from: "1370"
                }],
                eltId: "Property_1_card_4_16"
            }, {
                props: t[42],
                eltId: "Frame_77"
            }, {
                props: t[44],
                eltId: "I1291_783_249_52"
            }, {
                props: t[25],
                eltId: "I1291_783_249_55"
            }, {
                props: t[16],
                eltId: "I1291_783_249_56"
            }, {
                props: t[16],
                eltId: "I1291_783_249_57"
            }, {
                props: t[15],
                eltId: "Line_34"
            }, {
                props: t[5],
                eltId: "Image_23"
            }],
            rootId: "Property_1_card_4_16"
        },
        1392: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[46],
                reactions: [{
                    type: "hover",
                    from: "1392"
                }],
                eltId: "Component_32"
            }, {
                props: t[47],
                eltId: "I1743_1034_1723_992"
            }, {
                props: t[48],
                eltId: "__396"
            }, {
                props: t[49],
                eltId: "Frame_4_6"
            }, {
                props: t[50],
                eltId: "I1743_1034_1752_1042"
            }],
            rootId: "Component_32"
        },
        1412: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[1],
                reactions: [{
                    type: "hover",
                    from: "1412"
                }],
                eltId: "Cont_ctenos"
            }, {
                props: t[51],
                eltId: "I1743_1034_1747_1068_1713_1092"
            }, {
                props: t[52],
                eltId: "__397"
            }],
            rootId: "Cont_ctenos"
        },
        1413: {
            type: "ALIAS",
            alias: "1412"
        },
        1425: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[3],
                reactions: [{
                    type: "hover",
                    from: "1425"
                }],
                eltId: "tag"
            }, {
                props: t[4],
                eltId: "I1743_1034_1747_1069_1713_1064"
            }, {
                props: t[5],
                eltId: "Rectangle_2_5"
            }],
            rootId: "tag"
        },
        1426: {
            type: "ALIAS",
            alias: "1425"
        },
        1445: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[53],
                reactions: [{
                    type: "hover",
                    from: "1445"
                }],
                eltId: "Component_33"
            }, {
                reactions: [{
                    type: "hover",
                    from: "1480",
                    to: "1484"
                }],
                eltId: "tag_0"
            }],
            rootId: "Component_33"
        },
        1467: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[1],
                reactions: [{
                    type: "hover",
                    from: "1467"
                }],
                eltId: "Cont_ctenos_0"
            }, {
                props: t[51],
                eltId: "I1752_1024_1749_1216_1713_1092"
            }, {
                props: t[52],
                eltId: "__408"
            }],
            rootId: "Cont_ctenos_0"
        },
        1468: {
            type: "ALIAS",
            alias: "1467"
        },
        1480: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[3],
                reactions: [{
                    type: "hover",
                    from: "1480"
                }],
                eltId: "tag_0"
            }, {
                props: t[4],
                eltId: "I1752_1024_1749_1217_1713_1064"
            }, {
                props: t[5],
                eltId: "Rectangle_2_6"
            }],
            rootId: "tag_0"
        },
        1481: {
            type: "ANIMATE",
            animations: [{
                props: t[54],
                eltId: "Desktop_Servicios"
            }, {
                props: t[55],
                eltId: "Frame_68"
            }, {
                props: t[13],
                eltId: "Frame_3_1"
            }, {
                props: t[18],
                eltId: "_1620_4087"
            }, {
                props: t[11],
                eltId: "Line_1_2"
            }, {
                props: t[18],
                eltId: "_1620_4088"
            }, {
                props: t[5],
                eltId: "Property_1_card_4_8"
            }, {
                props: t[5],
                eltId: "Frame_69"
            }, {
                props: t[16],
                eltId: "I1291_775_239_55"
            }, {
                props: t[5],
                eltId: "Property_1_card_4_9"
            }, {
                props: t[5],
                eltId: "Frame_70"
            }, {
                props: t[16],
                eltId: "I1291_776_244_27"
            }, {
                props: t[5],
                eltId: "Property_1_card_4_10"
            }, {
                props: t[5],
                eltId: "Frame_71"
            }, {
                props: t[16],
                eltId: "I1291_777_244_41"
            }, {
                props: t[5],
                eltId: "Property_1_card_4_11"
            }, {
                props: t[5],
                eltId: "Frame_72"
            }, {
                props: t[16],
                eltId: "I1291_778_244_87"
            }, {
                props: t[5],
                eltId: "Property_1_card_4_12"
            }, {
                props: t[5],
                eltId: "Frame_73"
            }, {
                props: t[16],
                eltId: "I1291_779_245_112"
            }, {
                props: t[5],
                eltId: "Property_1_card_4_13"
            }, {
                props: t[5],
                eltId: "Frame_74"
            }, {
                props: t[16],
                eltId: "I1291_780_245_126"
            }, {
                props: t[5],
                eltId: "Property_1_card_4_14"
            }, {
                props: t[5],
                eltId: "Frame_75"
            }, {
                props: t[16],
                eltId: "I1291_781_248_30"
            }, {
                props: t[5],
                eltId: "Property_1_card_4_15"
            }, {
                props: t[5],
                eltId: "Frame_76"
            }, {
                props: t[16],
                eltId: "I1291_782_249_41"
            }, {
                props: t[5],
                eltId: "Property_1_card_4_16"
            }, {
                props: t[5],
                eltId: "Frame_77"
            }, {
                props: t[16],
                eltId: "I1291_783_249_52"
            }, {
                props: t[12],
                eltId: "Frame_26_1"
            }, {
                props: t[13],
                eltId: "Component_32"
            }, {
                props: t[13],
                eltId: "Frame_22_5"
            }, {
                props: t[13],
                eltId: "Rectangle_1_5"
            }, {
                props: t[13],
                eltId: "Frame_21_0"
            }, {
                props: t[18],
                eltId: "I1743_1034_1723_992"
            }, {
                props: t[13],
                eltId: "Frame_4_6"
            }, {
                props: t[13],
                eltId: "Cont_ctenos"
            }, {
                props: t[18],
                eltId: "I1743_1034_1747_1068_1713_1092"
            }, {
                props: t[12],
                eltId: "tag"
            }, {
                props: t[18],
                eltId: "I1743_1034_1747_1069_1713_1064"
            }, {
                props: t[18],
                eltId: "I1743_1034_1752_1042"
            }, {
                props: t[13],
                eltId: "pngwing_com_12_2_1"
            }, {
                props: t[13],
                eltId: "Component_33"
            }, {
                props: t[13],
                eltId: "Frame_22_6"
            }, {
                props: t[13],
                eltId: "Rectangle_1_6"
            }, {
                props: t[13],
                eltId: "Frame_21_1"
            }, {
                props: t[18],
                eltId: "I1752_1024_1749_1213"
            }, {
                props: t[18],
                eltId: "I1752_1024_1749_1214"
            }, {
                props: t[13],
                eltId: "Frame_4_7"
            }, {
                props: t[13],
                eltId: "Cont_ctenos_0"
            }, {
                props: t[18],
                eltId: "I1752_1024_1749_1216_1713_1092"
            }, {
                props: t[12],
                eltId: "tag_0"
            }, {
                props: t[18],
                eltId: "I1752_1024_1749_1217_1713_1064"
            }, {
                props: t[13],
                eltId: "Component_34"
            }, {
                props: t[13],
                eltId: "Frame_22_7"
            }, {
                props: t[13],
                eltId: "Frame_21_2"
            }, {
                props: t[18],
                eltId: "I1762_1296_1762_1278"
            }, {
                props: t[18],
                eltId: "I1762_1296_1762_1279"
            }, {
                props: t[13],
                eltId: "Frame_4_8"
            }, {
                props: t[13],
                eltId: "Cont_ctenos_1"
            }, {
                props: t[18],
                eltId: "I1762_1296_1762_1281_1713_1092"
            }, {
                props: t[12],
                eltId: "tag_1"
            }, {
                props: t[18],
                eltId: "I1762_1296_1762_1282_1713_1064"
            }, {
                props: t[13],
                eltId: "Frame_23_0"
            }, {
                props: t[13],
                eltId: "Rectangle_1_8"
            }, {
                props: t[12],
                eltId: "Container_62"
            }, {
                props: t[12],
                eltId: "Container_63"
            }, {
                props: t[13],
                eltId: "Container_64"
            }, {
                props: t[12],
                eltId: "Margin_4"
            }, {
                props: t[12],
                eltId: "Container_65"
            }, {
                props: t[12],
                eltId: "Container_66"
            }, {
                props: t[12],
                eltId: "Heading_2_0"
            }, {
                props: t[18],
                eltId: "_1717_1229"
            }, {
                props: t[12],
                eltId: "Container_67"
            }, {
                props: t[12],
                eltId: "Container_68"
            }, {
                props: t[18],
                eltId: "_1717_1232"
            }, {
                props: t[12],
                eltId: "Margin_5"
            }, {
                props: t[12],
                eltId: "Container_69"
            }, {
                props: t[12],
                eltId: "Container_70"
            }, {
                props: t[12],
                eltId: "Container_71"
            }, {
                props: t[18],
                eltId: "_1717_1237"
            }, {
                props: t[12],
                eltId: "Background_11"
            }, {
                props: t[13],
                eltId: "Background_12"
            }, {
                props: t[12],
                eltId: "Container_72"
            }, {
                props: t[12],
                eltId: "Container_73"
            }, {
                props: t[18],
                eltId: "_1717_1242"
            }, {
                props: t[12],
                eltId: "Margin_6"
            }, {
                props: t[12],
                eltId: "Container_74"
            }, {
                props: t[12],
                eltId: "Container_75"
            }, {
                props: t[12],
                eltId: "Container_76"
            }, {
                props: t[18],
                eltId: "_1717_1247"
            }, {
                props: t[12],
                eltId: "Background_13"
            }, {
                props: t[13],
                eltId: "Background_14"
            }, {
                props: t[12],
                eltId: "Container_77"
            }, {
                props: t[12],
                eltId: "Container_78"
            }, {
                props: t[18],
                eltId: "_1717_1252"
            }, {
                props: t[12],
                eltId: "Container_79"
            }, {
                props: t[12],
                eltId: "Container_80"
            }, {
                props: t[12],
                eltId: "Container_81"
            }, {
                props: t[12],
                eltId: "Container_82"
            }, {
                props: t[18],
                eltId: "_1717_1257"
            }, {
                props: t[12],
                eltId: "Background_15"
            }, {
                props: t[13],
                eltId: "Background_16"
            }, {
                props: t[12],
                eltId: "Container_83"
            }, {
                props: t[12],
                eltId: "Container_84"
            }, {
                props: t[18],
                eltId: "_1717_1262"
            }, {
                props: t[12],
                eltId: "Frame_29_1"
            }, {
                props: t[12],
                eltId: "Container_85"
            }, {
                props: t[12],
                eltId: "Container_86"
            }, {
                props: t[13],
                eltId: "bg_why_choose_us_1024x693_png_1"
            }, {
                props: t[12],
                eltId: "Container_87"
            }, {
                props: t[12],
                eltId: "Container_88"
            }, {
                props: t[26],
                eltId: "Rectangle_10"
            }, {
                props: t[12],
                eltId: "Container_89"
            }, {
                props: t[12],
                eltId: "Container_90"
            }, {
                props: t[13],
                eltId: "Sin_titulo_5_png_1"
            }, {
                props: t[13],
                eltId: "Container_91"
            }, {
                props: t[13],
                eltId: "Container_92"
            }, {
                props: t[12],
                eltId: "Section_1"
            }, {
                props: t[13],
                eltId: "Container_93"
            }, {
                props: t[18],
                eltId: "_1717_1282"
            }, {
                props: t[18],
                eltId: "_1717_1286"
            }, {
                props: t[12],
                eltId: "Link_0"
            }, {
                props: t[12],
                eltId: "Container_94"
            }, {
                props: t[12],
                eltId: "Container_95"
            }, {
                props: t[18],
                eltId: "I1816_1405_1816_1396"
            }, {
                props: t[56],
                eltId: "floater_1"
            }, {
                props: t[28],
                eltId: "Navbar_0"
            }, {
                reactions: [{
                    type: "click",
                    from: "1775",
                    to: "1778"
                }],
                eltId: "Text_input_22"
            }, {
                reactions: [{
                    type: "click",
                    from: "1801",
                    to: "1804"
                }],
                eltId: "Text_input_24"
            }, {
                reactions: [{
                    type: "click",
                    from: "1827",
                    to: "1830"
                }],
                eltId: "Button_0"
            }, {
                props: t[5],
                eltId: "Frame_14_final"
            }, {
                props: t[15],
                eltId: "Vector_94"
            }, {
                props: t[15],
                eltId: "video_1"
            }, {
                props: t[15],
                eltId: "Vector_96"
            }, {
                props: t[5],
                eltId: "_1_0"
            }, {
                eltId: "Group_32",
                altId: "Group_34"
            }, {
                props: t[5],
                eltId: "Ellipse_26"
            }, {
                props: t[14],
                eltId: "Frame_78"
            }, {
                props: t[16],
                eltId: "_1546_1457"
            }, {
                props: t[16],
                eltId: "_1546_1458"
            }, {
                props: t[14],
                eltId: "WhatsApp_0"
            }, {
                props: t[5],
                eltId: "Vertical_container_3"
            }, {
                props: t[5],
                eltId: "Ellipse_27"
            }, {
                props: t[5],
                eltId: "Image_26"
            }, {
                props: t[14],
                eltId: "Frame_Default"
            }, {
                props: t[14],
                eltId: "Frame_79"
            }, {
                props: t[5],
                eltId: "Group_42"
            }, {
                props: t[5],
                eltId: "Rectangle_11"
            }, {
                props: t[5],
                eltId: "Frame_80"
            }, {
                props: t[14],
                eltId: "Frame_81"
            }, {
                props: t[16],
                eltId: "_1546_1696"
            }, {
                props: t[25],
                eltId: "_1546_1697"
            }, {
                props: t[16],
                eltId: "_1546_1698"
            }, {
                props: t[14],
                eltId: "Ver_m_s_0"
            }, {
                props: t[16],
                eltId: "I1546_1699_1457_526"
            }, {
                props: t[14],
                eltId: "Frame_Property_22"
            }, {
                props: t[16],
                eltId: "_1608_3734"
            }, {
                props: t[16],
                eltId: "_1608_3735"
            }, {
                props: t[16],
                eltId: "_1608_3736"
            }, {
                props: t[14],
                eltId: "Frame_82"
            }, {
                props: t[14],
                eltId: "Frame_83"
            }, {
                props: t[14],
                eltId: "Frame_84"
            }, {
                props: t[14],
                eltId: "Frame_85"
            }, {
                props: t[16],
                eltId: "_1829_1156"
            }, {
                props: t[16],
                eltId: "_1829_1157"
            }, {
                props: t[16],
                eltId: "_1829_1158"
            }, {
                props: t[14],
                eltId: "Frame_86"
            }, {
                props: t[14],
                eltId: "Frame_87"
            }, {
                props: t[16],
                eltId: "_1829_1161"
            }, {
                props: t[16],
                eltId: "_1829_1162"
            }, {
                props: t[16],
                eltId: "_1829_1163"
            }, {
                props: t[14],
                eltId: "Frame_88"
            }, {
                props: t[14],
                eltId: "Frame_89"
            }, {
                props: t[16],
                eltId: "_1829_1166"
            }, {
                props: t[16],
                eltId: "_1829_1167"
            }, {
                props: t[16],
                eltId: "_1829_1168"
            }, {
                props: t[14],
                eltId: "Frame_90"
            }, {
                props: t[14],
                eltId: "Frame_91"
            }, {
                props: t[16],
                eltId: "_1829_1171"
            }, {
                props: t[16],
                eltId: "_1829_1172"
            }, {
                props: t[16],
                eltId: "_1829_1173"
            }, {
                props: t[14],
                eltId: "Frame_92"
            }, {
                props: t[5],
                eltId: "Group_43"
            }, {
                props: t[5],
                eltId: "Ellipse_28"
            }, {
                props: t[5],
                eltId: "Ellipse_29"
            }, {
                props: t[5],
                eltId: "Ellipse_30"
            }, {
                props: t[5],
                eltId: "Ellipse_31"
            }, {
                props: t[5],
                eltId: "Ellipse_32"
            }, {
                props: t[5],
                eltId: "Ellipse_33"
            }, {
                props: t[5],
                eltId: "Ellipse_34"
            }, {
                props: t[5],
                eltId: "Ellipse_35"
            }, {
                props: t[5],
                eltId: "Ellipse_36"
            }, {
                props: t[5],
                eltId: "Ellipse_37"
            }, {
                props: t[5],
                eltId: "Ellipse_38"
            }, {
                props: t[5],
                eltId: "Ellipse_39"
            }, {
                props: t[5],
                eltId: "Image_27"
            }, {
                props: t[5],
                eltId: "Group_44"
            }, {
                props: t[5],
                eltId: "Ellipse_40"
            }, {
                props: t[5],
                eltId: "Ellipse_41"
            }, {
                props: t[5],
                eltId: "Ellipse_42"
            }, {
                props: t[5],
                eltId: "Ellipse_43"
            }, {
                props: t[5],
                eltId: "Ellipse_44"
            }, {
                props: t[5],
                eltId: "Ellipse_45"
            }, {
                props: t[5],
                eltId: "Ellipse_46"
            }, {
                props: t[5],
                eltId: "Ellipse_47"
            }, {
                props: t[5],
                eltId: "Ellipse_48"
            }, {
                props: t[5],
                eltId: "Ellipse_49"
            }, {
                props: t[5],
                eltId: "Ellipse_50"
            }, {
                props: t[5],
                eltId: "Ellipse_51"
            }, {
                props: t[5],
                eltId: "Image_28"
            }, {
                props: t[14],
                eltId: "Frame_93"
            }, {
                props: t[14],
                eltId: "Frame_94"
            }, {
                props: t[5],
                eltId: "Group_45"
            }, {
                props: t[5],
                eltId: "Frame_95"
            }, {
                props: t[5],
                eltId: "Group_46"
            }, {
                props: t[5],
                eltId: "Frame_96"
            }, {
                props: t[15],
                eltId: "Vector_125"
            }, {
                props: t[5],
                eltId: "Frame_97"
            }, {
                props: t[15],
                eltId: "Vector_127"
            }, {
                props: t[5],
                eltId: "Frame_98"
            }, {
                props: t[15],
                eltId: "Vector_129"
            }, {
                props: t[5],
                eltId: "Frame_99"
            }, {
                props: t[15],
                eltId: "Vector_131"
            }, {
                props: t[5],
                eltId: "Frame_100"
            }, {
                props: t[15],
                eltId: "Vector_133"
            }, {
                props: t[16],
                eltId: "_1291_850"
            }, {
                props: t[5],
                eltId: "Frame_101"
            }, {
                props: t[15],
                eltId: "Group_47"
            }, {
                props: t[5],
                eltId: "Group_51"
            }, {
                props: t[5],
                eltId: "Frame_102"
            }, {
                props: t[5],
                eltId: "Group_52"
            }, {
                props: t[5],
                eltId: "Frame_103"
            }, {
                props: t[15],
                eltId: "Vector_137"
            }, {
                props: t[5],
                eltId: "Frame_104"
            }, {
                props: t[15],
                eltId: "Vector_139"
            }, {
                props: t[5],
                eltId: "Frame_105"
            }, {
                props: t[15],
                eltId: "Vector_141"
            }, {
                props: t[5],
                eltId: "Frame_106"
            }, {
                props: t[15],
                eltId: "Vector_143"
            }, {
                props: t[5],
                eltId: "Frame_107"
            }, {
                props: t[15],
                eltId: "Vector_145"
            }, {
                props: t[16],
                eltId: "_1291_872"
            }, {
                props: t[5],
                eltId: "Frame_108"
            }, {
                props: t[15],
                eltId: "Group_53"
            }, {
                props: t[5],
                eltId: "Group_57"
            }, {
                props: t[5],
                eltId: "Frame_109"
            }, {
                props: t[5],
                eltId: "Group_58"
            }, {
                props: t[5],
                eltId: "Frame_110"
            }, {
                props: t[15],
                eltId: "Vector_149"
            }, {
                props: t[5],
                eltId: "Frame_111"
            }, {
                props: t[15],
                eltId: "Vector_151"
            }, {
                props: t[5],
                eltId: "Frame_112"
            }, {
                props: t[15],
                eltId: "Vector_153"
            }, {
                props: t[5],
                eltId: "Frame_113"
            }, {
                props: t[15],
                eltId: "Vector_155"
            }, {
                props: t[5],
                eltId: "Frame_114"
            }, {
                props: t[15],
                eltId: "Vector_157"
            }, {
                props: t[16],
                eltId: "_1291_894"
            }, {
                props: t[5],
                eltId: "Frame_115"
            }, {
                props: t[15],
                eltId: "Group_59"
            }, {
                props: t[14],
                eltId: "Frame_116"
            }, {
                props: t[16],
                eltId: "_1291_904"
            }, {
                props: t[16],
                eltId: "_1291_905"
            }, {
                props: t[16],
                eltId: "_1291_906"
            }, {
                props: t[14],
                eltId: "Leer_m_s_0"
            }, {
                props: t[16],
                eltId: "I1464_522_1464_513"
            }, {
                props: t[14],
                eltId: "Frame_117"
            }, {
                props: t[5],
                eltId: "Frame_118"
            }, {
                props: t[15],
                eltId: "Vector_161"
            }, {
                props: t[14],
                eltId: "Agendar_Cita_0"
            }, {
                props: t[16],
                eltId: "I1464_536_1464_530"
            }, {
                props: t[5],
                eltId: "Frame_119"
            }, {
                props: t[16],
                eltId: "_1291_913"
            }, {
                props: t[16],
                eltId: "_1291_914"
            }],
            rootId: "Desktop_Servicios"
        },
        1482: {
            type: "ALIAS",
            alias: "1481"
        },
        1483: {
            type: "ALIAS",
            alias: "1481"
        },
        1484: {
            type: "ALIAS",
            alias: "1480"
        },
        1485: {
            type: "ALIAS",
            alias: "1481"
        },
        1499: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[53],
                reactions: [{
                    type: "hover",
                    from: "1499"
                }],
                eltId: "Component_34"
            }, {
                props: t[4],
                eltId: "Frame_22_7"
            }, {
                props: t[5],
                eltId: "Rectangle_1_7"
            }, {
                props: t[57],
                eltId: "Frame_21_2"
            }, {
                props: t[13],
                eltId: "Frame_23_0"
            }, {
                props: t[13],
                eltId: "Rectangle_1_8"
            }],
            rootId: "Component_34"
        },
        1520: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[1],
                reactions: [{
                    type: "hover",
                    from: "1520"
                }],
                eltId: "Cont_ctenos_1"
            }, {
                props: t[51],
                eltId: "I1762_1296_1762_1281_1713_1092"
            }, {
                props: t[52],
                eltId: "__413"
            }],
            rootId: "Cont_ctenos_1"
        },
        1521: {
            type: "ALIAS",
            alias: "1520"
        },
        1533: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[3],
                reactions: [{
                    type: "hover",
                    from: "1533"
                }],
                eltId: "tag_1"
            }, {
                props: t[4],
                eltId: "I1762_1296_1762_1282_1713_1064"
            }, {
                props: t[5],
                eltId: "Rectangle_2_7"
            }],
            rootId: "tag_1"
        },
        1534: {
            type: "ALIAS",
            alias: "1533"
        },
        1666: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[30],
                reactions: [{
                    type: "hover",
                    from: "1666"
                }],
                eltId: "Link_0"
            }],
            rootId: "Link_0"
        },
        1717: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[8],
                reactions: [{
                    type: "hover",
                    from: "1717"
                }],
                eltId: "Agendar_1"
            }, {
                props: t[9],
                eltId: "I1620_4292_1122_438"
            }, {
                props: t[9],
                eltId: "__448"
            }],
            rootId: "Agendar_1"
        },
        1718: {
            type: "ALIAS",
            alias: "1717"
        },
        1752: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[31],
                eltId: "nav_0"
            }, {
                reactions: [{
                    type: "click",
                    from: "1752"
                }],
                eltId: "Text_input_21"
            }, {
                props: t[32],
                eltId: "I1620_4057_1175_723"
            }, {
                props: t[32],
                eltId: "__451"
            }, {
                props: t[33],
                reactions: [{
                    type: "click",
                    to: "1775"
                }],
                eltId: "Text_input_22"
            }, {
                props: t[34],
                eltId: "I1620_4057_1175_725"
            }, {
                props: t[34],
                eltId: "__452"
            }, {
                props: t[13],
                eltId: "Text_input_23"
            }, {
                reactions: [{
                    type: "click",
                    from: "1802",
                    to: "1801"
                }],
                eltId: "Text_input_24"
            }, {
                reactions: [{
                    type: "click",
                    from: "1828",
                    to: "1827"
                }],
                eltId: "Button_0"
            }, {
                props: t[5],
                eltId: "Text_input_27"
            }],
            rootId: "nav_0"
        },
        1753: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "click",
                    from: "1753"
                }],
                eltId: "Text_input_21"
            }, {
                props: t[32],
                eltId: "I1620_4057_1175_723"
            }, {
                props: t[32],
                eltId: "__451"
            }, {
                reactions: [{
                    type: "click",
                    from: "1776",
                    to: "1775"
                }],
                eltId: "Text_input_22"
            }, {
                reactions: [{
                    type: "click",
                    to: "1801"
                }],
                eltId: "Text_input_24"
            }, {
                props: t[34],
                eltId: "I1620_4057_1175_727"
            }, {
                props: t[34],
                eltId: "__453"
            }, {
                props: t[13],
                eltId: "Text_input_25"
            }, {
                reactions: [{
                    type: "click",
                    from: "1829",
                    to: "1827"
                }],
                eltId: "Button_0"
            }, {
                props: t[5],
                eltId: "Text_input_27"
            }],
            rootId: "nav_0"
        },
        1754: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "1754"
                }],
                eltId: "Text_input_21"
            }, {
                props: t[32],
                eltId: "I1620_4057_1175_723"
            }, {
                props: t[32],
                eltId: "__451"
            }, {
                reactions: [{
                    type: "click",
                    from: "1777",
                    to: "1775"
                }],
                eltId: "Text_input_22"
            }, {
                reactions: [{
                    type: "click",
                    from: "1803",
                    to: "1801"
                }],
                eltId: "Text_input_24"
            }, {
                reactions: [{
                    type: "click",
                    to: "1827"
                }],
                eltId: "Button_0"
            }, {
                props: t[34],
                eltId: "I1620_4057_1175_729"
            }, {
                props: t[34],
                eltId: "__454"
            }, {
                props: t[13],
                eltId: "Text_input_26"
            }, {
                props: t[5],
                eltId: "Text_input_27"
            }],
            rootId: "nav_0"
        },
        1755: {
            type: "ALIAS",
            alias: "1752"
        },
        1756: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "click",
                    from: "1756"
                }],
                eltId: "Text_input_21"
            }, {
                props: t[32],
                eltId: "I1620_4057_1175_723"
            }, {
                props: t[32],
                eltId: "__451"
            }, {
                reactions: [{
                    type: "click",
                    from: "1779",
                    to: "1778"
                }],
                eltId: "Text_input_22"
            }, {
                reactions: [{
                    type: "click",
                    to: "1804"
                }],
                eltId: "Text_input_24"
            }, {
                props: t[34],
                eltId: "I1620_4057_1175_727"
            }, {
                props: t[34],
                eltId: "__453"
            }, {
                props: t[13],
                eltId: "Text_input_25"
            }, {
                reactions: [{
                    type: "click",
                    from: "1832",
                    to: "1830"
                }],
                eltId: "Button_0"
            }, {
                props: t[5],
                eltId: "Text_input_27"
            }],
            rootId: "nav_0"
        },
        1757: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "1757"
                }],
                eltId: "Text_input_21"
            }, {
                props: t[32],
                eltId: "I1620_4057_1175_723"
            }, {
                props: t[32],
                eltId: "__451"
            }, {
                reactions: [{
                    type: "click",
                    from: "1780",
                    to: "1778"
                }],
                eltId: "Text_input_22"
            }, {
                reactions: [{
                    type: "click",
                    from: "1806",
                    to: "1804"
                }],
                eltId: "Text_input_24"
            }, {
                reactions: [{
                    type: "click",
                    to: "1830"
                }],
                eltId: "Button_0"
            }, {
                props: t[34],
                eltId: "I1620_4057_1175_729"
            }, {
                props: t[34],
                eltId: "__454"
            }, {
                props: t[13],
                eltId: "Text_input_26"
            }, {
                props: t[5],
                eltId: "Text_input_27"
            }],
            rootId: "nav_0"
        },
        1775: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[35],
                eltId: "nav_0"
            }, {
                reactions: [{
                    type: "click",
                    to: "1752"
                }],
                eltId: "Text_input_21"
            }, {
                props: t[34],
                eltId: "I1620_4057_1175_723"
            }, {
                props: t[34],
                eltId: "__451"
            }, {
                props: t[36],
                reactions: [{
                    type: "click",
                    from: "1775"
                }],
                eltId: "Text_input_22"
            }, {
                props: t[32],
                eltId: "I1620_4057_1175_725"
            }, {
                props: t[32],
                eltId: "__452"
            }, {
                props: t[5],
                eltId: "Text_input_23"
            }, {
                reactions: [{
                    type: "click",
                    from: "1801",
                    to: "1802"
                }],
                eltId: "Text_input_24"
            }, {
                reactions: [{
                    type: "click",
                    from: "1827",
                    to: "1828"
                }],
                eltId: "Button_0"
            }, {
                props: t[13],
                eltId: "Text_input_27"
            }],
            rootId: "nav_0"
        },
        1776: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[35],
                eltId: "nav_0"
            }, {
                reactions: [{
                    type: "click",
                    from: "1753",
                    to: "1752"
                }],
                eltId: "Text_input_21"
            }, {
                props: t[36],
                reactions: [{
                    type: "click",
                    from: "1776"
                }],
                eltId: "Text_input_22"
            }, {
                props: t[32],
                eltId: "I1620_4057_1175_725"
            }, {
                props: t[32],
                eltId: "__452"
            }, {
                props: t[5],
                eltId: "Text_input_23"
            }, {
                reactions: [{
                    type: "click",
                    to: "1802"
                }],
                eltId: "Text_input_24"
            }, {
                props: t[34],
                eltId: "I1620_4057_1175_727"
            }, {
                props: t[34],
                eltId: "__453"
            }, {
                props: t[13],
                eltId: "Text_input_25"
            }, {
                reactions: [{
                    type: "click",
                    from: "1829",
                    to: "1828"
                }],
                eltId: "Button_0"
            }],
            rootId: "nav_0"
        },
        1777: {
            type: "ANIMATE",
            animations: [{
                props: t[35],
                eltId: "nav_0"
            }, {
                reactions: [{
                    type: "click",
                    from: "1754",
                    to: "1752"
                }],
                eltId: "Text_input_21"
            }, {
                props: t[36],
                reactions: [{
                    type: "click",
                    from: "1777"
                }],
                eltId: "Text_input_22"
            }, {
                props: t[32],
                eltId: "I1620_4057_1175_725"
            }, {
                props: t[32],
                eltId: "__452"
            }, {
                props: t[5],
                eltId: "Text_input_23"
            }, {
                reactions: [{
                    type: "click",
                    from: "1803",
                    to: "1802"
                }],
                eltId: "Text_input_24"
            }, {
                reactions: [{
                    type: "click",
                    to: "1828"
                }],
                eltId: "Button_0"
            }, {
                props: t[34],
                eltId: "I1620_4057_1175_729"
            }, {
                props: t[34],
                eltId: "__454"
            }, {
                props: t[13],
                eltId: "Text_input_26"
            }],
            rootId: "nav_0"
        },
        1778: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[35],
                eltId: "nav_0"
            }, {
                reactions: [{
                    type: "click",
                    to: "1752"
                }],
                eltId: "Text_input_21"
            }, {
                props: t[34],
                eltId: "I1620_4057_1175_723"
            }, {
                props: t[34],
                eltId: "__451"
            }, {
                props: t[36],
                reactions: [{
                    type: "click",
                    from: "1778"
                }],
                eltId: "Text_input_22"
            }, {
                props: t[32],
                eltId: "I1620_4057_1175_725"
            }, {
                props: t[32],
                eltId: "__452"
            }, {
                props: t[5],
                eltId: "Text_input_23"
            }, {
                reactions: [{
                    type: "click",
                    from: "1804",
                    to: "1805"
                }],
                eltId: "Text_input_24"
            }, {
                reactions: [{
                    type: "click",
                    from: "1830",
                    to: "1831"
                }],
                eltId: "Button_0"
            }, {
                props: t[13],
                eltId: "Text_input_27"
            }],
            rootId: "nav_0"
        },
        1779: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[35],
                eltId: "nav_0"
            }, {
                reactions: [{
                    type: "click",
                    from: "1756",
                    to: "1752"
                }],
                eltId: "Text_input_21"
            }, {
                props: t[36],
                reactions: [{
                    type: "click",
                    from: "1779"
                }],
                eltId: "Text_input_22"
            }, {
                props: t[32],
                eltId: "I1620_4057_1175_725"
            }, {
                props: t[32],
                eltId: "__452"
            }, {
                props: t[5],
                eltId: "Text_input_23"
            }, {
                reactions: [{
                    type: "click",
                    to: "1805"
                }],
                eltId: "Text_input_24"
            }, {
                props: t[34],
                eltId: "I1620_4057_1175_727"
            }, {
                props: t[34],
                eltId: "__453"
            }, {
                props: t[13],
                eltId: "Text_input_25"
            }, {
                reactions: [{
                    type: "click",
                    from: "1832",
                    to: "1831"
                }],
                eltId: "Button_0"
            }],
            rootId: "nav_0"
        },
        1780: {
            type: "ANIMATE",
            animations: [{
                props: t[35],
                eltId: "nav_0"
            }, {
                reactions: [{
                    type: "click",
                    from: "1757",
                    to: "1752"
                }],
                eltId: "Text_input_21"
            }, {
                props: t[36],
                reactions: [{
                    type: "click",
                    from: "1780"
                }],
                eltId: "Text_input_22"
            }, {
                props: t[32],
                eltId: "I1620_4057_1175_725"
            }, {
                props: t[32],
                eltId: "__452"
            }, {
                props: t[5],
                eltId: "Text_input_23"
            }, {
                reactions: [{
                    type: "click",
                    from: "1806",
                    to: "1805"
                }],
                eltId: "Text_input_24"
            }, {
                reactions: [{
                    type: "click",
                    to: "1831"
                }],
                eltId: "Button_0"
            }, {
                props: t[34],
                eltId: "I1620_4057_1175_729"
            }, {
                props: t[34],
                eltId: "__454"
            }, {
                props: t[13],
                eltId: "Text_input_26"
            }],
            rootId: "nav_0"
        },
        1801: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "click",
                    to: "1753"
                }],
                eltId: "Text_input_21"
            }, {
                props: t[34],
                eltId: "I1620_4057_1175_723"
            }, {
                props: t[34],
                eltId: "__451"
            }, {
                reactions: [{
                    type: "click",
                    from: "1775",
                    to: "1776"
                }],
                eltId: "Text_input_22"
            }, {
                reactions: [{
                    type: "click",
                    from: "1801"
                }],
                eltId: "Text_input_24"
            }, {
                props: t[32],
                eltId: "I1620_4057_1175_727"
            }, {
                props: t[32],
                eltId: "__453"
            }, {
                props: t[5],
                eltId: "Text_input_25"
            }, {
                reactions: [{
                    type: "click",
                    from: "1827",
                    to: "1829"
                }],
                eltId: "Button_0"
            }, {
                props: t[13],
                eltId: "Text_input_27"
            }],
            rootId: "nav_0"
        },
        1802: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[31],
                eltId: "nav_0"
            }, {
                reactions: [{
                    type: "click",
                    from: "1752",
                    to: "1753"
                }],
                eltId: "Text_input_21"
            }, {
                props: t[33],
                reactions: [{
                    type: "click",
                    to: "1776"
                }],
                eltId: "Text_input_22"
            }, {
                props: t[34],
                eltId: "I1620_4057_1175_725"
            }, {
                props: t[34],
                eltId: "__452"
            }, {
                props: t[13],
                eltId: "Text_input_23"
            }, {
                reactions: [{
                    type: "click",
                    from: "1802"
                }],
                eltId: "Text_input_24"
            }, {
                props: t[32],
                eltId: "I1620_4057_1175_727"
            }, {
                props: t[32],
                eltId: "__453"
            }, {
                props: t[5],
                eltId: "Text_input_25"
            }, {
                reactions: [{
                    type: "click",
                    from: "1828",
                    to: "1829"
                }],
                eltId: "Button_0"
            }],
            rootId: "nav_0"
        },
        1803: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "1754",
                    to: "1753"
                }],
                eltId: "Text_input_21"
            }, {
                reactions: [{
                    type: "click",
                    from: "1777",
                    to: "1776"
                }],
                eltId: "Text_input_22"
            }, {
                reactions: [{
                    type: "click",
                    from: "1803"
                }],
                eltId: "Text_input_24"
            }, {
                props: t[32],
                eltId: "I1620_4057_1175_727"
            }, {
                props: t[32],
                eltId: "__453"
            }, {
                props: t[5],
                eltId: "Text_input_25"
            }, {
                reactions: [{
                    type: "click",
                    to: "1829"
                }],
                eltId: "Button_0"
            }, {
                props: t[34],
                eltId: "I1620_4057_1175_729"
            }, {
                props: t[34],
                eltId: "__454"
            }, {
                props: t[13],
                eltId: "Text_input_26"
            }],
            rootId: "nav_0"
        },
        1804: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "click",
                    to: "1756"
                }],
                eltId: "Text_input_21"
            }, {
                props: t[34],
                eltId: "I1620_4057_1175_723"
            }, {
                props: t[34],
                eltId: "__451"
            }, {
                reactions: [{
                    type: "click",
                    from: "1778",
                    to: "1779"
                }],
                eltId: "Text_input_22"
            }, {
                reactions: [{
                    type: "click",
                    from: "1804"
                }],
                eltId: "Text_input_24"
            }, {
                props: t[32],
                eltId: "I1620_4057_1175_727"
            }, {
                props: t[32],
                eltId: "__453"
            }, {
                props: t[5],
                eltId: "Text_input_25"
            }, {
                reactions: [{
                    type: "click",
                    from: "1830",
                    to: "1832"
                }],
                eltId: "Button_0"
            }, {
                props: t[13],
                eltId: "Text_input_27"
            }],
            rootId: "nav_0"
        },
        1805: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[31],
                eltId: "nav_0"
            }, {
                reactions: [{
                    type: "click",
                    from: "1752",
                    to: "1756"
                }],
                eltId: "Text_input_21"
            }, {
                props: t[33],
                reactions: [{
                    type: "click",
                    to: "1779"
                }],
                eltId: "Text_input_22"
            }, {
                props: t[34],
                eltId: "I1620_4057_1175_725"
            }, {
                props: t[34],
                eltId: "__452"
            }, {
                props: t[13],
                eltId: "Text_input_23"
            }, {
                reactions: [{
                    type: "click",
                    from: "1805"
                }],
                eltId: "Text_input_24"
            }, {
                props: t[32],
                eltId: "I1620_4057_1175_727"
            }, {
                props: t[32],
                eltId: "__453"
            }, {
                props: t[5],
                eltId: "Text_input_25"
            }, {
                reactions: [{
                    type: "click",
                    from: "1831",
                    to: "1832"
                }],
                eltId: "Button_0"
            }],
            rootId: "nav_0"
        },
        1806: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "1757",
                    to: "1756"
                }],
                eltId: "Text_input_21"
            }, {
                reactions: [{
                    type: "click",
                    from: "1780",
                    to: "1779"
                }],
                eltId: "Text_input_22"
            }, {
                reactions: [{
                    type: "click",
                    from: "1806"
                }],
                eltId: "Text_input_24"
            }, {
                props: t[32],
                eltId: "I1620_4057_1175_727"
            }, {
                props: t[32],
                eltId: "__453"
            }, {
                props: t[5],
                eltId: "Text_input_25"
            }, {
                reactions: [{
                    type: "click",
                    to: "1832"
                }],
                eltId: "Button_0"
            }, {
                props: t[34],
                eltId: "I1620_4057_1175_729"
            }, {
                props: t[34],
                eltId: "__454"
            }, {
                props: t[13],
                eltId: "Text_input_26"
            }],
            rootId: "nav_0"
        },
        1827: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "click",
                    to: "1754"
                }],
                eltId: "Text_input_21"
            }, {
                props: t[34],
                eltId: "I1620_4057_1175_723"
            }, {
                props: t[34],
                eltId: "__451"
            }, {
                reactions: [{
                    type: "click",
                    from: "1775",
                    to: "1777"
                }],
                eltId: "Text_input_22"
            }, {
                reactions: [{
                    type: "click",
                    from: "1801",
                    to: "1803"
                }],
                eltId: "Text_input_24"
            }, {
                reactions: [{
                    type: "click",
                    from: "1827"
                }],
                eltId: "Button_0"
            }, {
                props: t[32],
                eltId: "I1620_4057_1175_729"
            }, {
                props: t[32],
                eltId: "__454"
            }, {
                props: t[5],
                eltId: "Text_input_26"
            }, {
                props: t[13],
                eltId: "Text_input_27"
            }],
            rootId: "nav_0"
        },
        1828: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[31],
                eltId: "nav_0"
            }, {
                reactions: [{
                    type: "click",
                    from: "1752",
                    to: "1754"
                }],
                eltId: "Text_input_21"
            }, {
                props: t[33],
                reactions: [{
                    type: "click",
                    to: "1777"
                }],
                eltId: "Text_input_22"
            }, {
                props: t[34],
                eltId: "I1620_4057_1175_725"
            }, {
                props: t[34],
                eltId: "__452"
            }, {
                props: t[13],
                eltId: "Text_input_23"
            }, {
                reactions: [{
                    type: "click",
                    from: "1802",
                    to: "1803"
                }],
                eltId: "Text_input_24"
            }, {
                reactions: [{
                    type: "click",
                    from: "1828"
                }],
                eltId: "Button_0"
            }, {
                props: t[32],
                eltId: "I1620_4057_1175_729"
            }, {
                props: t[32],
                eltId: "__454"
            }, {
                props: t[5],
                eltId: "Text_input_26"
            }],
            rootId: "nav_0"
        },
        1829: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "1753",
                    to: "1754"
                }],
                eltId: "Text_input_21"
            }, {
                reactions: [{
                    type: "click",
                    from: "1776",
                    to: "1777"
                }],
                eltId: "Text_input_22"
            }, {
                reactions: [{
                    type: "click",
                    to: "1803"
                }],
                eltId: "Text_input_24"
            }, {
                props: t[34],
                eltId: "I1620_4057_1175_727"
            }, {
                props: t[34],
                eltId: "__453"
            }, {
                props: t[13],
                eltId: "Text_input_25"
            }, {
                reactions: [{
                    type: "click",
                    from: "1829"
                }],
                eltId: "Button_0"
            }, {
                props: t[32],
                eltId: "I1620_4057_1175_729"
            }, {
                props: t[32],
                eltId: "__454"
            }, {
                props: t[5],
                eltId: "Text_input_26"
            }],
            rootId: "nav_0"
        },
        1830: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "click",
                    to: "1757"
                }],
                eltId: "Text_input_21"
            }, {
                props: t[34],
                eltId: "I1620_4057_1175_723"
            }, {
                props: t[34],
                eltId: "__451"
            }, {
                reactions: [{
                    type: "click",
                    from: "1778",
                    to: "1780"
                }],
                eltId: "Text_input_22"
            }, {
                reactions: [{
                    type: "click",
                    from: "1804",
                    to: "1806"
                }],
                eltId: "Text_input_24"
            }, {
                reactions: [{
                    type: "click",
                    from: "1830"
                }],
                eltId: "Button_0"
            }, {
                props: t[32],
                eltId: "I1620_4057_1175_729"
            }, {
                props: t[32],
                eltId: "__454"
            }, {
                props: t[5],
                eltId: "Text_input_26"
            }, {
                props: t[13],
                eltId: "Text_input_27"
            }],
            rootId: "nav_0"
        },
        1831: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[31],
                eltId: "nav_0"
            }, {
                reactions: [{
                    type: "click",
                    from: "1752",
                    to: "1757"
                }],
                eltId: "Text_input_21"
            }, {
                props: t[33],
                reactions: [{
                    type: "click",
                    to: "1780"
                }],
                eltId: "Text_input_22"
            }, {
                props: t[34],
                eltId: "I1620_4057_1175_725"
            }, {
                props: t[34],
                eltId: "__452"
            }, {
                props: t[13],
                eltId: "Text_input_23"
            }, {
                reactions: [{
                    type: "click",
                    from: "1805",
                    to: "1806"
                }],
                eltId: "Text_input_24"
            }, {
                reactions: [{
                    type: "click",
                    from: "1831"
                }],
                eltId: "Button_0"
            }, {
                props: t[32],
                eltId: "I1620_4057_1175_729"
            }, {
                props: t[32],
                eltId: "__454"
            }, {
                props: t[5],
                eltId: "Text_input_26"
            }],
            rootId: "nav_0"
        },
        1832: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "1756",
                    to: "1757"
                }],
                eltId: "Text_input_21"
            }, {
                reactions: [{
                    type: "click",
                    from: "1779",
                    to: "1780"
                }],
                eltId: "Text_input_22"
            }, {
                reactions: [{
                    type: "click",
                    to: "1806"
                }],
                eltId: "Text_input_24"
            }, {
                props: t[34],
                eltId: "I1620_4057_1175_727"
            }, {
                props: t[34],
                eltId: "__453"
            }, {
                props: t[13],
                eltId: "Text_input_25"
            }, {
                reactions: [{
                    type: "click",
                    from: "1832"
                }],
                eltId: "Button_0"
            }, {
                props: t[32],
                eltId: "I1620_4057_1175_729"
            }, {
                props: t[32],
                eltId: "__454"
            }, {
                props: t[5],
                eltId: "Text_input_26"
            }],
            rootId: "nav_0"
        },
        1866: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,1866",
                    to: "T800ms,1867"
                }],
                eltId: "_1_0"
            }, {
                eltId: "Group_34",
                altId: "Group_36"
            }],
            rootId: "_1_0"
        },
        1867: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,1867",
                    to: "T800ms,1868"
                }],
                eltId: "_1_0"
            }, {
                eltId: "Group_36",
                altId: "Group_38"
            }],
            rootId: "_1_0"
        },
        1868: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,1868",
                    to: "T800ms,1869"
                }],
                eltId: "_1_0"
            }, {
                eltId: "Group_38",
                altId: "Group_40"
            }],
            rootId: "_1_0"
        },
        1869: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,1869",
                    to: "T800ms,1866"
                }],
                eltId: "_1_0"
            }, {
                eltId: "Group_40",
                altId: "Group_34"
            }],
            rootId: "_1_0"
        },
        1888: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[37],
                reactions: [{
                    type: "hover",
                    from: "1888"
                }, {
                    type: "click",
                    to: "1889"
                }],
                eltId: "WhatsApp_0"
            }, {
                props: t[37],
                eltId: "Vertical_container_3"
            }],
            rootId: "WhatsApp_0"
        },
        1889: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[38],
                reactions: [{
                    type: "click",
                    from: "1889"
                }],
                eltId: "WhatsApp_0"
            }, {
                props: t[39],
                eltId: "Vertical_container_3"
            }, {
                props: t[5],
                eltId: "Group_1_0"
            }, {
                props: t[5],
                eltId: "Frame_4_9"
            }, {
                props: t[5],
                eltId: "https_lottiefiles_com_animations_doctor_consultation_E1yd0wb6cx_0"
            }, {
                props: t[5],
                eltId: "Frame_5_1"
            }, {
                props: t[16],
                eltId: "I1546_1459_1125_460"
            }, {
                props: t[16],
                eltId: "I1546_1459_1125_461"
            }, {
                props: t[5],
                eltId: "mi_circle_error_0"
            }, {
                props: t[15],
                eltId: "Vector_123"
            }, {
                eltId: "linea_whatsApp_2",
                altId: "linea_whatsApp_3"
            }],
            rootId: "WhatsApp_0"
        },
        1909: {
            type: "ANIMATE",
            animations: [{
                props: t[40],
                reactions: [{
                    type: "hover",
                    to: "1888"
                }],
                eltId: "WhatsApp_0"
            }, {
                props: t[5],
                eltId: "Vertical_container_3"
            }, {
                props: t[13],
                eltId: "Group_1_0"
            }, {
                props: t[13],
                eltId: "Frame_4_9"
            }, {
                props: t[13],
                eltId: "https_lottiefiles_com_animations_doctor_consultation_E1yd0wb6cx_0"
            }, {
                props: t[13],
                eltId: "Frame_5_1"
            }, {
                props: t[18],
                eltId: "I1546_1459_1125_460"
            }, {
                props: t[18],
                eltId: "I1546_1459_1125_461"
            }, {
                props: t[13],
                eltId: "mi_circle_error_0"
            }, {
                props: t[11],
                eltId: "Vector_123"
            }, {
                eltId: "linea_whatsApp_3",
                altId: "linea_whatsApp_2"
            }],
            rootId: "WhatsApp_0"
        },
        1914: {
            type: "ANIMATE",
            transition: {
                type: "DISSOLVE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                eltId: "linea_whatsApp_3",
                altId: "linea_whatsApp_4"
            }],
            rootId: "linea_whatsApp_3"
        },
        1918: {
            type: "ANIMATE",
            transition: {
                type: "DISSOLVE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                eltId: "l_nea_3",
                altId: "l_nea_4"
            }],
            rootId: "l_nea_3"
        },
        1919: {
            type: "ANIMATE",
            transition: {
                type: "DISSOLVE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                eltId: "l_nea_4",
                altId: "l_nea_3"
            }],
            rootId: "l_nea_4"
        },
        1922: {
            type: "ANIMATE",
            transition: {
                type: "DISSOLVE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                eltId: "l_nea_5",
                altId: "l_nea_6"
            }],
            rootId: "l_nea_5"
        },
        1923: {
            type: "ANIMATE",
            transition: {
                type: "DISSOLVE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                eltId: "l_nea_6",
                altId: "l_nea_5"
            }],
            rootId: "l_nea_6"
        },
        1948: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[19],
                reactions: [{
                    type: "hover",
                    from: "1948"
                }],
                eltId: "Ver_m_s_0"
            }],
            rootId: "Ver_m_s_0"
        },
        2173: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[19],
                reactions: [{
                    type: "hover",
                    from: "2173"
                }],
                eltId: "Leer_m_s_0"
            }, {
                props: t[45],
                eltId: "__571"
            }],
            rootId: "Leer_m_s_0"
        },
        2187: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[19],
                reactions: [{
                    type: "hover",
                    from: "2187"
                }],
                eltId: "Agendar_Cita_0"
            }],
            rootId: "Agendar_Cita_0"
        }
    }
})(), window.F2W_VARIABLES = {
    "--bracketpoints": 1440,
    "--Display": 30,
    "--Display-1": 48,
    "--Display-2": 40,
    "--Display-3": 22,
    "--Display-4": 18,
    "--Display-5": 16,
    "--Display-6": 14,
    "--stroke-weight-1": 1,
    "--color-grey-73": {
        r: .7333333492279053,
        g: .7333333492279053,
        b: .7333333492279053,
        a: 1
    },
    "--stroke-weight-4": 4,
    "--color-grey-60": {
        r: .6000000238418579,
        g: .6000000238418579,
        b: .6000000238418579,
        a: 1
    },
    "--opacity-100": 100,
    "--color-white-solid": {
        r: 1,
        g: 1,
        b: 1,
        a: 1
    },
    "--width-690": 690,
    "--item-spacing-2-75": 2.755000114440918,
    "--color-grey-56": {
        r: .5686274766921997,
        g: .5686274766921997,
        b: .5607843399047852,
        a: 1
    },
    "--color-orange-37": {
        r: .5921568870544434,
        g: .2823529541492462,
        b: .14901961386203766,
        a: 1
    },
    "--font-family-Font-1": "Verdana",
    "--font-size-20": 20,
    "--font-weight-700": 700,
    "--line-height-38-83": 38.83000183105469,
    "--color-grey-32": {
        r: .32156863808631897,
        g: .32156863808631897,
        b: .3137255012989044,
        a: 1
    },
    "--font-family-Font-2": "Cardo",
    "--font-size-24": 24,
    "--font-size-15": 15,
    "--font-weight-400": 400,
    "--line-height-22-49": 22.489999771118164,
    "--item-spacing-9": 9,
    "--item-spacing-5": 5,
    "--font-size-14": 14,
    "--color-red-50": {
        r: 1,
        g: 0,
        b: 0,
        a: 1
    },
    "--color-azure-81": {
        r: .7647058963775635,
        g: .7921568751335144,
        b: .8470588326454163,
        a: 1
    },
    "--color-black-solid": {
        r: 0,
        g: 0,
        b: 0,
        a: 1
    },
    "--font-family-Font-3": "Arial",
    "--font-size-16": 16,
    "--line-height-17": 17,
    "--color-grey-97": {
        r: .9333333373069763,
        g: .9529411792755127,
        b: 1,
        a: 1
    },
    "--color-azure-53": {
        r: .2549019753932953,
        g: .4000000059604645,
        b: .8039215803146362,
        a: 1
    },
    "--font-size-12": 12,
    "--line-height-46": 46,
    "--color-azure-83": {
        r: .7921568751335144,
        g: .8156862854957581,
        b: .8666666746139526,
        a: 1
    },
    "--line-height-36": 36,
    "--color-blue-61": {
        r: .2823529541492462,
        g: .42352941632270813,
        b: .9333333373069763,
        a: 1
    },
    "--color-grey-94": {
        r: .9254902005195618,
        g: .929411768913269,
        b: .9529411792755127,
        a: 1
    },
    "--item-spacing-7": 7,
    "--color-azure-42": {
        r: .3450980484485626,
        g: .3960784375667572,
        b: .4941176474094391,
        a: 1
    },
    "--letter-spacing-2": 2,
    "--color-grey-59": {
        r: .5960784554481506,
        g: .5960784554481506,
        b: .5843137502670288,
        a: 1
    },
    "--color-grey-42": {
        r: .42352941632270813,
        g: .42352941632270813,
        b: .4117647111415863,
        a: 1
    },
    "--font-size-11": 11,
    "--item-spacing-0": 2842170943040401e-29,
    "--color-orange-48": {
        r: .7019608020782471,
        g: .38823530077934265,
        b: .25882354378700256,
        a: 1
    },
    "--color-orange-78": {
        r: .8784313797950745,
        g: .7372549176216125,
        b: .6784313917160034,
        a: 1
    },
    "--color-blue-18": {
        r: .03921568766236305,
        g: .08235294371843338,
        b: .3176470696926117,
        a: 1
    },
    "--width-132": 132,
    "--font-family-Font-4": "Roboto",
    "--width-216": 216,
    "--color-chartreuse-green-38": {
        r: .46666666865348816,
        g: .7333333492279053,
        b: .03529411926865578,
        a: 1
    },
    "--item-spacing-3": 3,
    "--width-312": 312,
    "--height-184": 184,
    "--height-160": 160,
    "--height-13": 13,
    "--stroke-weight-5": 5,
    "--letter-spacing-1": 1,
    "--item-spacing-916-25": 916.25,
    "--item-spacing-0-01": -.006000000052154064,
    "--String": "Arial ",
    "--color-chartreuse-green-72": {
        r: .615686297416687,
        g: 1,
        b: .4431372582912445,
        a: 1
    },
    "--color-rose-73": {
        r: 1,
        g: .4627451002597809,
        b: .8352941274642944,
        a: 1
    },
    "--color-azure-67": {
        r: .3333333432674408,
        g: .7450980544090271,
        b: 1,
        a: 1
    },
    "--font-size-25": 25,
    "--line-height-32": 32,
    "--color-violet-47": {
        r: .3176470696926117,
        g: .1568627506494522,
        b: .7764706015586853,
        a: 1
    },
    "--color-violet-66": {
        r: .658823549747467,
        g: .4431372582912445,
        b: .8823529481887817,
        a: 1
    },
    "--stroke-weight-0-99": .9888786673545837,
    "--color-grey-96": {
        r: .929411768913269,
        g: .9372549057006836,
        b: 1,
        a: 1
    },
    "--opacity-90": 90,
    "--color-rose-57": {
        r: .9372549057006836,
        g: .19607843458652496,
        b: .5921568870544434,
        a: 1
    },
    "--color-orange-62": {
        r: .9725490212440491,
        g: .6666666865348816,
        b: .26274511218070984,
        a: 1
    },
    "--color-rose-41": {
        r: .7176470756530762,
        g: .09803921729326248,
        b: .4274509847164154,
        a: 1
    },
    "--color-grey-18": {
        r: .1764705926179886,
        g: .1764705926179886,
        b: .1764705926179886,
        a: 1
    },
    "--color-violet-77": {
        r: .7803921699523926,
        g: .5647059082984924,
        b: .9803921580314636,
        a: 1
    },
    "--color-azure-69": {
        r: .3764705955982208,
        g: .6901960968971252,
        b: 1,
        a: 1
    },
    "--color-cyan-71": {
        r: .42352941632270813,
        g: 1,
        b: .8901960849761963,
        a: 1
    },
    "--color-azure-80": {
        r: .6117647290229797,
        g: .7372549176216125,
        b: .9921568632125854,
        a: 1
    },
    "--color-magenta-86-98-": {
        r: .9686274528503418,
        g: .7176470756530762,
        b: 1,
        a: .9800000190734863
    },
    "--color-orange-50": {
        r: 1,
        g: .4627451002597809,
        b: 0,
        a: 1
    },
    "--color-yellow-49": {
        r: .9882352948188782,
        g: .8745098114013672,
        b: 0,
        a: 1
    },
    "--color-blue-15": {
        r: .03921568766236305,
        g: .05882352963089943,
        b: .250980406999588,
        a: 1
    },
    "--color-spring-green-61": {
        r: .38823530077934265,
        g: .8392156958580017,
        b: .7098039388656616,
        a: 1
    },
    "--color-cyan-46": {
        r: .0313725508749485,
        g: .7019608020782471,
        b: .8980392217636108,
        a: 1
    },
    "--color-azure-66": {
        r: .3686274588108063,
        g: .7843137383460999,
        b: .9450980424880981,
        a: 1
    },
    "--color-azure-58": {
        r: .16470588743686676,
        g: .545098066329956,
        b: 1,
        a: 1
    },
    "--color-azure-46": {
        r: 0,
        g: .6666666865348816,
        b: .9137254953384399,
        a: 1
    },
    "--opacity-99-6": 99.5999984741211,
    "--color-azure-60": {
        r: .20000000298023224,
        g: .800000011920929,
        b: 1,
        a: 1
    },
    "--color-violet-80": {
        r: .8313725590705872,
        g: .6000000238418579,
        b: 1,
        a: 1
    },
    "--color-cyan-59": {
        r: .26274511218070984,
        g: .9176470637321472,
        b: .8941176533699036,
        a: 1
    },
    "--color-red-67": {
        r: .9647058844566345,
        g: .43921568989753723,
        b: .3843137323856354,
        a: 1
    },
    "--color-rose-65": {
        r: .9882352948188782,
        g: .32156863808631897,
        b: .5882353186607361,
        a: 1
    },
    "--stroke-weight-2": 2,
    "--color-azure-17": {
        r: .027450980618596077,
        g: .1568627506494522,
        b: .32156863808631897,
        a: 1
    },
    "--stroke-weight-3": 3.0005757808685303,
    "--color-azure-82": {
        r: .7803921699523926,
        g: .8196078538894653,
        b: .8588235378265381,
        a: 1
    },
    "--stroke-weight-1-65": 1.6542596817016602,
    "--stroke-weight-1-47": 1.4663832187652588,
    "--stroke-weight-1-18": 1.1831519603729248,
    "--color-grey-69": {
        r: .686274528503418,
        g: .686274528503418,
        b: .686274528503418,
        a: 1
    },
    "--stroke-weight-1-33": 1.3257324695587158,
    "--stroke-weight-1-68": 1.6764459609985352,
    "--stroke-weight-1-04": 1.0416666269302368,
    "--stroke-weight-0-29": .29482871294021606,
    "--stroke-weight-0-75": .75,
    "--width-86": 86,
    "--color-violet-48": {
        r: .45098039507865906,
        g: .1882352977991104,
        b: .7686274647712708,
        a: 1
    },
    "--color-orange-53": {
        r: .9450980424880981,
        g: .5098039507865906,
        b: .11764705926179886,
        a: 1
    },
    "--font-size-17": 17,
    "--line-height-20-4": 20.399999618530273,
    "--color-grey-54": {
        r: .5411764979362488,
        g: .5411764979362488,
        b: .5411764979362488,
        a: 1
    },
    "--line-height-25-5": 25.5,
    "--line-height-19": 19,
    "--color-violet-67": {
        r: .5882353186607361,
        g: .47843137383461,
        b: .8627451062202454,
        a: 1
    },
    "--line-height-24": 24,
    "--color-white-0-2-": {
        r: 1,
        g: 1,
        b: 1,
        a: .0020000000949949026
    },
    "--color-orange-70": {
        r: 1,
        g: .6000000238418579,
        b: .4000000059604645,
        a: 1
    },
    "--color-red-68": {
        r: 1,
        g: .3686274588108063,
        b: .3843137323856354,
        a: 1
    },
    "--color-azure-64-25-": {
        r: .5764706134796143,
        g: .6352941393852234,
        b: .6941176652908325,
        a: .25
    },
    "--line-height-26": 26,
    "--color-violet-71": {
        r: .5686274766921997,
        g: .4313725531101227,
        b: .9803921580314636,
        a: 1
    },
    "--color-blue-48": {
        r: .14509804546833038,
        g: .2235294133424759,
        b: .8156862854957581,
        a: 1
    },
    "--color-violet-41": {
        r: .5333333611488342,
        g: .08627451211214066,
        b: .729411780834198,
        a: 1
    },
    "--width-1140": 1140,
    "--font-size-60": 60,
    "--font-weight-800": 800,
    "--line-height-70": 70,
    "--font-size-18": 18,
    "--line-height-30": 30,
    "--color-violet-75": {
        r: .7411764860153198,
        g: .501960813999176,
        b: 1,
        a: 1
    },
    "--font-size-28": 28,
    "--letter-spacing-5-6": 5.599999904632568,
    "--width-960": 960,
    "--width-730": 730,
    "--color-grey-95": {
        r: .929411768913269,
        g: .9450980424880981,
        b: .9607843160629272,
        a: 1
    },
    "--item-spacing-74-99": 74.98999786376953,
    "--item-spacing-xs": 8,
    "--width-325": 324.9996643066406,
    "--width-253": 253,
    "--color-azure-70": {
        r: .6549019813537598,
        g: .6980392336845398,
        b: .7490196228027344,
        a: 1
    },
    "--line-height-23": 23,
    "--width-560": 560,
    "--item-spacing-20": 20,
    "--width-925": 925,
    "--font-size-55": 55,
    "--line-height-65": 65,
    "--font-size-22": 22,
    "--color-orange-39": {
        r: .5137255191802979,
        g: .45098039507865906,
        b: .27450981736183167,
        a: 1
    },
    "--letter-spacing-0-2": -.20000000298023224,
    "--width-423": 423,
    "--item-spacing-20-5": 20.5,
    "--width-955": 955,
    "--color-blue-49": {
        r: .16470588743686676,
        g: .2235294133424759,
        b: .8156862854957581,
        a: 1
    },
    "--color-violet-59": {
        r: .6117647290229797,
        g: .239215686917305,
        b: .9372549057006836,
        a: 1
    },
    "--color-grey-86": {
        r: .8588235378265381,
        g: .8588235378265381,
        b: .8588235378265381,
        a: 1
    },
    "--line-height-34": 34,
    "--width-485": 485,
    "--line-height-40": 40,
    "--width-970": 970,
    "--width-112": 112,
    "--width-845": 845,
    "--color-grey-93": {
        r: .8588235378265381,
        g: .8745098114013672,
        b: 1,
        a: 1
    },
    "--width-442": 442,
    "--font-size-50": 50,
    "--font-weight-600": 600,
    "--line-height-52": 52,
    "--item-spacing-1": -1,
    "--item-spacing-747-28": 747.280029296875,
    "--color-black-12-5-": {
        r: 0,
        g: 0,
        b: 0,
        a: .125
    },
    "--line-height-27": 27,
    "--item-spacing-701-66": 701.6599731445312,
    "--item-spacing-690-55": 690.5499877929688,
    "--item-spacing-722-96": 722.9600219726562,
    "--item-spacing-4-39": 4.389999866485596,
    "--color-violet-46": {
        r: .5607843399047852,
        g: .1764705926179886,
        b: .7490196228027344,
        a: 1
    },
    "--color-blue-50": {
        r: .20000000298023224,
        g: .21568627655506134,
        b: .8078431487083435,
        a: 1
    },
    "--color-orange-55": {
        r: .9764705896377563,
        g: .5803921818733215,
        b: .125490203499794,
        a: 1
    },
    "--line-height-28-8": 28.799999237060547,
    "--item-spacing-20-39": 20.389999389648438,
    "--width-285": 285,
    "--letter-spacing-0-5": .5,
    "--font-weight-900": 900,
    "--color-blue-37": {
        r: .3294117748737335,
        g: .32549020648002625,
        b: .42352941632270813,
        a: 1
    },
    "--item-spacing-418-2": 418.20001220703125,
    "--color-blue-26": {
        r: .22745098173618317,
        g: .23529411852359772,
        b: .2980392277240753,
        a: 1
    },
    "--color-grey-46": {
        r: .45098039507865906,
        g: .45098039507865906,
        b: .4627451002597809,
        a: 1
    }
}, window.F2W_COLLECTION_VARS = {
    dispositivos: {
        desktop: {
            "--bracketpoints": 1440,
            "--Display": 30,
            "--Display-1": 48,
            "--Display-2": 40,
            "--Display-3": 22,
            "--Display-4": 18,
            "--Display-5": 16,
            "--Display-6": 14,
            "--String": "Arial "
        },
        tablet: {
            "--bracketpoints": 1024,
            "--Display": 0,
            "--Display-1": 36,
            "--Display-2": 0,
            "--Display-3": 0,
            "--Display-4": 0,
            "--Display-5": 0,
            "--Display-6": 14,
            "--String": "Arial "
        },
        mobile: {
            "--bracketpoints": 390,
            "--Display": 0,
            "--Display-1": 24,
            "--Display-2": 0,
            "--Display-3": 0,
            "--Display-4": 16,
            "--Display-5": 14,
            "--Display-6": 12,
            "--String": "String value"
        }
    },
    "www-jotform-com": {
        "mode 1": {
            "--stroke-weight-1": 1,
            "--color-grey-73": {
                r: .7333333492279053,
                g: .7333333492279053,
                b: .7333333492279053,
                a: 1
            },
            "--stroke-weight-4": 4,
            "--color-grey-60": {
                r: .6000000238418579,
                g: .6000000238418579,
                b: .6000000238418579,
                a: 1
            },
            "--opacity-100": 100,
            "--color-white-solid": {
                r: 1,
                g: 1,
                b: 1,
                a: 1
            },
            "--width-690": 690,
            "--item-spacing-2-75": 2.755000114440918,
            "--color-grey-56": {
                r: .5686274766921997,
                g: .5686274766921997,
                b: .5607843399047852,
                a: 1
            },
            "--color-orange-37": {
                r: .5921568870544434,
                g: .2823529541492462,
                b: .14901961386203766,
                a: 1
            },
            "--font-family-Font-1": "Verdana",
            "--font-size-20": 20,
            "--font-weight-700": 700,
            "--line-height-38-83": 38.83000183105469,
            "--color-grey-32": {
                r: .32156863808631897,
                g: .32156863808631897,
                b: .3137255012989044,
                a: 1
            },
            "--font-family-Font-2": "Cardo",
            "--font-size-24": 24,
            "--font-size-15": 15,
            "--font-weight-400": 400,
            "--line-height-22-49": 22.489999771118164,
            "--item-spacing-9": 9,
            "--item-spacing-5": 5,
            "--font-size-14": 14,
            "--color-red-50": {
                r: 1,
                g: 0,
                b: 0,
                a: 1
            },
            "--color-azure-81": {
                r: .7647058963775635,
                g: .7921568751335144,
                b: .8470588326454163,
                a: 1
            },
            "--color-black-solid": {
                r: 0,
                g: 0,
                b: 0,
                a: 1
            },
            "--font-family-Font-3": "Arial",
            "--font-size-16": 16,
            "--line-height-17": 17,
            "--color-grey-97": {
                r: .9333333373069763,
                g: .9529411792755127,
                b: 1,
                a: 1
            },
            "--color-azure-53": {
                r: .2549019753932953,
                g: .4000000059604645,
                b: .8039215803146362,
                a: 1
            },
            "--font-size-12": 12,
            "--line-height-46": 46,
            "--color-azure-83": {
                r: .7921568751335144,
                g: .8156862854957581,
                b: .8666666746139526,
                a: 1
            },
            "--line-height-36": 36,
            "--color-blue-61": {
                r: .2823529541492462,
                g: .42352941632270813,
                b: .9333333373069763,
                a: 1
            },
            "--color-grey-94": {
                r: .9254902005195618,
                g: .929411768913269,
                b: .9529411792755127,
                a: 1
            },
            "--item-spacing-7": 7,
            "--color-azure-42": {
                r: .3450980484485626,
                g: .3960784375667572,
                b: .4941176474094391,
                a: 1
            },
            "--letter-spacing-2": 2,
            "--color-grey-59": {
                r: .5960784554481506,
                g: .5960784554481506,
                b: .5843137502670288,
                a: 1
            },
            "--color-grey-42": {
                r: .42352941632270813,
                g: .42352941632270813,
                b: .4117647111415863,
                a: 1
            },
            "--font-size-11": 11,
            "--item-spacing-0": 2842170943040401e-29,
            "--color-orange-48": {
                r: .7019608020782471,
                g: .38823530077934265,
                b: .25882354378700256,
                a: 1
            },
            "--color-orange-78": {
                r: .8784313797950745,
                g: .7372549176216125,
                b: .6784313917160034,
                a: 1
            },
            "--color-blue-18": {
                r: .03921568766236305,
                g: .08235294371843338,
                b: .3176470696926117,
                a: 1
            },
            "--width-132": 132,
            "--font-family-Font-4": "Roboto",
            "--width-216": 216,
            "--color-chartreuse-green-38": {
                r: .46666666865348816,
                g: .7333333492279053,
                b: .03529411926865578,
                a: 1
            },
            "--item-spacing-3": 3,
            "--width-312": 312,
            "--height-184": 184,
            "--height-160": 160,
            "--height-13": 13,
            "--stroke-weight-5": 5,
            "--letter-spacing-1": 1,
            "--item-spacing-916-25": 916.25,
            "--item-spacing-0-01": -.006000000052154064
        }
    },
    "www-animaker-es": {
        "mode 1": {
            "--color-chartreuse-green-72": {
                r: .615686297416687,
                g: 1,
                b: .4431372582912445,
                a: 1
            },
            "--color-rose-73": {
                r: 1,
                g: .4627451002597809,
                b: .8352941274642944,
                a: 1
            },
            "--color-azure-67": {
                r: .3333333432674408,
                g: .7450980544090271,
                b: 1,
                a: 1
            },
            "--font-size-25": 25,
            "--line-height-32": 32,
            "--color-violet-47": {
                r: .3176470696926117,
                g: .1568627506494522,
                b: .7764706015586853,
                a: 1
            },
            "--color-violet-66": {
                r: .658823549747467,
                g: .4431372582912445,
                b: .8823529481887817,
                a: 1
            },
            "--stroke-weight-0-99": .9888786673545837,
            "--color-grey-96": {
                r: .929411768913269,
                g: .9372549057006836,
                b: 1,
                a: 1
            },
            "--opacity-90": 90,
            "--color-rose-57": {
                r: .9372549057006836,
                g: .19607843458652496,
                b: .5921568870544434,
                a: 1
            },
            "--color-orange-62": {
                r: .9725490212440491,
                g: .6666666865348816,
                b: .26274511218070984,
                a: 1
            },
            "--color-rose-41": {
                r: .7176470756530762,
                g: .09803921729326248,
                b: .4274509847164154,
                a: 1
            },
            "--color-grey-18": {
                r: .1764705926179886,
                g: .1764705926179886,
                b: .1764705926179886,
                a: 1
            },
            "--color-violet-77": {
                r: .7803921699523926,
                g: .5647059082984924,
                b: .9803921580314636,
                a: 1
            },
            "--color-azure-69": {
                r: .3764705955982208,
                g: .6901960968971252,
                b: 1,
                a: 1
            },
            "--color-cyan-71": {
                r: .42352941632270813,
                g: 1,
                b: .8901960849761963,
                a: 1
            },
            "--color-azure-80": {
                r: .6117647290229797,
                g: .7372549176216125,
                b: .9921568632125854,
                a: 1
            },
            "--color-magenta-86-98-": {
                r: .9686274528503418,
                g: .7176470756530762,
                b: 1,
                a: .9800000190734863
            },
            "--color-orange-50": {
                r: 1,
                g: .4627451002597809,
                b: 0,
                a: 1
            },
            "--color-yellow-49": {
                r: .9882352948188782,
                g: .8745098114013672,
                b: 0,
                a: 1
            },
            "--color-blue-15": {
                r: .03921568766236305,
                g: .05882352963089943,
                b: .250980406999588,
                a: 1
            },
            "--color-spring-green-61": {
                r: .38823530077934265,
                g: .8392156958580017,
                b: .7098039388656616,
                a: 1
            },
            "--color-cyan-46": {
                r: .0313725508749485,
                g: .7019608020782471,
                b: .8980392217636108,
                a: 1
            },
            "--color-azure-66": {
                r: .3686274588108063,
                g: .7843137383460999,
                b: .9450980424880981,
                a: 1
            },
            "--color-azure-58": {
                r: .16470588743686676,
                g: .545098066329956,
                b: 1,
                a: 1
            },
            "--color-azure-46": {
                r: 0,
                g: .6666666865348816,
                b: .9137254953384399,
                a: 1
            },
            "--opacity-99-6": 99.5999984741211,
            "--color-azure-60": {
                r: .20000000298023224,
                g: .800000011920929,
                b: 1,
                a: 1
            },
            "--color-violet-80": {
                r: .8313725590705872,
                g: .6000000238418579,
                b: 1,
                a: 1
            },
            "--color-cyan-59": {
                r: .26274511218070984,
                g: .9176470637321472,
                b: .8941176533699036,
                a: 1
            },
            "--color-red-67": {
                r: .9647058844566345,
                g: .43921568989753723,
                b: .3843137323856354,
                a: 1
            },
            "--color-rose-65": {
                r: .9882352948188782,
                g: .32156863808631897,
                b: .5882353186607361,
                a: 1
            },
            "--stroke-weight-2": 2,
            "--color-azure-17": {
                r: .027450980618596077,
                g: .1568627506494522,
                b: .32156863808631897,
                a: 1
            },
            "--stroke-weight-3": 3.0005757808685303,
            "--color-azure-82": {
                r: .7803921699523926,
                g: .8196078538894653,
                b: .8588235378265381,
                a: 1
            },
            "--stroke-weight-1-65": 1.6542596817016602,
            "--stroke-weight-1-47": 1.4663832187652588,
            "--stroke-weight-1-18": 1.1831519603729248,
            "--color-grey-69": {
                r: .686274528503418,
                g: .686274528503418,
                b: .686274528503418,
                a: 1
            },
            "--stroke-weight-1-33": 1.3257324695587158,
            "--stroke-weight-1-68": 1.6764459609985352,
            "--stroke-weight-1-04": 1.0416666269302368,
            "--stroke-weight-0-29": .29482871294021606,
            "--stroke-weight-0-75": .75,
            "--width-86": 86,
            "--color-violet-48": {
                r: .45098039507865906,
                g: .1882352977991104,
                b: .7686274647712708,
                a: 1
            },
            "--color-orange-53": {
                r: .9450980424880981,
                g: .5098039507865906,
                b: .11764705926179886,
                a: 1
            },
            "--font-size-17": 17,
            "--line-height-20-4": 20.399999618530273,
            "--color-grey-54": {
                r: .5411764979362488,
                g: .5411764979362488,
                b: .5411764979362488,
                a: 1
            },
            "--line-height-25-5": 25.5,
            "--line-height-19": 19,
            "--color-violet-67": {
                r: .5882353186607361,
                g: .47843137383461,
                b: .8627451062202454,
                a: 1
            },
            "--line-height-24": 24,
            "--color-white-0-2-": {
                r: 1,
                g: 1,
                b: 1,
                a: .0020000000949949026
            },
            "--color-orange-70": {
                r: 1,
                g: .6000000238418579,
                b: .4000000059604645,
                a: 1
            },
            "--color-red-68": {
                r: 1,
                g: .3686274588108063,
                b: .3843137323856354,
                a: 1
            },
            "--color-azure-64-25-": {
                r: .5764706134796143,
                g: .6352941393852234,
                b: .6941176652908325,
                a: .25
            },
            "--line-height-26": 26,
            "--color-violet-71": {
                r: .5686274766921997,
                g: .4313725531101227,
                b: .9803921580314636,
                a: 1
            },
            "--color-blue-48": {
                r: .14509804546833038,
                g: .2235294133424759,
                b: .8156862854957581,
                a: 1
            },
            "--color-violet-41": {
                r: .5333333611488342,
                g: .08627451211214066,
                b: .729411780834198,
                a: 1
            },
            "--width-1140": 1140,
            "--font-size-60": 60,
            "--font-weight-800": 800,
            "--line-height-70": 70,
            "--font-size-18": 18,
            "--line-height-30": 30,
            "--color-violet-75": {
                r: .7411764860153198,
                g: .501960813999176,
                b: 1,
                a: 1
            },
            "--font-size-28": 28,
            "--letter-spacing-5-6": 5.599999904632568,
            "--width-960": 960,
            "--width-730": 730,
            "--color-grey-95": {
                r: .929411768913269,
                g: .9450980424880981,
                b: .9607843160629272,
                a: 1
            },
            "--item-spacing-74-99": 74.98999786376953,
            "--item-spacing-xs": 8,
            "--width-325": 324.9996643066406,
            "--width-253": 253,
            "--color-azure-70": {
                r: .6549019813537598,
                g: .6980392336845398,
                b: .7490196228027344,
                a: 1
            },
            "--line-height-23": 23,
            "--width-560": 560,
            "--item-spacing-20": 20,
            "--width-925": 925,
            "--font-size-55": 55,
            "--line-height-65": 65,
            "--font-size-22": 22,
            "--color-orange-39": {
                r: .5137255191802979,
                g: .45098039507865906,
                b: .27450981736183167,
                a: 1
            },
            "--letter-spacing-0-2": -.20000000298023224,
            "--width-423": 423,
            "--item-spacing-20-5": 20.5,
            "--width-955": 955,
            "--color-blue-49": {
                r: .16470588743686676,
                g: .2235294133424759,
                b: .8156862854957581,
                a: 1
            },
            "--color-violet-59": {
                r: .6117647290229797,
                g: .239215686917305,
                b: .9372549057006836,
                a: 1
            },
            "--color-grey-86": {
                r: .8588235378265381,
                g: .8588235378265381,
                b: .8588235378265381,
                a: 1
            },
            "--line-height-34": 34,
            "--width-485": 485,
            "--line-height-40": 40,
            "--width-970": 970,
            "--width-112": 112,
            "--width-845": 845,
            "--color-grey-93": {
                r: .8588235378265381,
                g: .8745098114013672,
                b: 1,
                a: 1
            },
            "--width-442": 442,
            "--font-size-50": 50,
            "--font-weight-600": 600,
            "--line-height-52": 52,
            "--item-spacing-1": -1,
            "--item-spacing-747-28": 747.280029296875,
            "--color-black-12-5-": {
                r: 0,
                g: 0,
                b: 0,
                a: .125
            },
            "--line-height-27": 27,
            "--item-spacing-701-66": 701.6599731445312,
            "--item-spacing-690-55": 690.5499877929688,
            "--item-spacing-722-96": 722.9600219726562,
            "--item-spacing-4-39": 4.389999866485596,
            "--color-violet-46": {
                r: .5607843399047852,
                g: .1764705926179886,
                b: .7490196228027344,
                a: 1
            },
            "--color-blue-50": {
                r: .20000000298023224,
                g: .21568627655506134,
                b: .8078431487083435,
                a: 1
            },
            "--color-orange-55": {
                r: .9764705896377563,
                g: .5803921818733215,
                b: .125490203499794,
                a: 1
            },
            "--line-height-28-8": 28.799999237060547,
            "--item-spacing-20-39": 20.389999389648438,
            "--width-285": 285,
            "--letter-spacing-0-5": .5,
            "--font-weight-900": 900,
            "--color-blue-37": {
                r: .3294117748737335,
                g: .32549020648002625,
                b: .42352941632270813,
                a: 1
            },
            "--item-spacing-418-2": 418.20001220703125,
            "--color-blue-26": {
                r: .22745098173618317,
                g: .23529411852359772,
                b: .2980392277240753,
                a: 1
            },
            "--color-grey-46": {
                r: .45098039507865906,
                g: .45098039507865906,
                b: .4627451002597809,
                a: 1
            }
        }
    }
}, window.F2W_COLLECTION_MODE_BPS = {
    dispositivos: {
        mobile: {
            minWidth: 0
        },
        tablet: {
            minWidth: 768
        },
        desktop: {
            minWidth: 1440
        }
    }
}, window.F2W_COLOR_SCHEMES = void 0, window.F2W_LANGUAGES = void 0; 


    var Ke = Object.defineProperty,
        Ue = Object.defineProperties,
        Ye = Object.getOwnPropertyDescriptors,
        H = Object.getOwnPropertySymbols,
        se = Object.prototype.hasOwnProperty,
        ae = Object.prototype.propertyIsEnumerable,
        ie = (r, n, o) => n in r ? Ke(r, n, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : r[n] = o,
        C = (r, n) => {
            for (var o in n || (n = {})) se.call(n, o) && ie(r, o, n[o]);
            if (H)
                for (var o of H(n)) ae.call(n, o) && ie(r, o, n[o]);
            return r
        },
        S = (r, n) => Ue(r, Ye(n)),
        le = (r, n) => {
            var o = {};
            for (var i in r) se.call(r, i) && n.indexOf(i) < 0 && (o[i] = r[i]);
            if (r != null && H)
                for (var i of H(r)) n.indexOf(i) < 0 && ae.call(r, i) && (o[i] = r[i]);
            return o
        },
        ue = (r, n, o) => new Promise((i, l) => {
            var s = m => {
                    try {
                        c(o.next(m))
                    } catch (f) {
                        l(f)
                    }
                },
                u = m => {
                    try {
                        c(o.throw(m))
                    } catch (f) {
                        l(f)
                    }
                },
                c = m => m.done ? i(m.value) : Promise.resolve(m.value).then(s, u);
            c((o = o.apply(r, n)).next())
        });

function V(r, n) {
    return Math.round(r * n) / n
}

function Z(r, n, o, i) {
    let l = (r + (i || "")).toString().includes("%");
    if (typeof r == "string" ? [r, n, o, i] = r.match(/(0?\.?\d+)%?\b/g).map(s => Number(s)) : i !== void 0 && (i = Number.parseFloat(i)), typeof r != "number" || typeof n != "number" || typeof o != "number" || r > 255 || n > 255 || o > 255) throw new TypeError("Expected three numbers below 256");
    if (typeof i == "number") {
        if (!l && i >= 0 && i <= 1) i = Math.round(255 * i);
        else if (l && i >= 0 && i <= 100) i = Math.round(255 * i / 100);
        else throw new TypeError(`Expected alpha value (${i}) as a fraction or percentage`);
        i = (i | 256).toString(16).slice(1)
    } else i = "";
    return (o | n << 8 | r << 16 | 1 << 24).toString(16).slice(1) + i
}

function B(r) {
    return r.filter(de)
}

function de(r) {
    return r != null
}

function $(r) {
    console.warn(r)
}

function W(r) {
    return typeof r == "object" && r.type === "VARIABLE_ALIAS"
}

function qe(r) {
    if ("a" in r) {
        let o = V(r.a, 100);
        if (o !== 1) return `rgba(${r.r},${r.g},${r.b},${o})`
    }
    let n = Z(r.r, r.g, r.b);
    return n[0] === n[1] && n[2] === n[3] && n[4] === n[5] ? `#${n[0]}${n[2]}${n[4]}` : `#${n}`
}

function Ze(r) {
    let {
        r: n,
        g: o,
        b: i,
        a: l = 1
    } = r;
    return {
        r: V(n * 255, 1),
        g: V(o * 255, 1),
        b: V(i * 255, 1),
        a: l
    }
}

function A(r) {
    return `${V(r,10)}px`
}

function Q(r) {
    return `${V(r,10)}%`
}

function ce(r) {
    switch (typeof r) {
        case "object":
            if (W(r)) return `var(${r.id})`;
            if ("r" in r) return qe(Ze(r));
        case "string":
        case "number":
        case "boolean":
        default:
            return String(r)
    }
}

function z(r) {
    return "T" + r
}

function J(r, n, o) {
    let i = Object.entries(n);
    if (!i.length) return "";
    let l = [r + " {", ...i.filter(([, s]) => s !== void 0 && s !== "").map(([s, u]) => `  ${s}: ${u};`), "}"];
    return o && (l = l.map(s => o + s)), l.join(`
`)
}
var Je = {
        padding: "0",
        margin: "0"
    },
    et = {
        a: {
            color: "inherit",
            "text-decoration": "inherit"
        },
        input: {
            border: "none",
            font: "inherit",
            outline: "none",
            "background-color": "inherit"
        },
        button: {
            "border-style": "none",
            width: "auto",
            overflow: "visible",
            background: "transparent",
            font: "inherit",
            "background-color": "inherit",
            "line-height": "normal",
            color: "inherit"
        },
        textarea: {
            font: "inherit",
            "background-color": "inherit"
        },
        select: {
            font: "inherit",
            "background-color": "inherit"
        },
        img: {
            display: "block"
        },
        picture: {
            display: "block"
        },
        video: {
            display: "block"
        },
        canvas: {
            display: "block"
        },
        svg: {
            display: "block"
        }
    },
    sn = J("*", Je) + Object.entries(et).map(([r, n]) => J(r, n)).join(`
`),
    pe = ["appear", "mousedown", "mouseenter", "mouseleave", "mouseup", "timeout", "click", "press", "drag", "keydown", "hover"];

function fe(r, n, o) {
    if (o.direction === "LEFT") {
        if (n === "BOTTOM_LEFT" || n === "TOP_LEFT") return [{
            eltId: r,
            props: [{
                key: "left",
                from: "100%",
                to: "0%"
            }]
        }];
        if (n === "BOTTOM_RIGHT" || n === "TOP_RIGHT") return [{
            eltId: r,
            props: [{
                key: "translate",
                from: "100% 0px",
                to: "0px 0px"
            }]
        }];
        {
            let i = n === "CENTER" ? "-50%" : "0px";
            return [{
                eltId: r,
                props: [{
                    key: "left",
                    from: "100%",
                    to: "50%"
                }, {
                    key: "translate",
                    from: `0px ${i}`,
                    to: `-50% ${i}`
                }]
            }]
        }
    } else if (o.direction === "RIGHT") {
        if (n === "BOTTOM_LEFT" || n === "TOP_LEFT") return [{
            eltId: r,
            props: [{
                key: "translate",
                from: "-100% 0px",
                to: "0px 0px"
            }]
        }];
        if (n === "BOTTOM_RIGHT" || n === "TOP_RIGHT") return [{
            eltId: r,
            props: [{
                key: "right",
                from: "100%",
                to: "0px"
            }]
        }];
        {
            let i = n === "CENTER" ? "-50%" : "0px";
            return [{
                eltId: r,
                props: [{
                    key: "left",
                    from: "0px",
                    to: "50%"
                }, {
                    key: "translate",
                    from: `-100% ${i}`,
                    to: `-50% ${i}`
                }]
            }]
        }
    } else if (o.direction === "TOP")
        if (n === "BOTTOM_LEFT" || n === "BOTTOM_RIGHT" || n === "BOTTOM_CENTER") {
            let i = n === "BOTTOM_CENTER" ? "-50%" : "0px";
            return [{
                eltId: r,
                props: [{
                    key: "translate",
                    from: `${i} 100%`,
                    to: `${i} 0px`
                }]
            }]
        } else return n === "TOP_LEFT" || n === "TOP_RIGHT" || n === "TOP_CENTER" ? [{
            eltId: r,
            props: [{
                key: "top",
                from: "100%",
                to: "0px"
            }]
        }] : [{
            eltId: r,
            props: [{
                key: "top",
                from: "100%",
                to: "50%"
            }, {
                key: "translate",
                from: "-50% 0%",
                to: "-50% -50%"
            }]
        }];
    else if (o.direction === "BOTTOM") {
        if (n === "BOTTOM_LEFT" || n === "BOTTOM_RIGHT" || n === "BOTTOM_CENTER") return [{
            eltId: r,
            props: [{
                key: "bottom",
                from: "100%",
                to: "0px"
            }]
        }];
        if (n === "TOP_LEFT" || n === "TOP_RIGHT" || n === "TOP_CENTER") {
            let i = n === "TOP_CENTER" ? "-50%" : "0px";
            return [{
                eltId: r,
                props: [{
                    key: "translate",
                    from: `${i} -100%`,
                    to: `${i} 0px`
                }]
            }]
        } else return [{
            eltId: r,
            props: [{
                key: "top",
                from: "0px",
                to: "50%"
            }, {
                key: "translate",
                from: "-50% -100%",
                to: "-50% -50%"
            }]
        }]
    } else console.warn("Unsupported transition:", o);
    return []
}

function G(r) {
    if (r) return (...n) => {
        if (!r) return;
        let o = r;
        return r = void 0, o(...n)
    }
}
var tt = r => r instanceof HTMLElement || r instanceof SVGElement;

function nt(r, n) {
    if (!r.parentElement) return;
    let o = new MutationObserver(i => {
        for (let l of i.filter(s => s.type === "childList"))
            for (let s of l.removedNodes) s === r && (n?.(), o.disconnect())
    });
    o.observe(r.parentElement, {
        childList: !0
    })
}

function O(r, n) {
    let o = new MutationObserver(i => {
        for (let l of i.filter(s => s.type === "childList"))
            for (let s of l.addedNodes) tt(s) && s.matches(r) && nt(s, n(s))
    });
    return o.observe(document, {
        childList: !0,
        subtree: !0
    }), () => o.disconnect()
}
var me = new Set(["youtube-video", "vimeo-video", "spotify-audio", "jwplayer-video", "videojs-video", "wistia-video", "cloudflare-video", "hls-video", "shaka-video", "dash-video"]);

function rt(r) {
    return me.has(r.tagName.toLowerCase()) || r.tagName === "VIDEO"
}

function ot(r) {
    if (r.tagName !== "IFRAME") return !1;
    let n = r.src;
    return (n.includes("youtube.com") || n.includes("youtube-nocookie.com")) && n.includes("enablejsapi=1")
}
var F = class {
    constructor(r) {
        this.iframe = r, this.info = {}, this.messageListener = null, this.loaded = new Promise(n => {
            let o = () => {
                this.iframe.removeEventListener("load", o), setTimeout(() => {
                    this.requestYoutubeListening()
                })
            };
            this.iframe.addEventListener("load", o), this.messageListener = i => {
                if (i.source === this.iframe.contentWindow && i.data) {
                    let l;
                    try {
                        l = JSON.parse(i.data)
                    } catch (s) {
                        console.error("YoutubeController messageListener", s);
                        return
                    }
                    l.event === "onReady" && this.iframe.removeEventListener("load", o), l.info && (Object.assign(this.info, l.info), n(!0))
                }
            }, window.addEventListener("message", this.messageListener), this.requestYoutubeListening()
        })
    }
    sendYoutubeMessage(r) {
        return ue(this, arguments, function*(n, o = []) {
            var i;
            yield this.loaded, (i = this.iframe.contentWindow) == null || i.postMessage(JSON.stringify({
                event: "command",
                func: n,
                args: o
            }), "*")
        })
    }
    requestYoutubeListening() {
        var r;
        (r = this.iframe.contentWindow) == null || r.postMessage(JSON.stringify({
            event: "listening"
        }), "*")
    }
    get muted() {
        return this.info.muted
    }
    get volume() {
        return this.info.volume
    }
    set muted(r) {
        r ? this.sendYoutubeMessage("mute") : this.sendYoutubeMessage("unMute")
    }
    get currentTime() {
        return this.info.currentTime
    }
    set currentTime(r) {
        this.sendYoutubeMessage("seekTo", [r, !0])
    }
    get paused() {
        return this.info.playerState === 2
    }
    play() {
        this.sendYoutubeMessage("playVideo")
    }
    pause() {
        this.sendYoutubeMessage("pauseVideo")
    }
    static from(r) {
        return r.f2w_yt_controller || (r.f2w_yt_controller = new F(r))
    }
};

function M(r) {
    if (rt(r)) return r;
    if (ot(r)) return F.from(r)
}

function ge(r) {
    let n = M(r);
    return n ? () => (n.muted = !n.muted, () => {
        n.muted = !n.muted
    }) : () => console.warn("Video element not recognized", r)
}

function ye(r) {
    let n = M(r);
    return n ? () => (n.muted = !0, () => {
        n.muted = !1
    }) : () => console.warn("Video element not recognized", r)
}

function Ee(r) {
    let n = M(r);
    return n ? () => (n.muted = !1, () => {
        n.muted = !0
    }) : () => console.warn("Video element not recognized", r)
}

function he(r) {
    let n = M(r);
    return n ? () => (n.play(), () => n.pause()) : () => console.warn("Video element not recognized", r)
}

function xe(r) {
    let n = M(r);
    return n ? () => (n.pause(), () => n.play()) : () => console.warn("Video element not recognized", r)
}

function be(r) {
    let n = M(r);
    return n ? () => (n.paused ? n.play() : n.pause(), () => {
        n.paused ? n.play() : n.pause()
    }) : () => console.warn("Video element not recognized", r)
}

function Te(r, n) {
    let o = M(r);
    return o ? () => {
        o.currentTime = n
    } : () => console.warn("Video element not recognized", r)
}

function ve(r, n) {
    let o = M(r);
    return o ? () => (o.currentTime += n, () => {
        o.currentTime -= n
    }) : () => console.warn("Video element not recognized", r)
}

function Ne(r, n) {
    let o = M(r);
    return o ? () => (o.currentTime -= n, () => {
        o.currentTime += n
    }) : () => console.warn("Video element not recognized", r)
}

function Ce() {
    let r = navigator.userAgent;
    return r.includes("Safari") && !r.includes("Chrome")
}

function Ae(r) {
    return r === "absolute" || r === "fixed"
}
var it = Ce();

function K(r, n, o) {
    r.animate(C({}, n), {
        pseudoElement: o,
        iterations: 1,
        duration: 0,
        fill: "forwards"
    })
}

function ee(r) {
    return Object.fromEntries(r.map(n => [n.camelKey, [n.from, n.to]]))
}

function U(r, n, o, i, l) {
    let s = r.parentElement,
        u = getComputedStyle(r),
        c = getComputedStyle(s).display,
        m = c.endsWith("flex") || c.endsWith("grid"),
        f = Ae(u.position),
        h = n.map(a => S(C({}, a), {
            camelKey: a.key.startsWith("--") ? a.key : a.key.replace(/-([a-z])/g, (g, p) => p.toUpperCase())
        })),
        E = {},
        D = h.filter(a => a.pseudo ? !1 : a.key.startsWith("--f2w-attr-") ? (E[a.key.slice(11)] = a.to, !1) : !0),
        d = ee(D),
        T = ee(h.filter(a => a.pseudo === "::before")),
        N = ee(h.filter(a => a.pseudo === "::after"));
    d.display && (d.display[0] === "none" ? r.style.display = String(d.display[1]) : d.display[1] === "none" && m && !f && (r.style.display = "none"), delete d.display), it && (we(r, d, "overflow"), we(r, d, "rowGap", "gridRowGap"));
    let y = +getComputedStyle(r).getPropertyValue("--f2w-order");
    if (d["--f2w-order"]) {
        let a = d["--f2w-order"][1];
        y = a === void 0 ? NaN : +a, isNaN(y) || r.style.setProperty("--f2w-order", String(y)), delete d["--f2w-order"]
    }
    if (isNaN(y) || l.add(s), d["--f2w-img-src"]) {
        let a = r.f2w_image_lazy_loader,
            g = d["--f2w-img-src"][1];
        a || (r.f2w_image_lazy_loader = a = new Image, a.decoding = "sync", a.onload = () => {
            r.decoding = "sync", r.setAttribute("src", g), delete r.f2w_image_lazy_loader
        }), a.src = g, delete d["--f2w-img-src"]
    }
    d.$innerHTML && (r.innerHTML = String(d.$innerHTML[1]), delete d.$innerHTML);
    for (let [a, g] of Object.entries(E)) r.setAttribute(a, String(g));
    if (d.left && d.right) {
        if (d.left[1] === "revert" && d.right[0] === "revert") {
            let {
                right: a
            } = s.getBoundingClientRect(), {
                right: g
            } = r.getBoundingClientRect(), p = A(a - g);
            K(r, {
                left: "revert",
                right: p
            }), delete d.left, d.right[0] = p
        } else if (d.left[0] === "revert" && d.right[1] === "revert") {
            let {
                left: a
            } = s.getBoundingClientRect(), {
                left: g
            } = r.getBoundingClientRect(), p = A(g - a);
            K(r, {
                right: "revert",
                left: p
            }), delete d.right, d.left[0] = p
        }
    }
    if (d.top && d.bottom) {
        if (d.top[1] === "revert" && d.bottom[0] === "revert") {
            let {
                bottom: a
            } = s.getBoundingClientRect(), {
                bottom: g
            } = r.getBoundingClientRect(), p = A(a - g);
            K(r, {
                top: "revert",
                bottom: p
            }), delete d.top, d.bottom[0] = p
        } else if (d.top[0] === "revert" && d.bottom[1] === "revert") {
            let {
                top: a
            } = s.getBoundingClientRect(), {
                top: g
            } = r.getBoundingClientRect(), p = A(g - a);
            K(r, {
                bottom: "revert",
                top: p
            }), delete d.bottom, d.top[0] = p
        }
    }
    d.backgroundImage && D.filter(a => a.key.startsWith("background-")).forEach(a => {
        r.style.setProperty(a.key, String(a.to)), delete d[a.camelKey]
    });
    for (let [a, g] of [
            ["before", T],
            ["after", N]
        ]) g.display && (g.display[1] === "none" ? (r.classList.remove(a + "-visible"), r.classList.add(a + "-hidden")) : (r.classList.remove(a + "-hidden"), r.classList.add(a + "-visible")));
    let v = (a, g) => {
        if (Object.keys(a).length) return r.animate(C({
            easing: o
        }, a), {
            pseudoElement: g,
            iterations: 1,
            duration: i,
            fill: "both"
        })
    };
    v(d), v(T, "::before"), v(N, "::after")
}
var we = (r, n, ...o) => {
        let i = o.find(l => l in n);
        !i || (r.style[o[0]] = String(n[i][1]), delete n[i])
    },
    _e = () => window.F2W_REACTIONS,
    j = () => window.F2W_VARIABLES,
    st = () => window.F2W_COLLECTION_MODE_BPS,
    ke = r => {
        var n, o;
        return (o = (n = window.F2W_COLLECTION_VARS) == null ? void 0 : n[r]) != null ? o : {}
    },
    at = (r, n) => ke(r)[n];

function Be(r, n) {
    j()[r] = n;
    let o = ce(n);
    document.body.style.setProperty(r, o);
    let i = `data${r.slice(1)}`;
    document.body.hasAttribute(i) && document.body.setAttribute(i, o), document.dispatchEvent(new CustomEvent("f2w-set-variable", {
        detail: {
            id: r,
            value: n,
            str: o
        }
    }))
}

function X(r, n) {
    var o;
    document.body.setAttribute(`data-${r}`, n);
    let i = (o = at(r, n)) != null ? o : {};
    for (let [l, s] of Object.entries(i)) Be(l, s)
}

function lt(r, n) {
    var o, i;
    X(r, n), (o = window.F2W_COLOR_SCHEMES) != null && o.includes(r) ? localStorage?.setItem(ze, n) : (i = window.F2W_LANGUAGES) != null && i.includes(r) && localStorage?.setItem(Ge, n)
}

function x(r) {
    return typeof r == "number" ? r : typeof r == "boolean" ? r ? 1 : 0 : typeof r == "string" ? parseFloat(r) : 0
}

function P(r) {
    return String(r)
}

function w(r) {
    return typeof r == "string" ? r === "true" : !!r
}

function k(r, n) {
    var o, i;
    if (r === void 0) return !1;
    if (W(r)) return k(j()[r.id]);
    if (typeof r == "object" && "expressionArguments" in r) {
        let l = r.expressionArguments.map(u => u.value).filter(u => u !== void 0).map(u => k(u, n)),
            s = (i = (o = r.expressionArguments[0]) == null ? void 0 : o.resolvedType) != null ? i : "STRING";
        switch (r.expressionFunction) {
            case "ADDITION":
                return s === "FLOAT" ? l.map(x).reduce((u, c) => u + c) : l.map(P).reduce((u, c) => u + c);
            case "SUBTRACTION":
                if (l.length !== 2) throw new Error("Invalid expression");
                return x(l[0]) - x(l[1]);
            case "DIVISION":
                if (l.length !== 2) throw new Error("Invalid expression");
                return x(l[0]) / x(l[1]);
            case "MULTIPLICATION":
                return l.map(x).reduce((u, c) => u * c);
            case "NEGATE":
                if (l.length !== 1) throw new Error("Invalid expression");
                return -x(l[0]);
            case "GREATER_THAN":
                if (l.length !== 2) throw new Error("Invalid expression");
                return x(l[0]) > x(l[1]);
            case "GREATER_THAN_OR_EQUAL":
                if (l.length !== 2) throw new Error("Invalid expression");
                return x(l[0]) >= x(l[1]);
            case "LESS_THAN":
                if (l.length !== 2) throw new Error("Invalid expression");
                return x(l[0]) < x(l[1]);
            case "LESS_THAN_OR_EQUAL":
                if (l.length !== 2) throw new Error("Invalid expression");
                return x(l[0]) <= x(l[1]);
            case "EQUALS":
                if (l.length !== 2) throw new Error("Invalid expression");
                return s === "FLOAT" ? x(l[0]) === x(l[1]) : s === "BOOLEAN" ? w(l[0]) === w(l[1]) : P(l[0]) === P(l[1]);
            case "NOT_EQUAL":
                if (l.length !== 2) throw new Error("Invalid expression");
                return s === "FLOAT" ? x(l[0]) !== x(l[1]) : s === "BOOLEAN" ? w(l[0]) !== w(l[1]) : P(l[0]) !== P(l[1]);
            case "AND":
                if (l.length !== 2) throw new Error("Invalid expression");
                return w(l[0]) && w(l[1]);
            case "OR":
                if (l.length !== 2) throw new Error("Invalid expression");
                return w(l[0]) || w(l[1]);
            case "NOT":
                if (l.length !== 1) throw new Error("Invalid expression");
                return !w(l[0]);
            case "VAR_MODE_LOOKUP":
            default:
                return console.warn(`Expression not implemented yet: ${r.expressionFunction}`), !1
        }
    } else return r
}

function ne(r, n, o) {
    let i = r.map(l => ut(l, n, o));
    return (l, s) => {
        let u = i.map(c => c(l, s)).filter(c => !!c);
        if (u.length) return (c, m) => u.forEach(f => f(c, m))
    }
}

function ut(r, n, o) {
    for (; r.type === "ALIAS";) r = _e()[r.alias];
    let i = dt(r, n, o);
    return l => {
        if (r.type !== "ANIMATE" && o === "drag") {
            let s = l.detail;
            if (!s.handled) return s.handled = !0, i(l)
        }
        if (!I) {
            if (r.type === "ANIMATE" && r.rootId) {
                let s = document.getElementById(r.rootId);
                if (s != null && s.parentElement) {
                    let u = G(i(l));
                    if (u) {
                        let c = s?.parentElement;
                        for (; c && ((c.f2w_reset || (c.f2w_reset = [])).push(u), c = c.parentElement, c?.tagName !== "BODY"););
                    }
                    return u
                }
            }
            return i(l)
        }
    }
}

function dt(action, bound, trigger) {
    var e, t;
    switch (action.type) {
        case "BACK":
            return () => {
                var r;
                return ((r = window.F2W_PREVIEW_BACK) != null ? r : history.back)()
            };
        case "JS":
            return () => eval(action.code);
        case "URL":
            return () => {
                action.openInNewTab ? window.open(action.url, "_blank") : window.F2W_PREVIEW_NAVIGATE ? window.F2W_PREVIEW_NAVIGATE(action.url) : location.assign(action.url)
            };
        case "SET_VARIABLE":
            let {
                variableId, variableValue
            } = action;
            if (variableId && variableValue?.value !== void 0) return () => Be(variableId, k(variableValue.value, variableId));
            break;
        case "SET_VARIABLE_MODE":
            let {
                variableCollectionName, variableModeName
            } = action;
            if (variableCollectionName && variableModeName) return () => lt(variableCollectionName, variableModeName);
            break;
        case "CONDITIONAL":
            let blocks = action.conditionalBlocks.map(r => {
                let n = ne(r.actions, bound, trigger),
                    {
                        condition: o
                    } = r;
                return {
                    test: o ? () => w(k(o.value)) : () => !0,
                    run: n
                }
            });
            return () => {
                let r = [];
                for (let n of blocks)
                    if (n.test()) {
                        let o = n.run();
                        o && r.push(o);
                        break
                    } if (r.length) return n => r.forEach(o => o(n))
            };
        case "KEY_CONDITION":
            let run = ne(action.actions, bound, trigger),
                keyCode = action.keyCodes[0],
                shiftKey = action.keyCodes.slice(1).includes(16),
                ctrlKey = action.keyCodes.slice(1).includes(17),
                altKey = action.keyCodes.slice(1).includes(18),
                metaKey = action.keyCodes.slice(1).includes(91);
            return r => {
                if (r instanceof KeyboardEvent) {
                    if (r.keyCode !== keyCode || r.ctrlKey !== ctrlKey || r.altKey !== altKey || r.metaKey !== metaKey || r.shiftKey !== shiftKey) return;
                    r.preventDefault(), r.stopPropagation(), run(r)
                }
            };
        case "CLOSE_OVERLAY": {
            if (action.self) return r => {
                var n, o;
                return (o = (n = r?.target) == null ? void 0 : n.f2w_close) == null ? void 0 : o.call(n)
            };
            if (action.overlayId) {
                let r = document.getElementById(action.overlayId);
                if (!r) break;
                return () => {
                    var n;
                    return (n = r.f2w_close) == null ? void 0 : n.call(r)
                }
            }
            break
        }
        case "SCROLL_TO":
            if (!action.destinationId) break;
            let elt = document.getElementById(action.destinationId);
            if (!elt) break;
            return r => {
                var n;
                r?.currentTarget instanceof HTMLAnchorElement && r?.preventDefault(), elt.scrollIntoView({
                    behavior: (n = action.transition) != null && n.type ? "smooth" : "instant"
                })
            };
        case "OVERLAY":
            if (!action.destinationId) break;
            let overlay = document.getElementById(action.destinationId);
            if (!overlay) break;
            let modal = Array(...overlay.children).find(r => r.tagName !== "TEMPLATE");
            if (!modal) break;
            let {
                transition, overlayPositionType, overlayRelativePosition
            } = action, duration = Math.round(1e3 * ((e = transition?.duration) != null ? e : 0)), animations = [{
                eltId: action.destinationId,
                props: [{
                    key: "visibility",
                    from: "hidden",
                    to: "visible"
                }, {
                    key: "opacity",
                    from: "0",
                    to: "1"
                }]
            }];
            return overlayPositionType === "MANUAL" ? () => {
                var r, n, o;
                if (trigger === "hover") {
                    let u = (r = bound.f2w_mouseleave_remove) == null ? void 0 : r.call(bound);
                    if (u) {
                        let c = m => {
                            Ve(m, bound) && Ve(m, modal) && (u(), document.removeEventListener("mousemove", c))
                        };
                        document.addEventListener("mousemove", c)
                    }
                }
                let i = animations.slice(0),
                    l = A(bound.getBoundingClientRect().left + ((n = overlayRelativePosition?.x) != null ? n : 0)),
                    s = A(bound.getBoundingClientRect().top + ((o = overlayRelativePosition?.y) != null ? o : 0));
                return modal.style.setProperty("left", l), modal.style.setProperty("top", s), transition?.type === "MOVE_IN" && (transition.direction === "LEFT" ? i.push({
                    eltId: modal.id,
                    props: [{
                        key: "left",
                        from: "100%",
                        to: l
                    }]
                }) : transition.direction === "RIGHT" ? i.push({
                    eltId: modal.id,
                    props: [{
                        key: "left",
                        from: "0px",
                        to: l
                    }, {
                        key: "translate",
                        from: "-100% 0px",
                        to: "0px 0px"
                    }]
                }) : transition.direction === "TOP" ? i.push({
                    eltId: modal.id,
                    props: [{
                        key: "top",
                        from: "100%",
                        to: s
                    }]
                }) : transition.direction === "BOTTOM" && i.push({
                    eltId: modal.id,
                    props: [{
                        key: "top",
                        from: "0px",
                        to: s
                    }, {
                        key: "translate",
                        from: "0px -100%",
                        to: "0px 0px"
                    }]
                })), te(i, transition?.easing, duration, bound, trigger, `${trigger}(manual_overlay)`, overlay)()
            } : (transition?.type === "MOVE_IN" ? animations.push(...fe(modal.id, overlayPositionType, transition)) : transition != null && transition.type && console.warn("Unsupported transition:", transition), te(animations, transition?.easing, duration, bound, trigger, `${trigger}(overlay)`, overlay));
        case "ANIMATE": {
            let {
                animations: r,
                transition: n,
                rootId: o,
                reset: i
            } = action, l = Math.round(1e3 * ((t = n?.duration) != null ? t : 0)), s = te(r, n?.easing, l, bound, trigger, i ? `${trigger}(+reset)` : trigger);
            return i && o ? (u, c) => {
                let m = document.getElementById(o);
                if (m) {
                    let {
                        f2w_reset: f
                    } = m;
                    f != null && f.length && (delete m.f2w_reset, f.reverse().forEach(h => h(void 0, !0)))
                }
                return s(u, c)
            } : s
        }
        case "UPDATE_MEDIA_RUNTIME": {
            if (!action.destinationId) break;
            let r = document.getElementById(action.destinationId);
            if (!r) break;
            switch (action.mediaAction) {
                case "MUTE":
                    return ye(r);
                case "UNMUTE":
                    return Ee(r);
                case "TOGGLE_MUTE_UNMUTE":
                    return ge(r);
                case "PLAY":
                    return he(r);
                case "PAUSE":
                    return xe(r);
                case "TOGGLE_PLAY_PAUSE":
                    return be(r);
                case "SKIP_BACKWARD":
                    return Ne(r, action.amountToSkip);
                case "SKIP_FORWARD":
                    return ve(r, action.amountToSkip);
                case "SKIP_TO":
                    return Te(r, action.newTimestamp)
            }
        }
        default:
            return () => console.warn("Action not implemented yet: " + action.type)
    }
    return () => {}
}
var Re = 9999;

function te(r, n = "linear", o, i, l, s, u) {
    return c => {
        let m = r;
        u && (document.body.parentElement.style.overflow = "hidden", m = [{
            eltId: u.id,
            props: [{
                key: "z-index",
                from: 0,
                to: Re++
            }]
        }, ...m]);
        let f = _(m, n, o, i, l, s, c),
            h = G((E, D) => {
                u && (Re--, document.body.parentElement.style.overflow = ""), _(f, n, D ? 0 : o, i, l, `${s}(revert)`)
            });
        return u && (u.f2w_close = h), h
    }
}
var Me = new Map;

function _(r, n, o, i, l, s, u) {
    var c, m, f;
    let h = [],
        E = new Set;
    if (l === "drag") return ct(r, n, o, i, u.detail), [];
    for (let {
            eltId: d,
            altId: T,
            props: N,
            reactions: y
        }
        of r) {
        let v = document.getElementById(d);
        if (!v) {
            let a = Me.get(d);
            a && (v = document.getElementById(a))
        }
        if (!v) {
            $(`Can't find element for id: ${d}`);
            continue
        }
        if (T) {
            let a = document.getElementById(T);
            if (!a) {
                let b = document.getElementById(z(T));
                if (!b) {
                    $(`Can't find template for id: ${T}`);
                    continue
                }
                a = ((c = b.content) == null ? void 0 : c.cloneNode(!0)).querySelector("*")
            }
            let {
                f2w_mouseup: g
            } = v, p = (m = v.f2w_mouseleave_remove) == null ? void 0 : m.call(v);
            if (p && $e(a, p), g && a.addEventListener("mouseup", g), (p || g) && Fe(a), De(a, !0, o), o) {
                let b = function(R, q) {
                    var oe;
                    if ((oe = R.f2w_styles_backup) != null && oe[q]) return R.f2w_styles_backup[q];
                    let je = getComputedStyle(R).getPropertyValue(q);
                    return (R.f2w_styles_backup || (R.f2w_styles_backup = {}))[q] = je, je
                };
                var D = b;
                v.insertAdjacentElement("afterend", a), U(v, [{
                    key: "display",
                    from: b(v, "display"),
                    to: "none"
                }], n, o, E), U(a, [{
                    key: "opacity",
                    from: 0,
                    to: b(a, "opacity")
                }, {
                    key: "display",
                    from: "none",
                    to: b(a, "display")
                }], n, o, E)
            } else {
                v.parentElement.replaceChild(a, v);
                let b = document.getElementById(z(d));
                b || (b = document.createElement("template"), b.id = z(d), b.innerHTML = v.outerHTML, a.insertAdjacentElement("afterend", b)), Me.set(d, a.id)
            }
            h.push({
                eltId: a.id,
                altId: v.id
            }), isNaN(+getComputedStyle(a).getPropertyValue("--f2w-order")) || E.add(a.parentElement)
        } else {
            let a = (N || []).map(p => {
                let b = Se(v, p.key, p.from),
                    R = Se(v, p.key, p.to);
                return {
                    key: p.key,
                    pseudo: p.pseudo,
                    from: b,
                    to: R
                }
            }).filter(p => p.from !== p.to);
            U(v, a, n, o, E), y && (l !== "hover" && ((f = v.f2w_mouseleave_remove) == null || f.call(v)), y.forEach(p => He(v, p.type, p.to, o)));
            let g = {
                eltId: d,
                props: a.map(p => {
                    let b = {
                        key: p.key,
                        from: p.to,
                        to: p.from
                    };
                    return p.pseudo && (b.pseudo = p.pseudo), b
                })
            };
            y && (g.reactions = y.map(p => ({
                type: p.type,
                from: p.to,
                to: p.from
            }))), h.push(g)
        }
    }
    for (let d of E) {
        let T = Array.from(d.children).map((y, v) => ({
                it: y,
                i: v
            })),
            N = !1;
        T.sort((y, v) => {
            let a = +(getComputedStyle(y.it).getPropertyValue("--f2w-order") || "99999"),
                g = +(getComputedStyle(v.it).getPropertyValue("--f2w-order") || "99999");
            return a - g
        }).forEach((y, v) => {
            N ? d.appendChild(y.it) : N = v !== y.i
        })
    }
    return h
}

function Fe(r) {
    let n = r;
    for (; n;) n.classList.remove("pointer-events-none"), n = n.parentElement
}

function ct(r, n, o, i, l) {
    if (l.handled) return;
    let s = i.getBoundingClientRect(),
        u = _(r.filter(d => d.props).map(({
            eltId: d,
            props: T
        }) => ({
            eltId: d,
            props: T
        })), "linear", 0, i, "click", "drag_start(tmp)"),
        c = i.getBoundingClientRect(),
        m = c.left - s.left,
        f = c.top - s.top,
        h = Math.sqrt(m * m + f * f);
    _(u, "linear", 0, i, "click", "drag_start(tmp undo)");
    let {
        x: E,
        y: D
    } = re(l.start, l.end);
    if (E > 0 && m > 0 || E < 0 && m < 0 || m === 0 && (D > 0 && f > 0 || D < 0 && f < 0)) {
        l.handled = !0;
        let d = r.map(y => {
                var v;
                return S(C({}, y), {
                    swapped: !1,
                    props: (v = y.props) == null ? void 0 : v.map(a => S(C({}, a), {
                        curr: a.from
                    }))
                })
            }),
            T = y => {
                let {
                    x: v,
                    y: a
                } = re(y.start, y.end), g = (v * m + a * f) / h;
                return Math.max(0, Math.min(100, 100 * g / h))
            },
            N = y => {
                y.end.preventDefault(), y.end.stopPropagation();
                let v = T(y);
                _(B(d.map(a => {
                    let g = a,
                        {
                            reactions: p
                        } = g,
                        b = le(g, ["reactions"]);
                    if (a.props) return S(C({}, b), {
                        props: a.props.map(R => {
                            let q = yt(R, v),
                                oe = R.curr;
                            return R.curr = q, S(C({}, R), {
                                from: oe,
                                to: q
                            })
                        })
                    });
                    if (a.altId) {
                        if (v < 50 && a.swapped) return a.swapped = !1, {
                            altId: a.eltId,
                            eltId: a.altId
                        };
                        if (v >= 50 && !a.swapped) return a.swapped = !0, b
                    }
                })), "linear", 0, i, "click", "dragging")
            };
        N(l), i.f2w_drag_listener = y => {
            if (N(y), y.finished) {
                let v = T(y);
                _(B(d.map(a => {
                    if (a.props) {
                        let g = v < 50 ? void 0 : a.reactions;
                        return {
                            eltId: a.eltId,
                            props: a.props.map(p => S(C({}, p), {
                                from: p.curr,
                                to: v < 50 ? p.from : p.to
                            })),
                            reactions: g
                        }
                    }
                    if (a.altId) {
                        if (v < 50 && a.swapped) return a.swapped = !1, {
                            altId: a.eltId,
                            eltId: a.altId
                        };
                        if (v >= 50 && !a.swapped) return a.swapped = !0, a
                    }
                })), n, o, i, "click", "drag_end")
            }
        }
    }
}

function Se(r, n, o) {
    return o !== "$current" ? o : getComputedStyle(r).getPropertyValue(n)
}

function De(r, n = !1, o = 0) {
    for (let i of pe)
        for (let l of pt(r, `[data-reaction-${i}]`, n)) He(l, i, l.getAttribute(`data-reaction-${i}`), o)
}

function pt(r, n, o = !1) {
    let i = [...r.querySelectorAll(n)];
    return o && r.matches(n) && i.unshift(r), i
}

function He(r, n, o = "", i = 0) {
    var l;
    if (!o && n !== "hover") {
        mt(r, n);
        return
    }
    let s = 0;
    if (o[0] === "T") {
        let f = o.indexOf("ms");
        s = parseFloat(o.slice(1, f)) || 0, o = o.slice(f + 3)
    }
    let u = _e(),
        c = B(o.split(",").map(f => u[f])),
        m = ne(c, r, n);
    if (n === "timeout") {
        ft(r, () => m(), s + i);
        return
    }
    if (Fe(r), n === "press") {
        let f, h = () => {
            f?.(), f = void 0
        };
        r.f2w_mouseup = h, Y(r, "mousedown", E => {
            f?.(), f = m(E)
        }, n, L(r, "mouseup", h))
    } else if (n === "drag") Y(r, "dragging", f => {
        m(f)
    }, n);
    else if (n === "hover") {
        let f, h = N => {
                f || (f = G(m(N)))
            },
            E = (l = r.f2w_mouseleave_remove) == null ? void 0 : l.call(r),
            D = () => {
                f?.(), f = void 0, E?.()
            },
            d = setTimeout(() => {
                r.matches(":hover") && h()
            }, i),
            T = $e(r, D, d);
        Y(r, "mouseenter", h, n, T)
    } else n === "keydown" && !r.getAttribute("tabindex") && r.setAttribute("tabindex", "-1"), n === "appear" && Et.observe(r), Y(r, n, f => {
        n !== "keydown" && f.stopPropagation(), s ? setTimeout(() => m(f), s) : m(f)
    }, n)
}

function $e(r, n, o = 0) {
    let i = L(r, "mouseleave", n),
        l = () => (i(), clearTimeout(o), r.f2w_mouseleave === n && delete r.f2w_mouseleave, r.f2w_mouseleave_remove === l && delete r.f2w_mouseleave_remove, n);
    return r.f2w_mouseleave = n, r.f2w_mouseleave_remove = l
}

function Ve({
    clientX: r,
    clientY: n
}, o) {
    let {
        top: i,
        left: l,
        right: s,
        bottom: u
    } = o.getBoundingClientRect();
    return r > s + 2 || r < l - 2 || n > u + 2 || n < i - 2
}

function We(r) {
    return `f2w_cleanup_${r}`
}

function ft(r, n, o) {
    var i;
    let l = setTimeout(n, o);
    (i = r.f2w_cleanup_timeout) == null || i.call(r), r.f2w_cleanup_timeout = () => {
        delete r.f2w_cleanup_timeout, clearTimeout(l)
    }
}

function mt(r, n) {
    var o;
    let i = We(n);
    (o = r[i]) == null || o.call(r)
}

function Y(r, n, o, i, ...l) {
    var s;
    let u = [...l, L(r, n, o)],
        c = We(i);
    (s = r[c]) == null || s.call(r), r[c] = () => {
        delete r[c], u.forEach(m => m())
    }
}

function L(r, n, o, i) {
    let l = s => {
        !r.isConnected || o(s)
    };
    return r.addEventListener(n, l, i), () => {
        r.removeEventListener(n, l, i)
    }
}
var ze = "f2w-color-scheme",
    Ge = "f2w-lang";
if (window.F2W_THEME_SWITCH = r => {
        var n;
        return (n = window.F2W_COLOR_SCHEMES) == null ? void 0 : n.forEach(o => X(o, r))
    }, window.F2W_COLOR_SCHEMES) {
    let r = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
        n = localStorage == null ? void 0 : localStorage.getItem(ze);
    O("body", () => {
        var o, i;
        let l = document.body.getAttribute("data-preview-theme"),
            s = (o = l ?? n) != null ? o : r;
        (i = window.F2W_THEME_SWITCH) == null || i.call(window, s)
    })
}
if (window.F2W_LANGUAGES) {
    let r = localStorage == null ? void 0 : localStorage.getItem(Ge);
    O("body", () => {
        var n;
        (n = window.F2W_LANGUAGES) == null || n.forEach(o => {
            var i;
            let l = Object.fromEntries(Object.entries(ke(o)).map(([u]) => [u.toLowerCase(), u])),
                s = [...navigator.languages];
            r && s.unshift(r);
            for (let u of s) {
                u = u.toLowerCase();
                let c = u.split("-")[0],
                    m = (i = l[u]) != null ? i : l[c];
                if (m) {
                    X(o, m);
                    break
                }
            }
        })
    })
}
var Ie = {},
    gt = Object.fromEntries(Object.entries(st()).map(([r, n]) => [r, Object.entries(n).map(([o, {
        minWidth: i
    }]) => ({
        name: o,
        minWidth: i
    }))]));

function Le() {
    var r;
    let n = ((r = window.visualViewport) == null ? void 0 : r.width) || window.innerWidth;
    for (let [o, i] of Object.entries(gt)) {
        let l = [...i],
            s = l.splice(0, 1)[0].name;
        for (let {
                name: u,
                minWidth: c
            }
            of l) n >= c && (s = u);
        s !== Ie[o] && (X(o, s), Ie[o] = s)
    }
}
var I = !1;
O("body", () => {
    let r, n = !1;
    L(document, "mousedown", o => {
        r = o, I = !1
    }), L(document, "mousemove", o => {
        var i, l, s;
        if (r && re(r, o).dist > 2) {
            let u = {
                start: r,
                end: o
            };
            I ? (s = (l = r.target) == null ? void 0 : l.f2w_drag_listener) == null || s.call(l, u) : ((i = r.target) == null || i.dispatchEvent(new CustomEvent("dragging", {
                detail: u
            })), I = !0, n = !0)
        }
    }), L(document, "mouseup", o => {
        var i, l;
        r && I && ((l = (i = r.target) == null ? void 0 : i.f2w_drag_listener) == null || l.call(i, {
            start: r,
            end: o,
            finished: !0
        })), r = void 0, I = !1
    }), L(document, "mouseup", o => {
        var i, l;
        r && I && ((l = (i = r.target) == null ? void 0 : i.f2w_drag_listener) == null || l.call(i, {
            start: r,
            end: o,
            finished: !0
        })), r = void 0, I = !1
    }), L(document, "click", o => {
        n && (n = !1, o.preventDefault(), o.stopPropagation())
    }, {
        capture: !0
    }), Le(), window.addEventListener("resize", Le)
}), addEventListener("DOMContentLoaded", () => De(document)), addEventListener("DOMContentLoaded", () => {
    if ("mediumZoom" in window) {
        let r = mediumZoom("[data-zoomable]");
        r.on("open", n => {
            let o = getComputedStyle(n.target).objectFit,
                i = n.detail.zoom.getZoomedImage();
            o && i && (i.style.objectFit = o)
        }), r.on("closed", n => {
            let o = n.detail.zoom.getZoomedImage();
            o.style.objectFit = ""
        })
    }
});

function Pe(r) {
    return r.endsWith("px") || r.endsWith("%") || r.startsWith("calc")
}

function Oe(r) {
    return r.startsWith("calc") ? r.slice(4) : r
}

function yt({
    from: r,
    to: n
}, o) {
    if (r === n) return n;
    if (typeof r == "number" && typeof n == "number") return r + (n - r) * (o / 100);
    if (typeof r == "string" && typeof n == "string") {
        if (r === "none" || n === "none" || r === "auto" || n === "auto") return o < 50 ? r : n;
        if (r.endsWith("px") && n.endsWith("px")) {
            let i = parseFloat(r),
                l = parseFloat(n);
            return A(i + (l - i) * (o / 100))
        }
        if (r.endsWith("%") && n.endsWith("%")) {
            let i = parseFloat(r),
                l = parseFloat(n);
            return Q(i + (l - i) * (o / 100))
        }
        if (Pe(r) && Pe(n)) {
            let i = Oe(r),
                l = Oe(n);
            return `calc(${i} + (${l} - ${i}) * ${o/100})`
        }
        if (r.startsWith("rgb") && n.startsWith("rgb")) {
            let i = r.match(/\d+/g).map(Number),
                l = n.match(/\d+/g).map(Number);
            return `rgb(${i.map((s,u)=>s+(l[u]-s)*(o/100)).join(",")})`
        }
    }
    return o < 50 ? r : n
}

function re(r, n) {
    let o = n.clientX - r.clientX,
        i = n.clientY - r.clientY;
    return {
        x: o,
        y: i,
        dist: Math.sqrt(Math.pow(o, 2) + Math.pow(i, 2))
    }
}
O("[data-bound-characters]", r => {
    let n = () => {
        let o = r.getAttribute("data-bound-characters"),
            i = P(k(j()[o]));
        i !== r.textContent && (r.textContent = i)
    };
    return n(), document.addEventListener("f2w-set-variable", n), () => document.removeEventListener("f2w-set-variable", n)
}), O("[data-bound-visible]", r => {
    let n = () => {
        let o = r.getAttribute("data-bound-visible"),
            i = P(k(j()[o]));
        i !== void 0 && r.setAttribute("data-visible", i)
    };
    return n(), document.addEventListener("f2w-set-variable", n), () => document.removeEventListener("f2w-set-variable", n)
});
var Et = new IntersectionObserver((r, n) => {
    r.forEach(o => {
        o.isIntersecting && (n.unobserve(o.target), o.target.dispatchEvent(new CustomEvent("appear")))
    })
}, {
    threshold: .1
});
addEventListener("load", () => {
    let r = window.location.hash.slice(1),
        n = new RegExp(r + "(_\\d+)?$");
    for (let o of document.querySelectorAll(`[id^="${r}"]`))
        if (n.test(o.id) && o.getBoundingClientRect().height > 0) return o.scrollIntoView()
});



    //MODIFICADO PARA LAS REDIRECCIONES//

// Animación del texto al hacer scroll (tu código existente)
document.addEventListener('scroll', function () {
    const container = document.getElementById('container');
    const containerPosition = container.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (containerPosition < screenPosition) {
        container.classList.add('animate-on-scroll');
    }
});



// Redirección de botones (nuevo código)
document.addEventListener("DOMContentLoaded", function () {
    // Función para redirigir
    function redirectTo(url) {
        window.location.href = url;
    }

    // Asignar redirecciones a los botones
    const buttons = {
        "Text_input_21": "index.html",       // Botón de Inicio
        "Text_input_22": "Servicios.html",  // Botón de Servicios
        "Text_input_24": "nosotros.html",   // Botón de Nosotros
        "Button_0": "citas.html"            // Botón de Contacto
    };

    for (const [buttonId, url] of Object.entries(buttons)) {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener("click", function () {
                redirectTo(url);
            });
        }
    }
});

////////////////////////////////