window.F2W_REACTIONS = (() => {
    const t = [
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
            to: "5px 0px 5px 4px"
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
            key: "display",
            from: "none",
            to: "revert"
        }, {
            key: "opacity",
            from: "0",
            to: "revert"
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
            to: "inline"
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
            from: "5px 0px 5px 4px",
            to: "0px"
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
            from: "flex",
            to: "none"
        }, {
            key: "opacity",
            from: "revert",
            to: "0"
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
            key: "display",
            from: "block",
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
            key: "min-width",
            from: "revert",
            to: "390px"
        }, {
            key: "max-width",
            from: "revert",
            to: "720px"
        }],
        [{
            key: "min-width",
            from: "390px",
            to: "revert"
        }, {
            key: "max-width",
            from: "720px",
            to: "revert"
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
        }]
    ];
    return {
        1: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,1",
                    to: "T800ms,2"
                }],
                eltId: "_1"
            }, {
                eltId: "Switch_0",
                altId: "Switch_2"
            }],
            rootId: "_1"
        },
        2: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,2",
                    to: "T800ms,3"
                }],
                eltId: "_1"
            }, {
                eltId: "Switch_2",
                altId: "Switch_4"
            }],
            rootId: "_1"
        },
        3: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,3",
                    to: "T800ms,4"
                }],
                eltId: "_1"
            }, {
                eltId: "Switch_4",
                altId: "Switch_6"
            }],
            rootId: "_1"
        },
        4: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,4",
                    to: "T800ms,1"
                }],
                eltId: "_1"
            }, {
                eltId: "Switch_6",
                altId: "Switch_0"
            }],
            rootId: "_1"
        },
        13: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[0],
                reactions: [{
                    type: "hover",
                    from: "13"
                }, {
                    type: "click",
                    to: "14"
                }],
                eltId: "WhatsApp"
            }, {
                props: t[0],
                eltId: "Vertical_container"
            }],
            rootId: "WhatsApp"
        },
        14: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[1],
                reactions: [{
                    type: "click",
                    from: "14",
                    to: "15"
                }],
                eltId: "WhatsApp"
            }, {
                props: t[2],
                eltId: "Vertical_container"
            }, {
                props: t[3],
                eltId: "Group_1"
            }, {
                props: t[3],
                eltId: "Frame_4"
            }, {
                props: t[4],
                eltId: "Frame_6"
            }, {
                props: t[3],
                eltId: "Ellipse_1"
            }, {
                props: t[3],
                eltId: "Group_2"
            }, {
                props: t[5],
                eltId: "I1364_574_1125_464"
            }, {
                props: t[5],
                eltId: "I1364_574_1125_465"
            }, {
                props: t[3],
                eltId: "Frame_7"
            }, {
                props: t[5],
                eltId: "I1364_574_1125_475"
            }, {
                props: t[3],
                eltId: "https_lottiefiles_com_animations_doctor_consultation_E1yd0wb6cx"
            }, {
                props: t[3],
                eltId: "Frame_5"
            }, {
                props: t[5],
                eltId: "I1364_574_1125_460"
            }, {
                props: t[5],
                eltId: "I1364_574_1125_461"
            }, {
                props: t[3],
                eltId: "mi_circle_error"
            }, {
                props: t[6],
                eltId: "Vector_22"
            }],
            rootId: "WhatsApp"
        },
        15: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[7],
                reactions: [{
                    type: "click",
                    from: "15"
                }, {
                    type: "hover",
                    to: "13"
                }],
                eltId: "WhatsApp"
            }, {
                props: t[3],
                eltId: "Vertical_container"
            }, {
                props: t[8],
                eltId: "Group_1"
            }, {
                props: t[8],
                eltId: "Frame_4"
            }, {
                props: t[9],
                eltId: "Frame_6"
            }, {
                props: t[8],
                eltId: "Ellipse_1"
            }, {
                props: t[8],
                eltId: "Group_2"
            }, {
                props: t[10],
                eltId: "I1364_574_1125_464"
            }, {
                props: t[10],
                eltId: "I1364_574_1125_465"
            }, {
                props: t[8],
                eltId: "Frame_7"
            }, {
                props: t[10],
                eltId: "I1364_574_1125_475"
            }, {
                props: t[8],
                eltId: "https_lottiefiles_com_animations_doctor_consultation_E1yd0wb6cx"
            }, {
                props: t[8],
                eltId: "Frame_5"
            }, {
                props: t[10],
                eltId: "I1364_574_1125_460"
            }, {
                props: t[10],
                eltId: "I1364_574_1125_461"
            }, {
                props: t[8],
                eltId: "mi_circle_error"
            }, {
                props: t[11],
                eltId: "Vector_22"
            }],
            rootId: "WhatsApp"
        },
        52: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[12],
                reactions: [{
                    type: "hover",
                    from: "52"
                }],
                eltId: "Agendar"
            }, {
                props: t[13],
                eltId: "I1122_454_1122_438"
            }, {
                props: t[13],
                eltId: "__37"
            }],
            rootId: "Agendar"
        },
        63: {
            type: "ANIMATE",
            animations: [{
                props: t[14],
                eltId: "tres_barras"
            }, {
                props: t[11],
                eltId: "Vector_24"
            }, {
                props: t[9],
                eltId: "Frame_12"
            }, {
                props: t[8],
                eltId: "Image_2"
            }, {
                props: t[3],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_26",
                altId: "Vector_28"
            }, {
                props: t[4],
                eltId: "Frame_13"
            }, {
                props: t[4],
                eltId: "Frame_8"
            }, {
                props: t[3],
                eltId: "ph_house_fill"
            }, {
                props: t[6],
                eltId: "Vector_36"
            }, {
                props: t[5],
                eltId: "I1268_1011_1263_760"
            }, {
                props: t[3],
                eltId: "Text_input_1"
            }, {
                props: t[5],
                eltId: "I1268_1011_1263_763"
            }, {
                props: t[5],
                eltId: "I1268_1011_1263_764"
            }, {
                props: t[5],
                eltId: "I1268_1011_1263_765"
            }],
            rootId: "tres_barras"
        },
        64: {
            type: "ALIAS",
            alias: "63"
        },
        71: {
            type: "ANIMATE",
            animations: [{
                props: t[15],
                eltId: "tres_barras"
            }, {
                props: t[6],
                eltId: "Vector_24"
            }, {
                props: t[4],
                eltId: "Frame_12"
            }, {
                props: t[3],
                eltId: "Image_2"
            }, {
                props: t[8],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_28",
                altId: "Vector_26"
            }, {
                props: t[9],
                eltId: "Frame_13"
            }, {
                props: t[9],
                eltId: "Frame_8"
            }, {
                props: t[8],
                eltId: "ph_house_fill"
            }, {
                props: t[11],
                eltId: "Vector_36"
            }, {
                props: t[10],
                eltId: "I1268_1011_1263_760"
            }, {
                props: t[8],
                eltId: "Text_input_1"
            }, {
                props: t[10],
                eltId: "I1268_1011_1263_763"
            }, {
                props: t[10],
                eltId: "I1268_1011_1263_764"
            }, {
                props: t[10],
                eltId: "I1268_1011_1263_765"
            }],
            rootId: "tres_barras"
        },
        72: {
            type: "ANIMATE",
            animations: [{
                props: t[16],
                eltId: "tres_barras"
            }, {
                props: t[6],
                eltId: "Vector_24"
            }, {
                props: t[4],
                eltId: "Frame_12"
            }, {
                props: t[3],
                eltId: "Image_2"
            }, {
                props: t[8],
                reactions: [{
                    type: "click",
                    from: "72",
                    to: "71"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_30",
                altId: "Vector_26"
            }, {
                props: t[10],
                reactions: [{
                    type: "click",
                    from: "105",
                    to: "104"
                }],
                eltId: "I1268_1011_1263_764"
            }, {
                props: t[10],
                reactions: [{
                    type: "click",
                    from: "112",
                    to: "111"
                }],
                eltId: "I1268_1011_1263_765"
            }, {
                props: t[10],
                eltId: "I1268_1011_1263_806"
            }, {
                props: t[9],
                eltId: "Frame_10"
            }, {
                props: t[8],
                eltId: "healthicons_doctor_24px"
            }, {
                props: t[11],
                eltId: "Vector_38"
            }, {
                props: t[10],
                eltId: "I1268_1011_1263_807"
            }, {
                eltId: "Text_input_4",
                altId: "Text_input_2"
            }],
            rootId: "tres_barras"
        },
        73: {
            type: "ANIMATE",
            animations: [{
                props: t[16],
                eltId: "tres_barras"
            }, {
                props: t[6],
                eltId: "Vector_24"
            }, {
                props: t[4],
                eltId: "Frame_12"
            }, {
                props: t[3],
                eltId: "Image_2"
            }, {
                props: t[8],
                reactions: [{
                    type: "click",
                    from: "73",
                    to: "71"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_32",
                altId: "Vector_26"
            }, {
                props: t[10],
                reactions: [{
                    type: "click",
                    from: "98",
                    to: "97"
                }],
                eltId: "I1268_1011_1263_763"
            }, {
                props: t[10],
                reactions: [{
                    type: "click",
                    from: "113",
                    to: "111"
                }],
                eltId: "I1268_1011_1263_765"
            }, {
                props: t[10],
                reactions: [{
                    type: "click",
                    from: "119",
                    to: "118"
                }],
                eltId: "I1268_1011_1263_806"
            }, {
                eltId: "Text_input_6",
                altId: "Text_input_2"
            }, {
                props: t[9],
                eltId: "Frame_9"
            }, {
                props: t[8],
                eltId: "lsicon_user_crowd_filled"
            }, {
                props: t[11],
                eltId: "Vector_40"
            }, {
                props: t[10],
                eltId: "I1268_1011_1263_817"
            }],
            rootId: "tres_barras"
        },
        74: {
            type: "ANIMATE",
            animations: [{
                props: t[16],
                eltId: "tres_barras"
            }, {
                props: t[6],
                eltId: "Vector_24"
            }, {
                props: t[4],
                eltId: "Frame_12"
            }, {
                props: t[3],
                eltId: "Image_2"
            }, {
                props: t[8],
                reactions: [{
                    type: "click",
                    from: "74",
                    to: "71"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_34",
                altId: "Vector_26"
            }, {
                props: t[10],
                reactions: [{
                    type: "click",
                    from: "99",
                    to: "97"
                }],
                eltId: "I1268_1011_1263_763"
            }, {
                props: t[10],
                reactions: [{
                    type: "click",
                    from: "106",
                    to: "104"
                }],
                eltId: "I1268_1011_1263_764"
            }, {
                props: t[10],
                reactions: [{
                    type: "click",
                    from: "120",
                    to: "118"
                }],
                eltId: "I1268_1011_1263_806"
            }, {
                eltId: "Text_input_7",
                altId: "Text_input_2"
            }, {
                props: t[9],
                eltId: "Frame_11"
            }, {
                props: t[8],
                eltId: "fluent_call_16_filled"
            }, {
                props: t[11],
                eltId: "Vector_42"
            }, {
                props: t[10],
                eltId: "I1268_1011_1263_827"
            }],
            rootId: "tres_barras"
        },
        97: {
            type: "ANIMATE",
            animations: [{
                props: t[17],
                eltId: "tres_barras"
            }, {
                reactions: [{
                    type: "click",
                    from: "71",
                    to: "72"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_28",
                altId: "Vector_30"
            }, {
                props: t[9],
                eltId: "Frame_13"
            }, {
                props: t[9],
                eltId: "Frame_8"
            }, {
                props: t[8],
                eltId: "ph_house_fill"
            }, {
                props: t[11],
                eltId: "Vector_36"
            }, {
                props: t[10],
                eltId: "I1268_1011_1263_760"
            }, {
                props: t[8],
                eltId: "Text_input_1"
            }, {
                props: t[10],
                eltId: "I1268_1011_1263_763"
            }, {
                reactions: [{
                    type: "click",
                    from: "104",
                    to: "105"
                }],
                eltId: "I1268_1011_1263_764"
            }, {
                reactions: [{
                    type: "click",
                    from: "111",
                    to: "112"
                }],
                eltId: "I1268_1011_1263_765"
            }, {
                props: t[5],
                eltId: "I1268_1011_1263_806"
            }, {
                props: t[4],
                eltId: "Frame_10"
            }, {
                props: t[3],
                eltId: "healthicons_doctor_24px"
            }, {
                props: t[6],
                eltId: "Vector_38"
            }, {
                props: t[5],
                eltId: "I1268_1011_1263_807"
            }, {
                eltId: "Text_input_2",
                altId: "Text_input_4"
            }],
            rootId: "tres_barras"
        },
        98: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "73",
                    to: "72"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_32",
                altId: "Vector_30"
            }, {
                props: t[10],
                reactions: [{
                    type: "click",
                    from: "98",
                    to: "97"
                }],
                eltId: "I1268_1011_1263_763"
            }, {
                props: t[5],
                reactions: [{
                    type: "click",
                    from: "104",
                    to: "105"
                }],
                eltId: "I1268_1011_1263_764"
            }, {
                reactions: [{
                    type: "click",
                    from: "113",
                    to: "112"
                }],
                eltId: "I1268_1011_1263_765"
            }, {
                reactions: [{
                    type: "click",
                    from: "119",
                    to: "118"
                }],
                eltId: "I1268_1011_1263_806"
            }, {
                props: t[4],
                eltId: "Frame_10"
            }, {
                props: t[3],
                eltId: "healthicons_doctor_24px"
            }, {
                props: t[6],
                eltId: "Vector_38"
            }, {
                props: t[5],
                eltId: "I1268_1011_1263_807"
            }, {
                eltId: "Text_input_6",
                altId: "Text_input_4"
            }, {
                props: t[9],
                eltId: "Frame_9"
            }, {
                props: t[8],
                eltId: "lsicon_user_crowd_filled"
            }, {
                props: t[11],
                eltId: "Vector_40"
            }, {
                props: t[10],
                eltId: "I1268_1011_1263_817"
            }],
            rootId: "tres_barras"
        },
        99: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "74",
                    to: "72"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_34",
                altId: "Vector_30"
            }, {
                props: t[10],
                reactions: [{
                    type: "click",
                    from: "99",
                    to: "97"
                }],
                eltId: "I1268_1011_1263_763"
            }, {
                reactions: [{
                    type: "click",
                    from: "106",
                    to: "105"
                }],
                eltId: "I1268_1011_1263_764"
            }, {
                props: t[5],
                reactions: [{
                    type: "click",
                    from: "111",
                    to: "112"
                }],
                eltId: "I1268_1011_1263_765"
            }, {
                reactions: [{
                    type: "click",
                    from: "120",
                    to: "118"
                }],
                eltId: "I1268_1011_1263_806"
            }, {
                props: t[4],
                eltId: "Frame_10"
            }, {
                props: t[3],
                eltId: "healthicons_doctor_24px"
            }, {
                props: t[6],
                eltId: "Vector_38"
            }, {
                props: t[5],
                eltId: "I1268_1011_1263_807"
            }, {
                eltId: "Text_input_7",
                altId: "Text_input_4"
            }, {
                props: t[9],
                eltId: "Frame_11"
            }, {
                props: t[8],
                eltId: "fluent_call_16_filled"
            }, {
                props: t[11],
                eltId: "Vector_42"
            }, {
                props: t[10],
                eltId: "I1268_1011_1263_827"
            }],
            rootId: "tres_barras"
        },
        104: {
            type: "ANIMATE",
            animations: [{
                props: t[17],
                eltId: "tres_barras"
            }, {
                reactions: [{
                    type: "click",
                    from: "71",
                    to: "73"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_28",
                altId: "Vector_32"
            }, {
                props: t[9],
                eltId: "Frame_13"
            }, {
                props: t[9],
                eltId: "Frame_8"
            }, {
                props: t[8],
                eltId: "ph_house_fill"
            }, {
                props: t[11],
                eltId: "Vector_36"
            }, {
                props: t[10],
                eltId: "I1268_1011_1263_760"
            }, {
                props: t[8],
                eltId: "Text_input_1"
            }, {
                reactions: [{
                    type: "click",
                    from: "97",
                    to: "98"
                }],
                eltId: "I1268_1011_1263_763"
            }, {
                props: t[10],
                eltId: "I1268_1011_1263_764"
            }, {
                reactions: [{
                    type: "click",
                    from: "111",
                    to: "113"
                }],
                eltId: "I1268_1011_1263_765"
            }, {
                props: t[5],
                reactions: [{
                    type: "click",
                    from: "118",
                    to: "119"
                }],
                eltId: "I1268_1011_1263_806"
            }, {
                eltId: "Text_input_2",
                altId: "Text_input_6"
            }, {
                props: t[4],
                eltId: "Frame_9"
            }, {
                props: t[3],
                eltId: "lsicon_user_crowd_filled"
            }, {
                props: t[6],
                eltId: "Vector_40"
            }, {
                props: t[5],
                eltId: "I1268_1011_1263_817"
            }],
            rootId: "tres_barras"
        },
        105: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "72",
                    to: "73"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_30",
                altId: "Vector_32"
            }, {
                props: t[5],
                reactions: [{
                    type: "click",
                    from: "97",
                    to: "98"
                }],
                eltId: "I1268_1011_1263_763"
            }, {
                props: t[10],
                reactions: [{
                    type: "click",
                    from: "105",
                    to: "104"
                }],
                eltId: "I1268_1011_1263_764"
            }, {
                reactions: [{
                    type: "click",
                    from: "112",
                    to: "113"
                }],
                eltId: "I1268_1011_1263_765"
            }, {
                reactions: [{
                    type: "click",
                    from: "118",
                    to: "119"
                }],
                eltId: "I1268_1011_1263_806"
            }, {
                props: t[9],
                eltId: "Frame_10"
            }, {
                props: t[8],
                eltId: "healthicons_doctor_24px"
            }, {
                props: t[11],
                eltId: "Vector_38"
            }, {
                props: t[10],
                eltId: "I1268_1011_1263_807"
            }, {
                eltId: "Text_input_4",
                altId: "Text_input_6"
            }, {
                props: t[4],
                eltId: "Frame_9"
            }, {
                props: t[3],
                eltId: "lsicon_user_crowd_filled"
            }, {
                props: t[6],
                eltId: "Vector_40"
            }, {
                props: t[5],
                eltId: "I1268_1011_1263_817"
            }],
            rootId: "tres_barras"
        },
        106: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "74",
                    to: "73"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_34",
                altId: "Vector_32"
            }, {
                reactions: [{
                    type: "click",
                    from: "99",
                    to: "98"
                }],
                eltId: "I1268_1011_1263_763"
            }, {
                props: t[10],
                reactions: [{
                    type: "click",
                    from: "106",
                    to: "104"
                }],
                eltId: "I1268_1011_1263_764"
            }, {
                props: t[5],
                reactions: [{
                    type: "click",
                    from: "111",
                    to: "113"
                }],
                eltId: "I1268_1011_1263_765"
            }, {
                reactions: [{
                    type: "click",
                    from: "120",
                    to: "119"
                }],
                eltId: "I1268_1011_1263_806"
            }, {
                eltId: "Text_input_7",
                altId: "Text_input_6"
            }, {
                props: t[4],
                eltId: "Frame_9"
            }, {
                props: t[3],
                eltId: "lsicon_user_crowd_filled"
            }, {
                props: t[6],
                eltId: "Vector_40"
            }, {
                props: t[5],
                eltId: "I1268_1011_1263_817"
            }, {
                props: t[9],
                eltId: "Frame_11"
            }, {
                props: t[8],
                eltId: "fluent_call_16_filled"
            }, {
                props: t[11],
                eltId: "Vector_42"
            }, {
                props: t[10],
                eltId: "I1268_1011_1263_827"
            }],
            rootId: "tres_barras"
        },
        111: {
            type: "ANIMATE",
            animations: [{
                props: t[17],
                eltId: "tres_barras"
            }, {
                reactions: [{
                    type: "click",
                    from: "71",
                    to: "74"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_28",
                altId: "Vector_34"
            }, {
                props: t[9],
                eltId: "Frame_13"
            }, {
                props: t[9],
                eltId: "Frame_8"
            }, {
                props: t[8],
                eltId: "ph_house_fill"
            }, {
                props: t[11],
                eltId: "Vector_36"
            }, {
                props: t[10],
                eltId: "I1268_1011_1263_760"
            }, {
                props: t[8],
                eltId: "Text_input_1"
            }, {
                reactions: [{
                    type: "click",
                    from: "97",
                    to: "99"
                }],
                eltId: "I1268_1011_1263_763"
            }, {
                reactions: [{
                    type: "click",
                    from: "104",
                    to: "106"
                }],
                eltId: "I1268_1011_1263_764"
            }, {
                props: t[10],
                eltId: "I1268_1011_1263_765"
            }, {
                props: t[5],
                reactions: [{
                    type: "click",
                    from: "118",
                    to: "120"
                }],
                eltId: "I1268_1011_1263_806"
            }, {
                eltId: "Text_input_2",
                altId: "Text_input_7"
            }, {
                props: t[4],
                eltId: "Frame_11"
            }, {
                props: t[3],
                eltId: "fluent_call_16_filled"
            }, {
                props: t[6],
                eltId: "Vector_42"
            }, {
                props: t[5],
                eltId: "I1268_1011_1263_827"
            }],
            rootId: "tres_barras"
        },
        112: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "72",
                    to: "74"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_30",
                altId: "Vector_34"
            }, {
                props: t[5],
                reactions: [{
                    type: "click",
                    from: "97",
                    to: "99"
                }],
                eltId: "I1268_1011_1263_763"
            }, {
                reactions: [{
                    type: "click",
                    from: "105",
                    to: "106"
                }],
                eltId: "I1268_1011_1263_764"
            }, {
                props: t[10],
                reactions: [{
                    type: "click",
                    from: "112",
                    to: "111"
                }],
                eltId: "I1268_1011_1263_765"
            }, {
                reactions: [{
                    type: "click",
                    from: "118",
                    to: "120"
                }],
                eltId: "I1268_1011_1263_806"
            }, {
                props: t[9],
                eltId: "Frame_10"
            }, {
                props: t[8],
                eltId: "healthicons_doctor_24px"
            }, {
                props: t[11],
                eltId: "Vector_38"
            }, {
                props: t[10],
                eltId: "I1268_1011_1263_807"
            }, {
                eltId: "Text_input_4",
                altId: "Text_input_7"
            }, {
                props: t[4],
                eltId: "Frame_11"
            }, {
                props: t[3],
                eltId: "fluent_call_16_filled"
            }, {
                props: t[6],
                eltId: "Vector_42"
            }, {
                props: t[5],
                eltId: "I1268_1011_1263_827"
            }],
            rootId: "tres_barras"
        },
        113: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "73",
                    to: "74"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_32",
                altId: "Vector_34"
            }, {
                reactions: [{
                    type: "click",
                    from: "98",
                    to: "99"
                }],
                eltId: "I1268_1011_1263_763"
            }, {
                props: t[5],
                reactions: [{
                    type: "click",
                    from: "104",
                    to: "106"
                }],
                eltId: "I1268_1011_1263_764"
            }, {
                props: t[10],
                reactions: [{
                    type: "click",
                    from: "113",
                    to: "111"
                }],
                eltId: "I1268_1011_1263_765"
            }, {
                reactions: [{
                    type: "click",
                    from: "119",
                    to: "120"
                }],
                eltId: "I1268_1011_1263_806"
            }, {
                eltId: "Text_input_6",
                altId: "Text_input_7"
            }, {
                props: t[9],
                eltId: "Frame_9"
            }, {
                props: t[8],
                eltId: "lsicon_user_crowd_filled"
            }, {
                props: t[11],
                eltId: "Vector_40"
            }, {
                props: t[10],
                eltId: "I1268_1011_1263_817"
            }, {
                props: t[4],
                eltId: "Frame_11"
            }, {
                props: t[3],
                eltId: "fluent_call_16_filled"
            }, {
                props: t[6],
                eltId: "Vector_42"
            }, {
                props: t[5],
                eltId: "I1268_1011_1263_827"
            }],
            rootId: "tres_barras"
        },
        118: {
            type: "ANIMATE",
            animations: [{
                props: t[18],
                eltId: "tres_barras"
            }, {
                reactions: [{
                    type: "click",
                    from: "72",
                    to: "71"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_30",
                altId: "Vector_28"
            }, {
                props: t[4],
                eltId: "Frame_13"
            }, {
                props: t[4],
                eltId: "Frame_8"
            }, {
                props: t[3],
                eltId: "ph_house_fill"
            }, {
                props: t[6],
                eltId: "Vector_36"
            }, {
                props: t[5],
                eltId: "I1268_1011_1263_760"
            }, {
                props: t[3],
                eltId: "Text_input_1"
            }, {
                props: t[5],
                eltId: "I1268_1011_1263_763"
            }, {
                reactions: [{
                    type: "click",
                    from: "105",
                    to: "104"
                }],
                eltId: "I1268_1011_1263_764"
            }, {
                reactions: [{
                    type: "click",
                    from: "112",
                    to: "111"
                }],
                eltId: "I1268_1011_1263_765"
            }, {
                props: t[10],
                eltId: "I1268_1011_1263_806"
            }, {
                props: t[9],
                eltId: "Frame_10"
            }, {
                props: t[8],
                eltId: "healthicons_doctor_24px"
            }, {
                props: t[11],
                eltId: "Vector_38"
            }, {
                props: t[10],
                eltId: "I1268_1011_1263_807"
            }, {
                eltId: "Text_input_4",
                altId: "Text_input_2"
            }],
            rootId: "tres_barras"
        },
        119: {
            type: "ANIMATE",
            animations: [{
                props: t[18],
                eltId: "tres_barras"
            }, {
                reactions: [{
                    type: "click",
                    from: "73",
                    to: "71"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_32",
                altId: "Vector_28"
            }, {
                props: t[4],
                eltId: "Frame_13"
            }, {
                props: t[4],
                eltId: "Frame_8"
            }, {
                props: t[3],
                eltId: "ph_house_fill"
            }, {
                props: t[6],
                eltId: "Vector_36"
            }, {
                props: t[5],
                eltId: "I1268_1011_1263_760"
            }, {
                props: t[3],
                eltId: "Text_input_1"
            }, {
                reactions: [{
                    type: "click",
                    from: "98",
                    to: "97"
                }],
                eltId: "I1268_1011_1263_763"
            }, {
                props: t[5],
                eltId: "I1268_1011_1263_764"
            }, {
                reactions: [{
                    type: "click",
                    from: "113",
                    to: "111"
                }],
                eltId: "I1268_1011_1263_765"
            }, {
                props: t[10],
                reactions: [{
                    type: "click",
                    from: "119",
                    to: "118"
                }],
                eltId: "I1268_1011_1263_806"
            }, {
                eltId: "Text_input_6",
                altId: "Text_input_2"
            }, {
                props: t[9],
                eltId: "Frame_9"
            }, {
                props: t[8],
                eltId: "lsicon_user_crowd_filled"
            }, {
                props: t[11],
                eltId: "Vector_40"
            }, {
                props: t[10],
                eltId: "I1268_1011_1263_817"
            }],
            rootId: "tres_barras"
        },
        120: {
            type: "ANIMATE",
            animations: [{
                props: t[18],
                eltId: "tres_barras"
            }, {
                reactions: [{
                    type: "click",
                    from: "74",
                    to: "71"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_34",
                altId: "Vector_28"
            }, {
                props: t[4],
                eltId: "Frame_13"
            }, {
                props: t[4],
                eltId: "Frame_8"
            }, {
                props: t[3],
                eltId: "ph_house_fill"
            }, {
                props: t[6],
                eltId: "Vector_36"
            }, {
                props: t[5],
                eltId: "I1268_1011_1263_760"
            }, {
                props: t[3],
                eltId: "Text_input_1"
            }, {
                reactions: [{
                    type: "click",
                    from: "99",
                    to: "97"
                }],
                eltId: "I1268_1011_1263_763"
            }, {
                reactions: [{
                    type: "click",
                    from: "106",
                    to: "104"
                }],
                eltId: "I1268_1011_1263_764"
            }, {
                props: t[5],
                eltId: "I1268_1011_1263_765"
            }, {
                props: t[10],
                reactions: [{
                    type: "click",
                    from: "120",
                    to: "118"
                }],
                eltId: "I1268_1011_1263_806"
            }, {
                eltId: "Text_input_7",
                altId: "Text_input_2"
            }, {
                props: t[9],
                eltId: "Frame_11"
            }, {
                props: t[8],
                eltId: "fluent_call_16_filled"
            }, {
                props: t[11],
                eltId: "Vector_42"
            }, {
                props: t[10],
                eltId: "I1268_1011_1263_827"
            }],
            rootId: "tres_barras"
        },
        153: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[12],
                reactions: [{
                    type: "hover",
                    from: "153"
                }],
                eltId: "Agendar_0"
            }, {
                props: t[13],
                eltId: "I1122_452_1122_438"
            }, {
                props: t[13],
                eltId: "__64"
            }],
            rootId: "Agendar_0"
        },
        159: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "cubic-bezier(0.7, -0.4, 0.4, 1.4)",
                duration: 1.6666666666666667
            },
            animations: [{
                eltId: "imagenes_animate",
                altId: "imagenes_animate_0"
            }],
            rootId: "imagenes_animate"
        },
        160: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "cubic-bezier(0.7, -0.4, 0.4, 1.4)",
                duration: 1.6666666666666667
            },
            animations: [{
                eltId: "imagenes_animate_0",
                altId: "imagenes_animate_1"
            }],
            rootId: "imagenes_animate_0"
        },
        161: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "cubic-bezier(0.7, -0.4, 0.4, 1.4)",
                duration: 1.6666666666666667
            },
            animations: [{
                eltId: "imagenes_animate_1",
                altId: "imagenes_animate"
            }],
            rootId: "imagenes_animate_1"
        },
        165: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,165",
                    to: "T800ms,166"
                }],
                eltId: "colors"
            }, {
                eltId: "Switch_12",
                altId: "Switch_14"
            }],
            rootId: "colors"
        },
        166: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,166",
                    to: "T800ms,167"
                }],
                eltId: "colors"
            }, {
                eltId: "Switch_14",
                altId: "Switch_16"
            }],
            rootId: "colors"
        },
        167: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,167",
                    to: "T800ms,168"
                }],
                eltId: "colors"
            }, {
                eltId: "Switch_16",
                altId: "Switch_18"
            }],
            rootId: "colors"
        },
        168: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,168",
                    to: "T800ms,165"
                }],
                eltId: "colors"
            }, {
                eltId: "Switch_18",
                altId: "Switch_12"
            }],
            rootId: "colors"
        },
        181: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[19],
                eltId: "nav"
            }, {
                reactions: [{
                    type: "click",
                    from: "181"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[20],
                eltId: "I1283_729_1175_723"
            }, {
                props: t[20],
                eltId: "__90"
            }, {
                props: t[21],
                reactions: [{
                    type: "click",
                    to: "193"
                }],
                eltId: "Text_input_12"
            }, {
                props: t[22],
                eltId: "I1283_729_1175_725"
            }, {
                props: t[22],
                eltId: "__91"
            }, {
                props: t[8],
                eltId: "Text_input_13"
            }, {
                reactions: [{
                    type: "click",
                    from: "208",
                    to: "207"
                }],
                eltId: "Text_input_14"
            }, {
                reactions: [{
                    type: "click",
                    from: "222",
                    to: "221"
                }],
                eltId: "Button_0"
            }, {
                props: t[3],
                eltId: "Text_input_17"
            }],
            rootId: "nav"
        },
        182: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "click",
                    from: "182"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[20],
                eltId: "I1283_729_1175_723"
            }, {
                props: t[20],
                eltId: "__90"
            }, {
                reactions: [{
                    type: "click",
                    from: "194",
                    to: "193"
                }],
                eltId: "Text_input_12"
            }, {
                reactions: [{
                    type: "click",
                    to: "207"
                }],
                eltId: "Text_input_14"
            }, {
                props: t[22],
                eltId: "I1283_729_1175_727"
            }, {
                props: t[22],
                eltId: "__92"
            }, {
                props: t[8],
                eltId: "Text_input_15"
            }, {
                reactions: [{
                    type: "click",
                    from: "223",
                    to: "221"
                }],
                eltId: "Button_0"
            }, {
                props: t[3],
                eltId: "Text_input_17"
            }],
            rootId: "nav"
        },
        183: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "183"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[20],
                eltId: "I1283_729_1175_723"
            }, {
                props: t[20],
                eltId: "__90"
            }, {
                reactions: [{
                    type: "click",
                    from: "195",
                    to: "193"
                }],
                eltId: "Text_input_12"
            }, {
                reactions: [{
                    type: "click",
                    from: "209",
                    to: "207"
                }],
                eltId: "Text_input_14"
            }, {
                reactions: [{
                    type: "click",
                    to: "221"
                }],
                eltId: "Button_0"
            }, {
                props: t[22],
                eltId: "I1283_729_1175_729"
            }, {
                props: t[22],
                eltId: "__93"
            }, {
                props: t[8],
                eltId: "Text_input_16"
            }, {
                props: t[3],
                eltId: "Text_input_17"
            }],
            rootId: "nav"
        },
        193: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[23],
                eltId: "nav"
            }, {
                reactions: [{
                    type: "click",
                    to: "181"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[22],
                eltId: "I1283_729_1175_723"
            }, {
                props: t[22],
                eltId: "__90"
            }, {
                props: t[24],
                reactions: [{
                    type: "click",
                    from: "193"
                }],
                eltId: "Text_input_12"
            }, {
                props: t[20],
                eltId: "I1283_729_1175_725"
            }, {
                props: t[20],
                eltId: "__91"
            }, {
                props: t[3],
                eltId: "Text_input_13"
            }, {
                reactions: [{
                    type: "click",
                    from: "207",
                    to: "208"
                }],
                eltId: "Text_input_14"
            }, {
                reactions: [{
                    type: "click",
                    from: "221",
                    to: "222"
                }],
                eltId: "Button_0"
            }, {
                props: t[8],
                eltId: "Text_input_17"
            }],
            rootId: "nav"
        },
        194: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[23],
                eltId: "nav"
            }, {
                reactions: [{
                    type: "click",
                    from: "182",
                    to: "181"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[24],
                reactions: [{
                    type: "click",
                    from: "194"
                }],
                eltId: "Text_input_12"
            }, {
                props: t[20],
                eltId: "I1283_729_1175_725"
            }, {
                props: t[20],
                eltId: "__91"
            }, {
                props: t[3],
                eltId: "Text_input_13"
            }, {
                reactions: [{
                    type: "click",
                    to: "208"
                }],
                eltId: "Text_input_14"
            }, {
                props: t[22],
                eltId: "I1283_729_1175_727"
            }, {
                props: t[22],
                eltId: "__92"
            }, {
                props: t[8],
                eltId: "Text_input_15"
            }, {
                reactions: [{
                    type: "click",
                    from: "223",
                    to: "222"
                }],
                eltId: "Button_0"
            }],
            rootId: "nav"
        },
        195: {
            type: "ANIMATE",
            animations: [{
                props: t[23],
                eltId: "nav"
            }, {
                reactions: [{
                    type: "click",
                    from: "183",
                    to: "181"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[24],
                reactions: [{
                    type: "click",
                    from: "195"
                }],
                eltId: "Text_input_12"
            }, {
                props: t[20],
                eltId: "I1283_729_1175_725"
            }, {
                props: t[20],
                eltId: "__91"
            }, {
                props: t[3],
                eltId: "Text_input_13"
            }, {
                reactions: [{
                    type: "click",
                    from: "209",
                    to: "208"
                }],
                eltId: "Text_input_14"
            }, {
                reactions: [{
                    type: "click",
                    to: "222"
                }],
                eltId: "Button_0"
            }, {
                props: t[22],
                eltId: "I1283_729_1175_729"
            }, {
                props: t[22],
                eltId: "__93"
            }, {
                props: t[8],
                eltId: "Text_input_16"
            }],
            rootId: "nav"
        },
        207: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "click",
                    to: "182"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[22],
                eltId: "I1283_729_1175_723"
            }, {
                props: t[22],
                eltId: "__90"
            }, {
                reactions: [{
                    type: "click",
                    from: "193",
                    to: "194"
                }],
                eltId: "Text_input_12"
            }, {
                reactions: [{
                    type: "click",
                    from: "207"
                }],
                eltId: "Text_input_14"
            }, {
                props: t[20],
                eltId: "I1283_729_1175_727"
            }, {
                props: t[20],
                eltId: "__92"
            }, {
                props: t[3],
                eltId: "Text_input_15"
            }, {
                reactions: [{
                    type: "click",
                    from: "221",
                    to: "223"
                }],
                eltId: "Button_0"
            }, {
                props: t[8],
                eltId: "Text_input_17"
            }],
            rootId: "nav"
        },
        208: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[19],
                eltId: "nav"
            }, {
                reactions: [{
                    type: "click",
                    from: "181",
                    to: "182"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[21],
                reactions: [{
                    type: "click",
                    to: "194"
                }],
                eltId: "Text_input_12"
            }, {
                props: t[22],
                eltId: "I1283_729_1175_725"
            }, {
                props: t[22],
                eltId: "__91"
            }, {
                props: t[8],
                eltId: "Text_input_13"
            }, {
                reactions: [{
                    type: "click",
                    from: "208"
                }],
                eltId: "Text_input_14"
            }, {
                props: t[20],
                eltId: "I1283_729_1175_727"
            }, {
                props: t[20],
                eltId: "__92"
            }, {
                props: t[3],
                eltId: "Text_input_15"
            }, {
                reactions: [{
                    type: "click",
                    from: "222",
                    to: "223"
                }],
                eltId: "Button_0"
            }],
            rootId: "nav"
        },
        209: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "183",
                    to: "182"
                }],
                eltId: "Text_input_11"
            }, {
                reactions: [{
                    type: "click",
                    from: "195",
                    to: "194"
                }],
                eltId: "Text_input_12"
            }, {
                reactions: [{
                    type: "click",
                    from: "209"
                }],
                eltId: "Text_input_14"
            }, {
                props: t[20],
                eltId: "I1283_729_1175_727"
            }, {
                props: t[20],
                eltId: "__92"
            }, {
                props: t[3],
                eltId: "Text_input_15"
            }, {
                reactions: [{
                    type: "click",
                    to: "223"
                }],
                eltId: "Button_0"
            }, {
                props: t[22],
                eltId: "I1283_729_1175_729"
            }, {
                props: t[22],
                eltId: "__93"
            }, {
                props: t[8],
                eltId: "Text_input_16"
            }],
            rootId: "nav"
        },
        221: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "click",
                    to: "183"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[22],
                eltId: "I1283_729_1175_723"
            }, {
                props: t[22],
                eltId: "__90"
            }, {
                reactions: [{
                    type: "click",
                    from: "193",
                    to: "195"
                }],
                eltId: "Text_input_12"
            }, {
                reactions: [{
                    type: "click",
                    from: "207",
                    to: "209"
                }],
                eltId: "Text_input_14"
            }, {
                reactions: [{
                    type: "click",
                    from: "221"
                }],
                eltId: "Button_0"
            }, {
                props: t[20],
                eltId: "I1283_729_1175_729"
            }, {
                props: t[20],
                eltId: "__93"
            }, {
                props: t[3],
                eltId: "Text_input_16"
            }, {
                props: t[8],
                eltId: "Text_input_17"
            }],
            rootId: "nav"
        },
        222: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[19],
                eltId: "nav"
            }, {
                reactions: [{
                    type: "click",
                    from: "181",
                    to: "183"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[21],
                reactions: [{
                    type: "click",
                    to: "195"
                }],
                eltId: "Text_input_12"
            }, {
                props: t[22],
                eltId: "I1283_729_1175_725"
            }, {
                props: t[22],
                eltId: "__91"
            }, {
                props: t[8],
                eltId: "Text_input_13"
            }, {
                reactions: [{
                    type: "click",
                    from: "208",
                    to: "209"
                }],
                eltId: "Text_input_14"
            }, {
                reactions: [{
                    type: "click",
                    from: "222"
                }],
                eltId: "Button_0"
            }, {
                props: t[20],
                eltId: "I1283_729_1175_729"
            }, {
                props: t[20],
                eltId: "__93"
            }, {
                props: t[3],
                eltId: "Text_input_16"
            }],
            rootId: "nav"
        },
        223: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "182",
                    to: "183"
                }],
                eltId: "Text_input_11"
            }, {
                reactions: [{
                    type: "click",
                    from: "194",
                    to: "195"
                }],
                eltId: "Text_input_12"
            }, {
                reactions: [{
                    type: "click",
                    to: "209"
                }],
                eltId: "Text_input_14"
            }, {
                props: t[22],
                eltId: "I1283_729_1175_727"
            }, {
                props: t[22],
                eltId: "__92"
            }, {
                props: t[8],
                eltId: "Text_input_15"
            }, {
                reactions: [{
                    type: "click",
                    from: "223"
                }],
                eltId: "Button_0"
            }, {
                props: t[20],
                eltId: "I1283_729_1175_729"
            }, {
                props: t[20],
                eltId: "__93"
            }, {
                props: t[3],
                eltId: "Text_input_16"
            }],
            rootId: "nav"
        },
        237: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[12],
                reactions: [{
                    type: "hover",
                    from: "237"
                }],
                eltId: "Agendar_1"
            }, {
                props: t[13],
                eltId: "I1122_447_1122_438"
            }, {
                props: t[13],
                eltId: "__111"
            }],
            rootId: "Agendar_1"
        },
        243: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "cubic-bezier(0.7, -0.4, 0.4, 1.4)",
                duration: 1.6666666666666667
            },
            animations: [{
                eltId: "Property_1_Podolog_a",
                altId: "Property_1_Podolog_a_0"
            }],
            rootId: "Property_1_Podolog_a"
        },
        244: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "cubic-bezier(0.7, -0.4, 0.4, 1.4)",
                duration: 1.6666666666666667
            },
            animations: [{
                eltId: "Property_1_Podolog_a_0",
                altId: "Property_1_Podolog_a_1"
            }],
            rootId: "Property_1_Podolog_a_0"
        },
        245: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "cubic-bezier(0.7, -0.4, 0.4, 1.4)",
                duration: 1.6666666666666667
            },
            animations: [{
                eltId: "Property_1_Podolog_a_1",
                altId: "Property_1_Podolog_a"
            }],
            rootId: "Property_1_Podolog_a_1"
        },
        249: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,249",
                    to: "T800ms,250"
                }],
                eltId: "_1_0"
            }, {
                eltId: "Switch_23",
                altId: "Switch_25"
            }],
            rootId: "_1_0"
        },
        250: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,250",
                    to: "T800ms,251"
                }],
                eltId: "_1_0"
            }, {
                eltId: "Switch_25",
                altId: "Switch_27"
            }],
            rootId: "_1_0"
        },
        251: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,251",
                    to: "T800ms,252"
                }],
                eltId: "_1_0"
            }, {
                eltId: "Switch_27",
                altId: "Switch_29"
            }],
            rootId: "_1_0"
        },
        252: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,252",
                    to: "T800ms,249"
                }],
                eltId: "_1_0"
            }, {
                eltId: "Switch_29",
                altId: "Switch_23"
            }],
            rootId: "_1_0"
        },
        261: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[0],
                reactions: [{
                    type: "hover",
                    from: "261"
                }, {
                    type: "click",
                    to: "262"
                }],
                eltId: "WhatsApp_0"
            }, {
                props: t[0],
                eltId: "Vertical_container_6"
            }],
            rootId: "WhatsApp_0"
        },
        262: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[1],
                reactions: [{
                    type: "click",
                    from: "262",
                    to: "263"
                }],
                eltId: "WhatsApp_0"
            }, {
                props: t[2],
                eltId: "Vertical_container_6"
            }, {
                props: t[3],
                eltId: "Group_1_0"
            }, {
                props: t[3],
                eltId: "Frame_4_0"
            }, {
                props: t[4],
                eltId: "Frame_6_0"
            }, {
                props: t[3],
                eltId: "Ellipse_1_0"
            }, {
                props: t[3],
                eltId: "Group_2_0"
            }, {
                props: t[5],
                eltId: "I1137_443_1125_464"
            }, {
                props: t[5],
                eltId: "I1137_443_1125_465"
            }, {
                props: t[3],
                eltId: "Frame_7_0"
            }, {
                props: t[5],
                eltId: "I1137_443_1125_475"
            }, {
                props: t[3],
                eltId: "https_lottiefiles_com_animations_doctor_consultation_E1yd0wb6cx_0"
            }, {
                props: t[3],
                eltId: "Frame_5_0"
            }, {
                props: t[5],
                eltId: "I1137_443_1125_460"
            }, {
                props: t[5],
                eltId: "I1137_443_1125_461"
            }, {
                props: t[3],
                eltId: "mi_circle_error_0"
            }, {
                props: t[6],
                eltId: "Vector_87"
            }],
            rootId: "WhatsApp_0"
        },
        263: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[7],
                reactions: [{
                    type: "click",
                    from: "263"
                }, {
                    type: "hover",
                    to: "261"
                }],
                eltId: "WhatsApp_0"
            }, {
                props: t[3],
                eltId: "Vertical_container_6"
            }, {
                props: t[8],
                eltId: "Group_1_0"
            }, {
                props: t[8],
                eltId: "Frame_4_0"
            }, {
                props: t[9],
                eltId: "Frame_6_0"
            }, {
                props: t[8],
                eltId: "Ellipse_1_0"
            }, {
                props: t[8],
                eltId: "Group_2_0"
            }, {
                props: t[10],
                eltId: "I1137_443_1125_464"
            }, {
                props: t[10],
                eltId: "I1137_443_1125_465"
            }, {
                props: t[8],
                eltId: "Frame_7_0"
            }, {
                props: t[10],
                eltId: "I1137_443_1125_475"
            }, {
                props: t[8],
                eltId: "https_lottiefiles_com_animations_doctor_consultation_E1yd0wb6cx_0"
            }, {
                props: t[8],
                eltId: "Frame_5_0"
            }, {
                props: t[10],
                eltId: "I1137_443_1125_460"
            }, {
                props: t[10],
                eltId: "I1137_443_1125_461"
            }, {
                props: t[8],
                eltId: "mi_circle_error_0"
            }, {
                props: t[11],
                eltId: "Vector_87"
            }],
            rootId: "WhatsApp_0"
        },
        304: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[19],
                eltId: "nav_0"
            }, {
                reactions: [{
                    type: "click",
                    from: "304"
                }],
                eltId: "Text_input_21"
            }, {
                props: t[20],
                eltId: "I1242_720_1175_723"
            }, {
                props: t[20],
                eltId: "__146"
            }, {
                props: t[21],
                reactions: [{
                    type: "click",
                    to: "316"
                }],
                eltId: "Text_input_22"
            }, {
                props: t[22],
                eltId: "I1242_720_1175_725"
            }, {
                props: t[22],
                eltId: "__147"
            }, {
                props: t[8],
                eltId: "Text_input_23"
            }, {
                reactions: [{
                    type: "click",
                    from: "331",
                    to: "330"
                }],
                eltId: "Text_input_24"
            }, {
                reactions: [{
                    type: "click",
                    from: "345",
                    to: "344"
                }],
                eltId: "Button_1"
            }, {
                props: t[3],
                eltId: "Text_input_27"
            }],
            rootId: "nav_0"
        },
        305: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "click",
                    from: "305"
                }],
                eltId: "Text_input_21"
            }, {
                props: t[20],
                eltId: "I1242_720_1175_723"
            }, {
                props: t[20],
                eltId: "__146"
            }, {
                reactions: [{
                    type: "click",
                    from: "317",
                    to: "316"
                }],
                eltId: "Text_input_22"
            }, {
                reactions: [{
                    type: "click",
                    to: "330"
                }],
                eltId: "Text_input_24"
            }, {
                props: t[22],
                eltId: "I1242_720_1175_727"
            }, {
                props: t[22],
                eltId: "__148"
            }, {
                props: t[8],
                eltId: "Text_input_25"
            }, {
                reactions: [{
                    type: "click",
                    from: "346",
                    to: "344"
                }],
                eltId: "Button_1"
            }, {
                props: t[3],
                eltId: "Text_input_27"
            }],
            rootId: "nav_0"
        },
        306: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "306"
                }],
                eltId: "Text_input_21"
            }, {
                props: t[20],
                eltId: "I1242_720_1175_723"
            }, {
                props: t[20],
                eltId: "__146"
            }, {
                reactions: [{
                    type: "click",
                    from: "318",
                    to: "316"
                }],
                eltId: "Text_input_22"
            }, {
                reactions: [{
                    type: "click",
                    from: "332",
                    to: "330"
                }],
                eltId: "Text_input_24"
            }, {
                reactions: [{
                    type: "click",
                    to: "344"
                }],
                eltId: "Button_1"
            }, {
                props: t[22],
                eltId: "I1242_720_1175_729"
            }, {
                props: t[22],
                eltId: "__149"
            }, {
                props: t[8],
                eltId: "Text_input_26"
            }, {
                props: t[3],
                eltId: "Text_input_27"
            }],
            rootId: "nav_0"
        },
        316: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[23],
                eltId: "nav_0"
            }, {
                reactions: [{
                    type: "click",
                    to: "304"
                }],
                eltId: "Text_input_21"
            }, {
                props: t[22],
                eltId: "I1242_720_1175_723"
            }, {
                props: t[22],
                eltId: "__146"
            }, {
                props: t[24],
                reactions: [{
                    type: "click",
                    from: "316"
                }],
                eltId: "Text_input_22"
            }, {
                props: t[20],
                eltId: "I1242_720_1175_725"
            }, {
                props: t[20],
                eltId: "__147"
            }, {
                props: t[3],
                eltId: "Text_input_23"
            }, {
                reactions: [{
                    type: "click",
                    from: "330",
                    to: "331"
                }],
                eltId: "Text_input_24"
            }, {
                reactions: [{
                    type: "click",
                    from: "344",
                    to: "345"
                }],
                eltId: "Button_1"
            }, {
                props: t[8],
                eltId: "Text_input_27"
            }],
            rootId: "nav_0"
        },
        317: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[23],
                eltId: "nav_0"
            }, {
                reactions: [{
                    type: "click",
                    from: "305",
                    to: "304"
                }],
                eltId: "Text_input_21"
            }, {
                props: t[24],
                reactions: [{
                    type: "click",
                    from: "317"
                }],
                eltId: "Text_input_22"
            }, {
                props: t[20],
                eltId: "I1242_720_1175_725"
            }, {
                props: t[20],
                eltId: "__147"
            }, {
                props: t[3],
                eltId: "Text_input_23"
            }, {
                reactions: [{
                    type: "click",
                    to: "331"
                }],
                eltId: "Text_input_24"
            }, {
                props: t[22],
                eltId: "I1242_720_1175_727"
            }, {
                props: t[22],
                eltId: "__148"
            }, {
                props: t[8],
                eltId: "Text_input_25"
            }, {
                reactions: [{
                    type: "click",
                    from: "346",
                    to: "345"
                }],
                eltId: "Button_1"
            }],
            rootId: "nav_0"
        },
        318: {
            type: "ANIMATE",
            animations: [{
                props: t[23],
                eltId: "nav_0"
            }, {
                reactions: [{
                    type: "click",
                    from: "306",
                    to: "304"
                }],
                eltId: "Text_input_21"
            }, {
                props: t[24],
                reactions: [{
                    type: "click",
                    from: "318"
                }],
                eltId: "Text_input_22"
            }, {
                props: t[20],
                eltId: "I1242_720_1175_725"
            }, {
                props: t[20],
                eltId: "__147"
            }, {
                props: t[3],
                eltId: "Text_input_23"
            }, {
                reactions: [{
                    type: "click",
                    from: "332",
                    to: "331"
                }],
                eltId: "Text_input_24"
            }, {
                reactions: [{
                    type: "click",
                    to: "345"
                }],
                eltId: "Button_1"
            }, {
                props: t[22],
                eltId: "I1242_720_1175_729"
            }, {
                props: t[22],
                eltId: "__149"
            }, {
                props: t[8],
                eltId: "Text_input_26"
            }],
            rootId: "nav_0"
        },
        330: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "click",
                    to: "305"
                }],
                eltId: "Text_input_21"
            }, {
                props: t[22],
                eltId: "I1242_720_1175_723"
            }, {
                props: t[22],
                eltId: "__146"
            }, {
                reactions: [{
                    type: "click",
                    from: "316",
                    to: "317"
                }],
                eltId: "Text_input_22"
            }, {
                reactions: [{
                    type: "click",
                    from: "330"
                }],
                eltId: "Text_input_24"
            }, {
                props: t[20],
                eltId: "I1242_720_1175_727"
            }, {
                props: t[20],
                eltId: "__148"
            }, {
                props: t[3],
                eltId: "Text_input_25"
            }, {
                reactions: [{
                    type: "click",
                    from: "344",
                    to: "346"
                }],
                eltId: "Button_1"
            }, {
                props: t[8],
                eltId: "Text_input_27"
            }],
            rootId: "nav_0"
        },
        331: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[19],
                eltId: "nav_0"
            }, {
                reactions: [{
                    type: "click",
                    from: "304",
                    to: "305"
                }],
                eltId: "Text_input_21"
            }, {
                props: t[21],
                reactions: [{
                    type: "click",
                    to: "317"
                }],
                eltId: "Text_input_22"
            }, {
                props: t[22],
                eltId: "I1242_720_1175_725"
            }, {
                props: t[22],
                eltId: "__147"
            }, {
                props: t[8],
                eltId: "Text_input_23"
            }, {
                reactions: [{
                    type: "click",
                    from: "331"
                }],
                eltId: "Text_input_24"
            }, {
                props: t[20],
                eltId: "I1242_720_1175_727"
            }, {
                props: t[20],
                eltId: "__148"
            }, {
                props: t[3],
                eltId: "Text_input_25"
            }, {
                reactions: [{
                    type: "click",
                    from: "345",
                    to: "346"
                }],
                eltId: "Button_1"
            }],
            rootId: "nav_0"
        },
        332: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "306",
                    to: "305"
                }],
                eltId: "Text_input_21"
            }, {
                reactions: [{
                    type: "click",
                    from: "318",
                    to: "317"
                }],
                eltId: "Text_input_22"
            }, {
                reactions: [{
                    type: "click",
                    from: "332"
                }],
                eltId: "Text_input_24"
            }, {
                props: t[20],
                eltId: "I1242_720_1175_727"
            }, {
                props: t[20],
                eltId: "__148"
            }, {
                props: t[3],
                eltId: "Text_input_25"
            }, {
                reactions: [{
                    type: "click",
                    to: "346"
                }],
                eltId: "Button_1"
            }, {
                props: t[22],
                eltId: "I1242_720_1175_729"
            }, {
                props: t[22],
                eltId: "__149"
            }, {
                props: t[8],
                eltId: "Text_input_26"
            }],
            rootId: "nav_0"
        },
        344: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "click",
                    to: "306"
                }],
                eltId: "Text_input_21"
            }, {
                props: t[22],
                eltId: "I1242_720_1175_723"
            }, {
                props: t[22],
                eltId: "__146"
            }, {
                reactions: [{
                    type: "click",
                    from: "316",
                    to: "318"
                }],
                eltId: "Text_input_22"
            }, {
                reactions: [{
                    type: "click",
                    from: "330",
                    to: "332"
                }],
                eltId: "Text_input_24"
            }, {
                reactions: [{
                    type: "click",
                    from: "344"
                }],
                eltId: "Button_1"
            }, {
                props: t[20],
                eltId: "I1242_720_1175_729"
            }, {
                props: t[20],
                eltId: "__149"
            }, {
                props: t[3],
                eltId: "Text_input_26"
            }, {
                props: t[8],
                eltId: "Text_input_27"
            }],
            rootId: "nav_0"
        },
        345: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[19],
                eltId: "nav_0"
            }, {
                reactions: [{
                    type: "click",
                    from: "304",
                    to: "306"
                }],
                eltId: "Text_input_21"
            }, {
                props: t[21],
                reactions: [{
                    type: "click",
                    to: "318"
                }],
                eltId: "Text_input_22"
            }, {
                props: t[22],
                eltId: "I1242_720_1175_725"
            }, {
                props: t[22],
                eltId: "__147"
            }, {
                props: t[8],
                eltId: "Text_input_23"
            }, {
                reactions: [{
                    type: "click",
                    from: "331",
                    to: "332"
                }],
                eltId: "Text_input_24"
            }, {
                reactions: [{
                    type: "click",
                    from: "345"
                }],
                eltId: "Button_1"
            }, {
                props: t[20],
                eltId: "I1242_720_1175_729"
            }, {
                props: t[20],
                eltId: "__149"
            }, {
                props: t[3],
                eltId: "Text_input_26"
            }],
            rootId: "nav_0"
        },
        346: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "305",
                    to: "306"
                }],
                eltId: "Text_input_21"
            }, {
                reactions: [{
                    type: "click",
                    from: "317",
                    to: "318"
                }],
                eltId: "Text_input_22"
            }, {
                reactions: [{
                    type: "click",
                    to: "332"
                }],
                eltId: "Text_input_24"
            }, {
                props: t[22],
                eltId: "I1242_720_1175_727"
            }, {
                props: t[22],
                eltId: "__148"
            }, {
                props: t[8],
                eltId: "Text_input_25"
            }, {
                reactions: [{
                    type: "click",
                    from: "346"
                }],
                eltId: "Button_1"
            }, {
                props: t[20],
                eltId: "I1242_720_1175_729"
            }, {
                props: t[20],
                eltId: "__149"
            }, {
                props: t[3],
                eltId: "Text_input_26"
            }],
            rootId: "nav_0"
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
    "--item-spacing-0-01": -.006000000052154064
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
            "--Display-6": 14
        },
        tablet: {
            "--bracketpoints": 1024,
            "--Display": 0,
            "--Display-1": 36,
            "--Display-2": 0,
            "--Display-3": 0,
            "--Display-4": 0,
            "--Display-5": 0,
            "--Display-6": 14
        },
        mobile: {
            "--bracketpoints": 390,
            "--Display": 0,
            "--Display-1": 24,
            "--Display-2": 0,
            "--Display-3": 0,
            "--Display-4": 16,
            "--Display-5": 14,
            "--Display-6": 12
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

"use strict";
(() => {
    var ke = Object.defineProperty,
        Be = (e, t, r) => t in e ? ke(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r,
        F = (e, t, r) => (Be(e, typeof t != "symbol" ? t + "" : t, r), r);

    function V(e, t) {
        return Math.round(e * t) / t
    }

    function j(e, t, r, n) {
        let o = (e + (n || "")).toString().includes("%");
        if (typeof e == "string" ? [e, t, r, n] = e.match(/(0?\.?\d+)%?\b/g).map(i => Number(i)) : n !== void 0 && (n = Number.parseFloat(n)), typeof e != "number" || typeof t != "number" || typeof r != "number" || e > 255 || t > 255 || r > 255) throw new TypeError("Expected three numbers below 256");
        if (typeof n == "number") {
            if (!o && n >= 0 && n <= 1) n = Math.round(255 * n);
            else if (o && n >= 0 && n <= 100) n = Math.round(255 * n / 100);
            else throw new TypeError(`Expected alpha value (${n}) as a fraction or percentage`);
            n = (n | 256).toString(16).slice(1)
        } else n = "";
        return (r | t << 8 | e << 16 | 1 << 24).toString(16).slice(1) + n
    }

    function k(e) {
        return e.filter(te)
    }

    function te(e) {
        return e != null
    }

    function D(e) {
        console.warn(e)
    }

    function H(e) {
        return typeof e == "object" && e.type === "VARIABLE_ALIAS"
    }

    function He(e) {
        if ("a" in e) {
            let r = V(e.a, 100);
            if (r !== 1) return `rgba(${e.r},${e.g},${e.b},${r})`
        }
        let t = j(e.r, e.g, e.b);
        return t[0] === t[1] && t[2] === t[3] && t[4] === t[5] ? `#${t[0]}${t[2]}${t[4]}` : `#${t}`
    }

    function $e(e) {
        let {
            r: t,
            g: r,
            b: n,
            a: o = 1
        } = e;
        return {
            r: V(t * 255, 1),
            g: V(r * 255, 1),
            b: V(n * 255, 1),
            a: o
        }
    }

    function w(e) {
        return `${V(e,10)}px`
    }

    function X(e) {
        return `${V(e,10)}%`
    }

    function ne(e) {
        switch (typeof e) {
            case "object":
                if (H(e)) return `var(${e.id})`;
                if ("r" in e) return He($e(e));
            case "string":
            case "number":
            case "boolean":
            default:
                return String(e)
        }
    }

    function $(e) {
        return "T" + e
    }

    function q(e, t, r) {
        let n = Object.entries(t);
        if (!n.length) return "";
        let o = [e + " {", ...n.filter(([, i]) => i !== void 0 && i !== "").map(([i, c]) => `  ${i}: ${c};`), "}"];
        return r && (o = o.map(i => r + i)), o.join(`
`)
    }
    var ze = {
            padding: "0",
            margin: "0"
        },
        Ge = {
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
        Xt = q("*", ze) + Object.entries(Ge).map(([e, t]) => q(e, t)).join(`
`),
        re = ["appear", "mousedown", "mouseenter", "mouseleave", "mouseup", "timeout", "click", "press", "drag", "keydown", "hover"];

    function oe(e, t, r) {
        if (r.direction === "LEFT") {
            if (t === "BOTTOM_LEFT" || t === "TOP_LEFT") return [{
                eltId: e,
                props: [{
                    key: "left",
                    from: "100%",
                    to: "0%"
                }]
            }];
            if (t === "BOTTOM_RIGHT" || t === "TOP_RIGHT") return [{
                eltId: e,
                props: [{
                    key: "translate",
                    from: "100% 0px",
                    to: "0px 0px"
                }]
            }];
            {
                let n = t === "CENTER" ? "-50%" : "0px";
                return [{
                    eltId: e,
                    props: [{
                        key: "left",
                        from: "100%",
                        to: "50%"
                    }, {
                        key: "translate",
                        from: `0px ${n}`,
                        to: `-50% ${n}`
                    }]
                }]
            }
        } else if (r.direction === "RIGHT") {
            if (t === "BOTTOM_LEFT" || t === "TOP_LEFT") return [{
                eltId: e,
                props: [{
                    key: "translate",
                    from: "-100% 0px",
                    to: "0px 0px"
                }]
            }];
            if (t === "BOTTOM_RIGHT" || t === "TOP_RIGHT") return [{
                eltId: e,
                props: [{
                    key: "right",
                    from: "100%",
                    to: "0px"
                }]
            }];
            {
                let n = t === "CENTER" ? "-50%" : "0px";
                return [{
                    eltId: e,
                    props: [{
                        key: "left",
                        from: "0px",
                        to: "50%"
                    }, {
                        key: "translate",
                        from: `-100% ${n}`,
                        to: `-50% ${n}`
                    }]
                }]
            }
        } else if (r.direction === "TOP")
            if (t === "BOTTOM_LEFT" || t === "BOTTOM_RIGHT" || t === "BOTTOM_CENTER") {
                let n = t === "BOTTOM_CENTER" ? "-50%" : "0px";
                return [{
                    eltId: e,
                    props: [{
                        key: "translate",
                        from: `${n} 100%`,
                        to: `${n} 0px`
                    }]
                }]
            } else return t === "TOP_LEFT" || t === "TOP_RIGHT" || t === "TOP_CENTER" ? [{
                eltId: e,
                props: [{
                    key: "top",
                    from: "100%",
                    to: "0px"
                }]
            }] : [{
                eltId: e,
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
        else if (r.direction === "BOTTOM") {
            if (t === "BOTTOM_LEFT" || t === "BOTTOM_RIGHT" || t === "BOTTOM_CENTER") return [{
                eltId: e,
                props: [{
                    key: "bottom",
                    from: "100%",
                    to: "0px"
                }]
            }];
            if (t === "TOP_LEFT" || t === "TOP_RIGHT" || t === "TOP_CENTER") {
                let n = t === "TOP_CENTER" ? "-50%" : "0px";
                return [{
                    eltId: e,
                    props: [{
                        key: "translate",
                        from: `${n} -100%`,
                        to: `${n} 0px`
                    }]
                }]
            } else return [{
                eltId: e,
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
        } else console.warn("Unsupported transition:", r);
        return []
    }

    function W(e) {
        if (e) return (...t) => {
            if (!e) return;
            let r = e;
            return e = void 0, r(...t)
        }
    }
    var Ke = e => e instanceof HTMLElement || e instanceof SVGElement;

    function Ue(e, t) {
        if (!e.parentElement) return;
        let r = new MutationObserver(n => {
            for (let o of n.filter(i => i.type === "childList"))
                for (let i of o.removedNodes) i === e && (t?.(), r.disconnect())
        });
        r.observe(e.parentElement, {
            childList: !0
        })
    }

    function P(e, t) {
        let r = new MutationObserver(n => {
            for (let o of n.filter(i => i.type === "childList"))
                for (let i of o.addedNodes) Ke(i) && i.matches(e) && Ue(i, t(i))
        });
        return r.observe(document, {
            childList: !0,
            subtree: !0
        }), () => r.disconnect()
    }
    var ie = new Set(["youtube-video", "vimeo-video", "spotify-audio", "jwplayer-video", "videojs-video", "wistia-video", "cloudflare-video", "hls-video", "shaka-video", "dash-video"]);

    function Ye(e) {
        return ie.has(e.tagName.toLowerCase()) || e.tagName === "VIDEO"
    }

    function je(e) {
        if (e.tagName !== "IFRAME") return !1;
        let t = e.src;
        return (t.includes("youtube.com") || t.includes("youtube-nocookie.com")) && t.includes("enablejsapi=1")
    }
    var B = class {
        constructor(e) {
            this.iframe = e, F(this, "info", {}), F(this, "loaded"), F(this, "messageListener", null), this.loaded = new Promise(t => {
                let r = () => {
                    this.iframe.removeEventListener("load", r), setTimeout(() => {
                        this.requestYoutubeListening()
                    })
                };
                this.iframe.addEventListener("load", r), this.messageListener = n => {
                    if (n.source === this.iframe.contentWindow && n.data) {
                        let o;
                        try {
                            o = JSON.parse(n.data)
                        } catch (i) {
                            console.error("YoutubeController messageListener", i);
                            return
                        }
                        o.event === "onReady" && this.iframe.removeEventListener("load", r), o.info && (Object.assign(this.info, o.info), t(!0))
                    }
                }, window.addEventListener("message", this.messageListener), this.requestYoutubeListening()
            })
        }
        async sendYoutubeMessage(e, t = []) {
            await this.loaded, this.iframe.contentWindow?.postMessage(JSON.stringify({
                event: "command",
                func: e,
                args: t
            }), "*")
        }
        requestYoutubeListening() {
            this.iframe.contentWindow?.postMessage(JSON.stringify({
                event: "listening"
            }), "*")
        }
        get muted() {
            return this.info.muted
        }
        get volume() {
            return this.info.volume
        }
        set muted(e) {
            e ? this.sendYoutubeMessage("mute") : this.sendYoutubeMessage("unMute")
        }
        get currentTime() {
            return this.info.currentTime
        }
        set currentTime(e) {
            this.sendYoutubeMessage("seekTo", [e, !0])
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
        static from(e) {
            return e.f2w_yt_controller || (e.f2w_yt_controller = new B(e))
        }
    };

    function S(e) {
        if (Ye(e)) return e;
        if (je(e)) return B.from(e)
    }

    function se(e) {
        let t = S(e);
        return t ? () => (t.muted = !t.muted, () => {
            t.muted = !t.muted
        }) : () => console.warn("Video element not recognized", e)
    }

    function ae(e) {
        let t = S(e);
        return t ? () => (t.muted = !0, () => {
            t.muted = !1
        }) : () => console.warn("Video element not recognized", e)
    }

    function le(e) {
        let t = S(e);
        return t ? () => (t.muted = !1, () => {
            t.muted = !0
        }) : () => console.warn("Video element not recognized", e)
    }

    function ue(e) {
        let t = S(e);
        return t ? () => (t.play(), () => t.pause()) : () => console.warn("Video element not recognized", e)
    }

    function de(e) {
        let t = S(e);
        return t ? () => (t.pause(), () => t.play()) : () => console.warn("Video element not recognized", e)
    }

    function ce(e) {
        let t = S(e);
        return t ? () => (t.paused ? t.play() : t.pause(), () => {
            t.paused ? t.play() : t.pause()
        }) : () => console.warn("Video element not recognized", e)
    }

    function pe(e, t) {
        let r = S(e);
        return r ? () => {
            r.currentTime = t
        } : () => console.warn("Video element not recognized", e)
    }

    function fe(e, t) {
        let r = S(e);
        return r ? () => (r.currentTime += t, () => {
            r.currentTime -= t
        }) : () => console.warn("Video element not recognized", e)
    }

    function me(e, t) {
        let r = S(e);
        return r ? () => (r.currentTime -= t, () => {
            r.currentTime += t
        }) : () => console.warn("Video element not recognized", e)
    }

    function ge() {
        let e = navigator.userAgent;
        return e.includes("Safari") && !e.includes("Chrome")
    }

    function ye(e) {
        return e === "absolute" || e === "fixed"
    }
    var Xe = ge();

    function z(e, t, r) {
        e.animate({
            ...t
        }, {
            pseudoElement: r,
            iterations: 1,
            duration: 0,
            fill: "forwards"
        })
    }

    function Z(e) {
        return Object.fromEntries(e.map(t => [t.camelKey, [t.from, t.to]]))
    }

    function G(e, t, r, n, o) {
        let i = e.parentElement,
            c = getComputedStyle(e),
            f = getComputedStyle(i).display,
            d = f.endsWith("flex") || f.endsWith("grid"),
            h = ye(c.position),
            g = t.map(l => ({
                ...l,
                camelKey: l.key.startsWith("--") ? l.key : l.key.replace(/-([a-z])/g, (v, b) => b.toUpperCase())
            })),
            E = {},
            T = g.filter(l => l.pseudo ? !1 : l.key.startsWith("--f2w-attr-") ? (E[l.key.slice(11)] = l.to, !1) : !0),
            a = Z(T),
            p = Z(g.filter(l => l.pseudo === "::before")),
            m = Z(g.filter(l => l.pseudo === "::after")),
            y;
        a.display && (a.display[0] === "none" ? e.style.display = String(a.display[1]) : a.display[1] === "none" && d && !h && (e.style.display = "none"), y = String(a.display[1]), delete a.display), Xe && (Ee(e, a, "overflow"), Ee(e, a, "rowGap", "gridRowGap"));
        let u = +getComputedStyle(e).getPropertyValue("--f2w-order");
        if (a["--f2w-order"]) {
            let l = a["--f2w-order"][1];
            u = l === void 0 ? NaN : +l, isNaN(u) || e.style.setProperty("--f2w-order", String(u)), delete a["--f2w-order"]
        }
        if (isNaN(u) || o.add(i), a["--f2w-img-src"]) {
            let l = e.f2w_image_lazy_loader,
                v = a["--f2w-img-src"][1];
            l || (e.f2w_image_lazy_loader = l = new Image, l.decoding = "sync", l.onload = () => {
                e.decoding = "sync", e.setAttribute("src", v), delete e.f2w_image_lazy_loader
            }), l.src = v, delete a["--f2w-img-src"]
        }
        a.$innerHTML && (e.innerHTML = String(a.$innerHTML[1]), delete a.$innerHTML);
        for (let [l, v] of Object.entries(E)) e.setAttribute(l, String(v));
        if (a.left && a.right) {
            if (a.left[1] === "revert" && a.right[0] === "revert") {
                let {
                    right: l
                } = i.getBoundingClientRect(), {
                    right: v
                } = e.getBoundingClientRect(), b = w(l - v);
                z(e, {
                    left: "revert",
                    right: b
                }), delete a.left, a.right[0] = b
            } else if (a.left[0] === "revert" && a.right[1] === "revert") {
                let {
                    left: l
                } = i.getBoundingClientRect(), {
                    left: v
                } = e.getBoundingClientRect(), b = w(v - l);
                z(e, {
                    right: "revert",
                    left: b
                }), delete a.right, a.left[0] = b
            }
        }
        if (a.top && a.bottom) {
            if (a.top[1] === "revert" && a.bottom[0] === "revert") {
                let {
                    bottom: l
                } = i.getBoundingClientRect(), {
                    bottom: v
                } = e.getBoundingClientRect(), b = w(l - v);
                z(e, {
                    top: "revert",
                    bottom: b
                }), delete a.top, a.bottom[0] = b
            } else if (a.top[0] === "revert" && a.bottom[1] === "revert") {
                let {
                    top: l
                } = i.getBoundingClientRect(), {
                    top: v
                } = e.getBoundingClientRect(), b = w(v - l);
                z(e, {
                    bottom: "revert",
                    top: b
                }), delete a.bottom, a.top[0] = b
            }
        }
        a.backgroundImage && T.filter(l => l.key.startsWith("background-")).forEach(l => {
            e.style.setProperty(l.key, String(l.to)), delete a[l.camelKey]
        });
        for (let [l, v] of [
                ["before", p],
                ["after", m]
            ]) v.display && (v.display[1] === "none" ? (e.classList.remove(l + "-visible"), e.classList.add(l + "-hidden")) : (e.classList.remove(l + "-hidden"), e.classList.add(l + "-visible")));
        let s = (l, v) => {
                if (Object.keys(l).length) return e.animate({
                    easing: r,
                    ...l
                }, {
                    pseudoElement: v,
                    iterations: 1,
                    duration: n,
                    fill: "both"
                })
            },
            A = s(a);
        y && A?.finished.then(() => {
            e.style.display = y
        }), s(p, "::before"), s(m, "::after")
    }
    var Ee = (e, t, ...r) => {
            let n = r.find(o => o in t);
            !n || (e.style[r[0]] = String(t[n][1]), delete t[n])
        },
        we = () => window.F2W_REACTIONS,
        U = () => window.F2W_VARIABLES,
        qe = () => window.F2W_COLLECTION_MODE_BPS,
        Re = e => window.F2W_COLLECTION_VARS?.[e] ?? {},
        Ze = (e, t) => Re(e)[t];

    function Se(e, t) {
        U()[e] = t;
        let r = ne(t);
        document.body.style.setProperty(e, r);
        let n = `data${e.slice(1)}`;
        document.body.hasAttribute(n) && document.body.setAttribute(n, r), document.dispatchEvent(new CustomEvent("f2w-set-variable", {
            detail: {
                id: e,
                value: t,
                str: r
            }
        }))
    }

    function Y(e, t) {
        document.body.setAttribute(`data-${e}`, t);
        let r = Ze(e, t) ?? {};
        for (let [n, o] of Object.entries(r)) Se(n, o)
    }

    function Qe(e, t) {
        Y(e, t), window.F2W_COLOR_SCHEMES?.includes(e) ? localStorage?.setItem(Oe, t) : window.F2W_LANGUAGES?.includes(e) && localStorage?.setItem(_e, t)
    }

    function x(e) {
        return typeof e == "number" ? e : typeof e == "boolean" ? e ? 1 : 0 : typeof e == "string" ? parseFloat(e) : 0
    }

    function L(e) {
        return String(e)
    }

    function R(e) {
        return typeof e == "string" ? e === "true" : !!e
    }

    function _(e, t) {
        if (e === void 0) return !1;
        if (H(e)) return _(U()[e.id]);
        if (typeof e == "object" && "expressionArguments" in e) {
            let r = e.expressionArguments.map(o => o.value).filter(o => o !== void 0).map(o => _(o, t)),
                n = e.expressionArguments[0]?.resolvedType ?? "STRING";
            switch (e.expressionFunction) {
                case "ADDITION":
                    return n === "FLOAT" ? r.map(x).reduce((o, i) => o + i) : r.map(L).reduce((o, i) => o + i);
                case "SUBTRACTION":
                    if (r.length !== 2) throw new Error("Invalid expression");
                    return x(r[0]) - x(r[1]);
                case "DIVISION":
                    if (r.length !== 2) throw new Error("Invalid expression");
                    return x(r[0]) / x(r[1]);
                case "MULTIPLICATION":
                    return r.map(x).reduce((o, i) => o * i);
                case "NEGATE":
                    if (r.length !== 1) throw new Error("Invalid expression");
                    return -x(r[0]);
                case "GREATER_THAN":
                    if (r.length !== 2) throw new Error("Invalid expression");
                    return x(r[0]) > x(r[1]);
                case "GREATER_THAN_OR_EQUAL":
                    if (r.length !== 2) throw new Error("Invalid expression");
                    return x(r[0]) >= x(r[1]);
                case "LESS_THAN":
                    if (r.length !== 2) throw new Error("Invalid expression");
                    return x(r[0]) < x(r[1]);
                case "LESS_THAN_OR_EQUAL":
                    if (r.length !== 2) throw new Error("Invalid expression");
                    return x(r[0]) <= x(r[1]);
                case "EQUALS":
                    if (r.length !== 2) throw new Error("Invalid expression");
                    return n === "FLOAT" ? x(r[0]) === x(r[1]) : n === "BOOLEAN" ? R(r[0]) === R(r[1]) : L(r[0]) === L(r[1]);
                case "NOT_EQUAL":
                    if (r.length !== 2) throw new Error("Invalid expression");
                    return n === "FLOAT" ? x(r[0]) !== x(r[1]) : n === "BOOLEAN" ? R(r[0]) !== R(r[1]) : L(r[0]) !== L(r[1]);
                case "AND":
                    if (r.length !== 2) throw new Error("Invalid expression");
                    return R(r[0]) && R(r[1]);
                case "OR":
                    if (r.length !== 2) throw new Error("Invalid expression");
                    return R(r[0]) || R(r[1]);
                case "NOT":
                    if (r.length !== 1) throw new Error("Invalid expression");
                    return !R(r[0]);
                case "VAR_MODE_LOOKUP":
                default:
                    return console.warn(`Expression not implemented yet: ${e.expressionFunction}`), !1
            }
        } else return e
    }

    function J(e, t, r) {
        let n = e.map(o => Je(o, t, r));
        return (o, i) => {
            let c = n.map(f => f(o, i)).filter(f => !!f);
            if (c.length) return (f, d) => c.forEach(h => h(f, d))
        }
    }

    function Je(e, t, r) {
        for (; e.type === "ALIAS";) e = we()[e.alias];
        let n = et(e, t, r);
        return o => {
            if (e.type !== "ANIMATE" && r === "drag") {
                let i = o.detail;
                if (!i.handled) return i.handled = !0, n(o)
            }
            if (!M) {
                if (e.type === "ANIMATE" && e.rootId) {
                    let i = document.getElementById(e.rootId);
                    if (i?.parentElement) {
                        let c = W(n(o));
                        if (c) {
                            let f = i?.parentElement;
                            for (; f && ((f.f2w_reset || (f.f2w_reset = [])).push(c), f = f.parentElement, f?.tagName !== "BODY"););
                        }
                        return c
                    }
                }
                return n(o)
            }
        }
    }

    function et(action, bound, trigger) {
        switch (action.type) {
            case "BACK":
                return () => (window.F2W_PREVIEW_BACK ?? history.back)();
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
                if (variableId && variableValue?.value !== void 0) return () => Se(variableId, _(variableValue.value, variableId));
                break;
            case "SET_VARIABLE_MODE":
                let {
                    variableCollectionName, variableModeName
                } = action;
                if (variableCollectionName && variableModeName) return () => Qe(variableCollectionName, variableModeName);
                break;
            case "CONDITIONAL":
                let blocks = action.conditionalBlocks.map(e => {
                    let t = J(e.actions, bound, trigger),
                        {
                            condition: r
                        } = e;
                    return {
                        test: r ? () => R(_(r.value)) : () => !0,
                        run: t
                    }
                });
                return () => {
                    let e = [];
                    for (let t of blocks)
                        if (t.test()) {
                            let r = t.run();
                            r && e.push(r);
                            break
                        } if (e.length) return t => e.forEach(r => r(t))
                };
            case "KEY_CONDITION":
                let run = J(action.actions, bound, trigger),
                    keyCode = action.keyCodes[0],
                    shiftKey = action.keyCodes.slice(1).includes(16),
                    ctrlKey = action.keyCodes.slice(1).includes(17),
                    altKey = action.keyCodes.slice(1).includes(18),
                    metaKey = action.keyCodes.slice(1).includes(91);
                return e => {
                    if (e instanceof KeyboardEvent) {
                        if (e.keyCode !== keyCode || e.ctrlKey !== ctrlKey || e.altKey !== altKey || e.metaKey !== metaKey || e.shiftKey !== shiftKey) return;
                        e.preventDefault(), e.stopPropagation(), run(e)
                    }
                };
            case "CLOSE_OVERLAY": {
                if (action.self) return e => e?.target?.f2w_close?.();
                if (action.overlayId) {
                    let e = document.getElementById(action.overlayId);
                    if (!e) break;
                    return () => e.f2w_close?.()
                }
                break
            }
            case "SCROLL_TO":
                if (!action.destinationId) break;
                let elt = document.getElementById(action.destinationId);
                if (!elt) break;
                return e => {
                    e?.currentTarget instanceof HTMLAnchorElement && e?.preventDefault(), elt.scrollIntoView({
                        behavior: action.transition?.type ? "smooth" : "instant"
                    })
                };
            case "OVERLAY":
                if (!action.destinationId) break;
                let overlay = document.getElementById(action.destinationId);
                if (!overlay) break;
                let modal = Array(...overlay.children).find(e => e.tagName !== "TEMPLATE");
                if (!modal) break;
                let {
                    transition, overlayPositionType, overlayRelativePosition
                } = action, duration = Math.round(1e3 * (transition?.duration ?? 0)), animations = [{
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
                    if (trigger === "hover") {
                        let n = bound.f2w_mouseleave_remove?.();
                        if (n) {
                            let o = i => {
                                be(i, bound) && be(i, modal) && (n(), document.removeEventListener("mousemove", o))
                            };
                            document.addEventListener("mousemove", o)
                        }
                    }
                    let e = animations.slice(0),
                        t = w(bound.getBoundingClientRect().left + (overlayRelativePosition?.x ?? 0)),
                        r = w(bound.getBoundingClientRect().top + (overlayRelativePosition?.y ?? 0));
                    return modal.style.setProperty("left", t), modal.style.setProperty("top", r), transition?.type === "MOVE_IN" && (transition.direction === "LEFT" ? e.push({
                        eltId: modal.id,
                        props: [{
                            key: "left",
                            from: "100%",
                            to: t
                        }]
                    }) : transition.direction === "RIGHT" ? e.push({
                        eltId: modal.id,
                        props: [{
                            key: "left",
                            from: "0px",
                            to: t
                        }, {
                            key: "translate",
                            from: "-100% 0px",
                            to: "0px 0px"
                        }]
                    }) : transition.direction === "TOP" ? e.push({
                        eltId: modal.id,
                        props: [{
                            key: "top",
                            from: "100%",
                            to: r
                        }]
                    }) : transition.direction === "BOTTOM" && e.push({
                        eltId: modal.id,
                        props: [{
                            key: "top",
                            from: "0px",
                            to: r
                        }, {
                            key: "translate",
                            from: "0px -100%",
                            to: "0px 0px"
                        }]
                    })), Q(e, transition?.easing, duration, bound, trigger, `${trigger}(manual_overlay)`, overlay)()
                } : (transition?.type === "MOVE_IN" ? animations.push(...oe(modal.id, overlayPositionType, transition)) : transition?.type && console.warn("Unsupported transition:", transition), Q(animations, transition?.easing, duration, bound, trigger, `${trigger}(overlay)`, overlay));
            case "ANIMATE": {
                let {
                    animations: e,
                    transition: t,
                    rootId: r,
                    reset: n
                } = action, o = Math.round(1e3 * (t?.duration ?? 0)), i = Q(e, t?.easing, o, bound, trigger, n ? `${trigger}(+reset)` : trigger);
                return n && r ? (c, f) => {
                    let d = document.getElementById(r);
                    if (d) {
                        let {
                            f2w_reset: h
                        } = d;
                        h?.length && (delete d.f2w_reset, h.reverse().forEach(g => g(void 0, !0)))
                    }
                    return i(c, f)
                } : i
            }
            case "UPDATE_MEDIA_RUNTIME": {
                if (!action.destinationId) break;
                let e = document.getElementById(action.destinationId);
                if (!e) break;
                switch (action.mediaAction) {
                    case "MUTE":
                        return ae(e);
                    case "UNMUTE":
                        return le(e);
                    case "TOGGLE_MUTE_UNMUTE":
                        return se(e);
                    case "PLAY":
                        return ue(e);
                    case "PAUSE":
                        return de(e);
                    case "TOGGLE_PLAY_PAUSE":
                        return ce(e);
                    case "SKIP_BACKWARD":
                        return me(e, action.amountToSkip);
                    case "SKIP_FORWARD":
                        return fe(e, action.amountToSkip);
                    case "SKIP_TO":
                        return pe(e, action.newTimestamp)
                }
            }
            default:
                return () => console.warn("Action not implemented yet: " + action.type)
        }
        return () => {}
    }
    var xe = 9999;

    function Q(e, t = "linear", r, n, o, i, c) {
        return f => {
            let d = e;
            c && (document.body.parentElement.style.overflow = "hidden", d = [{
                eltId: c.id,
                props: [{
                    key: "z-index",
                    from: 0,
                    to: xe++
                }]
            }, ...d]);
            let h = O(d, t, r, n, o, i, f),
                g = W((E, T) => {
                    c && (xe--, document.body.parentElement.style.overflow = ""), O(h, t, T ? 0 : r, n, o, `${i}(revert)`)
                });
            return c && (c.f2w_close = g), g
        }
    }
    var he = new Map;

    function O(e, t, r, n, o, i, c) {
        let f = [],
            d = new Set;
        if (o === "drag") return tt(e, t, r, n, c.detail), [];
        for (let {
                eltId: g,
                altId: E,
                props: T,
                reactions: a
            }
            of e) {
            let p = document.getElementById(g);
            if (!p) {
                let m = he.get(g);
                m && (p = document.getElementById(m))
            }
            if (!p) {
                D(`Can't find element for id: ${g}`);
                continue
            }
            if (E) {
                let m = document.getElementById(E);
                if (!m) {
                    let s = document.getElementById($(E));
                    if (!s) {
                        D(`Can't find template for id: ${E}`);
                        continue
                    }
                    m = (s.content?.cloneNode(!0)).querySelector("*")
                }
                let {
                    f2w_mouseup: y
                } = p, u = p.f2w_mouseleave_remove?.();
                if (u && Le(m, u), y && m.addEventListener("mouseup", y), (u || y) && Ve(m), Me(m, !0, r), r) {
                    let s = function(A, l) {
                        if (A.f2w_styles_backup?.[l]) return A.f2w_styles_backup[l];
                        let v = getComputedStyle(A).getPropertyValue(l);
                        return (A.f2w_styles_backup || (A.f2w_styles_backup = {}))[l] = v, v
                    };
                    var h = s;
                    p.insertAdjacentElement("afterend", m), G(p, [{
                        key: "display",
                        from: s(p, "display"),
                        to: "none"
                    }], t, r, d), G(m, [{
                        key: "opacity",
                        from: 0,
                        to: s(m, "opacity")
                    }, {
                        key: "display",
                        from: "none",
                        to: s(m, "display")
                    }], t, r, d)
                } else {
                    p.parentElement.replaceChild(m, p);
                    let s = document.getElementById($(g));
                    s || (s = document.createElement("template"), s.id = $(g), s.innerHTML = p.outerHTML, m.insertAdjacentElement("afterend", s)), he.set(g, m.id)
                }
                f.push({
                    eltId: m.id,
                    altId: p.id
                }), isNaN(+getComputedStyle(m).getPropertyValue("--f2w-order")) || d.add(m.parentElement)
            } else {
                let m = (T || []).map(u => {
                    let s = Te(p, u.key, u.from),
                        A = Te(p, u.key, u.to);
                    return {
                        key: u.key,
                        pseudo: u.pseudo,
                        from: s,
                        to: A
                    }
                }).filter(u => u.from !== u.to);
                G(p, m, t, r, d), a && (o !== "hover" && p.f2w_mouseleave_remove?.(), a.forEach(u => Ie(p, u.type, u.to, r)));
                let y = {
                    eltId: g,
                    props: m.map(u => {
                        let s = {
                            key: u.key,
                            from: u.to,
                            to: u.from
                        };
                        return u.pseudo && (s.pseudo = u.pseudo), s
                    })
                };
                a && (y.reactions = a.map(u => ({
                    type: u.type,
                    from: u.to,
                    to: u.from
                }))), f.push(y)
            }
        }
        for (let g of d) {
            let E = Array.from(g.children).map((a, p) => ({
                    it: a,
                    i: p
                })),
                T = !1;
            E.sort((a, p) => {
                let m = +(getComputedStyle(a.it).getPropertyValue("--f2w-order") || "99999"),
                    y = +(getComputedStyle(p.it).getPropertyValue("--f2w-order") || "99999");
                return m - y
            }).forEach((a, p) => {
                T ? g.appendChild(a.it) : T = p !== a.i
            })
        }
        return f
    }

    function Ve(e) {
        let t = e;
        for (; t;) t.classList.remove("pointer-events-none"), t = t.parentElement
    }

    function tt(e, t, r, n, o) {
        if (o.handled) return;
        let i = n.getBoundingClientRect(),
            c = O(e.filter(a => a.props).map(({
                eltId: a,
                props: p
            }) => ({
                eltId: a,
                props: p
            })), "linear", 0, n, "click", "drag_start(tmp)"),
            f = n.getBoundingClientRect(),
            d = f.left - i.left,
            h = f.top - i.top,
            g = Math.sqrt(d * d + h * h);
        O(c, "linear", 0, n, "click", "drag_start(tmp undo)");
        let {
            x: E,
            y: T
        } = ee(o.start, o.end);
        if (E > 0 && d > 0 || E < 0 && d < 0 || d === 0 && (T > 0 && h > 0 || T < 0 && h < 0)) {
            o.handled = !0;
            let a = e.map(y => ({
                    ...y,
                    swapped: !1,
                    props: y.props?.map(u => ({
                        ...u,
                        curr: u.from
                    }))
                })),
                p = y => {
                    let {
                        x: u,
                        y: s
                    } = ee(y.start, y.end), A = (u * d + s * h) / g;
                    return Math.max(0, Math.min(100, 100 * A / g))
                },
                m = y => {
                    y.end.preventDefault(), y.end.stopPropagation();
                    let u = p(y);
                    O(k(a.map(s => {
                        let {
                            reactions: A,
                            ...l
                        } = s;
                        if (s.props) return {
                            ...l,
                            props: s.props.map(v => {
                                let b = st(v, u),
                                    C = v.curr;
                                return v.curr = b, {
                                    ...v,
                                    from: C,
                                    to: b
                                }
                            })
                        };
                        if (s.altId) {
                            if (u < 50 && s.swapped) return s.swapped = !1, {
                                altId: s.eltId,
                                eltId: s.altId
                            };
                            if (u >= 50 && !s.swapped) return s.swapped = !0, l
                        }
                    })), "linear", 0, n, "click", "dragging")
                };
            m(o), n.f2w_drag_listener = y => {
                if (m(y), y.finished) {
                    let u = p(y);
                    O(k(a.map(s => {
                        if (s.props) {
                            let A = u < 50 ? void 0 : s.reactions;
                            return {
                                eltId: s.eltId,
                                props: s.props.map(l => ({
                                    ...l,
                                    from: l.curr,
                                    to: u < 50 ? l.from : l.to
                                })),
                                reactions: A
                            }
                        }
                        if (s.altId) {
                            if (u < 50 && s.swapped) return s.swapped = !1, {
                                altId: s.eltId,
                                eltId: s.altId
                            };
                            if (u >= 50 && !s.swapped) return s.swapped = !0, s
                        }
                    })), t, r, n, "click", "drag_end")
                }
            }
        }
    }

    function Te(e, t, r) {
        return r !== "$current" ? r : getComputedStyle(e).getPropertyValue(t)
    }

    function Me(e, t = !1, r = 0) {
        for (let n of re)
            for (let o of nt(e, `[data-reaction-${n}]`, t)) Ie(o, n, o.getAttribute(`data-reaction-${n}`), r)
    }

    function nt(e, t, r = !1) {
        let n = [...e.querySelectorAll(t)];
        return r && e.matches(t) && n.unshift(e), n
    }

    function Ie(e, t, r = "", n = 0) {
        if (!r && t !== "hover") {
            ot(e, t);
            return
        }
        let o = 0;
        if (r[0] === "T") {
            let d = r.indexOf("ms");
            o = parseFloat(r.slice(1, d)) || 0, r = r.slice(d + 3)
        }
        let i = we(),
            c = k(r.split(",").map(d => i[d])),
            f = J(c, e, t);
        if (t === "timeout") {
            rt(e, () => f(), o + n);
            return
        }
        if (Ve(e), t === "press") {
            let d, h = () => {
                d?.(), d = void 0
            };
            e.f2w_mouseup = h, K(e, "mousedown", g => {
                d?.(), d = f(g)
            }, t, I(e, "mouseup", h))
        } else if (t === "drag") K(e, "dragging", d => {
            f(d)
        }, t);
        else if (t === "hover") {
            let d, h = p => {
                    d || (d = W(f(p)))
                },
                g = e.f2w_mouseleave_remove?.(),
                E = () => {
                    d?.(), d = void 0, g?.()
                },
                T = setTimeout(() => {
                    e.matches(":hover") && h()
                }, n),
                a = Le(e, E, T);
            K(e, "mouseenter", h, t, a)
        } else t === "keydown" && !e.getAttribute("tabindex") && e.setAttribute("tabindex", "-1"), t === "appear" && at.observe(e), K(e, t, d => {
            t !== "keydown" && d.stopPropagation(), o ? setTimeout(() => f(d), o) : f(d)
        }, t)
    }

    function Le(e, t, r = 0) {
        let n = I(e, "mouseleave", t),
            o = () => (n(), clearTimeout(r), e.f2w_mouseleave === t && delete e.f2w_mouseleave, e.f2w_mouseleave_remove === o && delete e.f2w_mouseleave_remove, t);
        return e.f2w_mouseleave = t, e.f2w_mouseleave_remove = o
    }

    function be({
        clientX: e,
        clientY: t
    }, r) {
        let {
            top: n,
            left: o,
            right: i,
            bottom: c
        } = r.getBoundingClientRect();
        return e > i + 2 || e < o - 2 || t > c + 2 || t < n - 2
    }

    function Pe(e) {
        return `f2w_cleanup_${e}`
    }

    function rt(e, t, r) {
        let n = setTimeout(t, r);
        e.f2w_cleanup_timeout?.(), e.f2w_cleanup_timeout = () => {
            delete e.f2w_cleanup_timeout, clearTimeout(n)
        }
    }

    function ot(e, t) {
        let r = Pe(t);
        e[r]?.()
    }

    function K(e, t, r, n, ...o) {
        let i = [...o, I(e, t, r)],
            c = Pe(n);
        e[c]?.(), e[c] = () => {
            delete e[c], i.forEach(f => f())
        }
    }

    function I(e, t, r, n) {
        let o = i => {
            !e.isConnected || r(i)
        };
        return e.addEventListener(t, o, n), () => {
            e.removeEventListener(t, o, n)
        }
    }
    var Oe = "f2w-color-scheme",
        _e = "f2w-lang";
    if (window.F2W_THEME_SWITCH = e => window.F2W_COLOR_SCHEMES?.forEach(t => Y(t, e)), window.F2W_COLOR_SCHEMES) {
        let e = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
            t = localStorage?.getItem(Oe);
        P("body", () => {
            let r = document.body.getAttribute("data-preview-theme") ?? t ?? e;
            window.F2W_THEME_SWITCH?.(r)
        })
    }
    if (window.F2W_LANGUAGES) {
        let e = localStorage?.getItem(_e);
        P("body", () => {
            window.F2W_LANGUAGES?.forEach(t => {
                let r = Object.fromEntries(Object.entries(Re(t)).map(([o]) => [o.toLowerCase(), o])),
                    n = [...navigator.languages];
                e && n.unshift(e);
                for (let o of n) {
                    o = o.toLowerCase();
                    let i = o.split("-")[0],
                        c = r[o] ?? r[i];
                    if (c) {
                        Y(t, c);
                        break
                    }
                }
            })
        })
    }
    var ve = {},
        it = Object.fromEntries(Object.entries(qe()).map(([e, t]) => [e, Object.entries(t).map(([r, {
            minWidth: n
        }]) => ({
            name: r,
            minWidth: n
        }))]));

    function Ne() {
        let e = window.visualViewport?.width || window.innerWidth;
        for (let [t, r] of Object.entries(it)) {
            let n = [...r],
                o = n.splice(0, 1)[0].name;
            for (let {
                    name: i,
                    minWidth: c
                }
                of n) e >= c && (o = i);
            o !== ve[t] && (Y(t, o), ve[t] = o)
        }
    }
    var M = !1;
    P("body", () => {
        let e, t = !1;
        I(document, "mousedown", r => {
            e = r, M = !1
        }), I(document, "mousemove", r => {
            if (e && ee(e, r).dist > 2) {
                let n = {
                    start: e,
                    end: r
                };
                M ? e.target?.f2w_drag_listener?.(n) : (e.target?.dispatchEvent(new CustomEvent("dragging", {
                    detail: n
                })), M = !0, t = !0)
            }
        }), I(document, "mouseup", r => {
            e && M && e.target?.f2w_drag_listener?.({
                start: e,
                end: r,
                finished: !0
            }), e = void 0, M = !1
        }), I(document, "mouseup", r => {
            e && M && e.target?.f2w_drag_listener?.({
                start: e,
                end: r,
                finished: !0
            }), e = void 0, M = !1
        }), I(document, "click", r => {
            t && (t = !1, r.preventDefault(), r.stopPropagation())
        }, {
            capture: !0
        }), Ne(), window.addEventListener("resize", Ne)
    }), addEventListener("DOMContentLoaded", () => Me(document)), addEventListener("DOMContentLoaded", () => {
        if ("mediumZoom" in window) {
            let e = mediumZoom("[data-zoomable]");
            e.on("open", t => {
                let r = getComputedStyle(t.target).objectFit,
                    n = t.detail.zoom.getZoomedImage();
                r && n && (n.style.objectFit = r)
            }), e.on("closed", t => {
                let r = t.detail.zoom.getZoomedImage();
                r.style.objectFit = ""
            })
        }
    });

    function Ce(e) {
        return e.endsWith("px") || e.endsWith("%") || e.startsWith("calc")
    }

    function Ae(e) {
        return e.startsWith("calc") ? e.slice(4) : e
    }

    function st({
        from: e,
        to: t
    }, r) {
        if (e === t) return t;
        if (typeof e == "number" && typeof t == "number") return e + (t - e) * (r / 100);
        if (typeof e == "string" && typeof t == "string") {
            if (e === "none" || t === "none" || e === "auto" || t === "auto") return r < 50 ? e : t;
            if (e.endsWith("px") && t.endsWith("px")) {
                let n = parseFloat(e),
                    o = parseFloat(t);
                return w(n + (o - n) * (r / 100))
            }
            if (e.endsWith("%") && t.endsWith("%")) {
                let n = parseFloat(e),
                    o = parseFloat(t);
                return X(n + (o - n) * (r / 100))
            }
            if (Ce(e) && Ce(t)) {
                let n = Ae(e),
                    o = Ae(t);
                return `calc(${n} + (${o} - ${n}) * ${r/100})`
            }
            if (e.startsWith("rgb") && t.startsWith("rgb")) {
                let n = e.match(/\d+/g).map(Number),
                    o = t.match(/\d+/g).map(Number);
                return `rgb(${n.map((i,c)=>i+(o[c]-i)*(r/100)).join(",")})`
            }
        }
        return r < 50 ? e : t
    }

    function ee(e, t) {
        let r = t.clientX - e.clientX,
            n = t.clientY - e.clientY;
        return {
            x: r,
            y: n,
            dist: Math.sqrt(Math.pow(r, 2) + Math.pow(n, 2))
        }
    }
    P("[data-bound-characters]", e => {
        let t = () => {
            let r = e.getAttribute("data-bound-characters"),
                n = L(_(U()[r]));
            n !== e.textContent && (e.textContent = n)
        };
        return t(), document.addEventListener("f2w-set-variable", t), () => document.removeEventListener("f2w-set-variable", t)
    }), P("[data-bound-visible]", e => {
        let t = () => {
            let r = e.getAttribute("data-bound-visible"),
                n = L(_(U()[r]));
            n !== void 0 && e.setAttribute("data-visible", n)
        };
        return t(), document.addEventListener("f2w-set-variable", t), () => document.removeEventListener("f2w-set-variable", t)
    });
    var at = new IntersectionObserver((e, t) => {
        e.forEach(r => {
            r.isIntersecting && (t.unobserve(r.target), r.target.dispatchEvent(new CustomEvent("appear")))
        })
    }, {
        threshold: .1
    })
})();