 window.F2W_REACTIONS = (() => {
    const t = [
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
            key: "box-shadow",
            from: "revert",
            to: "0px 0px 20.3px #bababa,0px 0px 11.6px #bababa,0px 0px 6.8px #bababa,0px 0px 3.4px #bababa,0px 0px 1px #bababa,0px 0px 0.5px #bababa"
        }],
        [{
            key: "top",
            from: "208px",
            to: "121px"
        }, {
            key: "height",
            from: "92px",
            to: "179px"
        }],
        [{
            key: "--f2w-order",
            from: "0",
            to: "4"
        }, {
            key: "top",
            from: "calc(-15px + 50%)",
            to: "calc(-59.5px + 50%)"
        }],
        [{
            key: "display",
            from: "inline",
            to: "-webkit-inline-box"
        }, {
            key: "--f2w-order",
            from: "0",
            to: "1"
        }, {
            key: "top",
            from: "calc(-15px + 50%)",
            to: "30px"
        }, {
            key: "width",
            from: "max-content",
            to: "236px"
        }, {
            key: "-webkit-box-orient",
            from: "revert",
            to: "vertical"
        }, {
            key: "overflow",
            from: "revert",
            to: "hidden"
        }, {
            key: "text-overflow",
            from: "revert",
            to: "ellipsis"
        }, {
            key: "-webkit-line-clamp",
            from: "revert",
            to: "1"
        }],
        [{
            key: "--f2w-order",
            from: "0",
            to: "1"
        }, {
            key: "top",
            from: "calc(-15px + 50%)",
            to: "30px"
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
            from: "Leer M\xE1s ",
            to: "Leer M\xE1s",
            key: "$innerHTML"
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
            from: "none",
            to: "flex"
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
            key: "top",
            from: "311px",
            to: "211px"
        }, {
            key: "height",
            from: "92px",
            to: "192px"
        }],
        [{
            key: "--f2w-order",
            from: "0",
            to: "1"
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
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[0],
                reactions: [{
                    type: "hover",
                    from: "1"
                }],
                eltId: "Ver_m_s_"
            }],
            rootId: "Ver_m_s_"
        },
        6: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,6",
                    to: "T800ms,7"
                }],
                eltId: "_1"
            }, {
                eltId: "Group",
                altId: "Group_1"
            }],
            rootId: "_1"
        },
        7: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,7",
                    to: "T800ms,8"
                }],
                eltId: "_1"
            }, {
                eltId: "Group_1",
                altId: "Group_3"
            }],
            rootId: "_1"
        },
        8: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,8",
                    to: "T800ms,9"
                }],
                eltId: "_1"
            }, {
                eltId: "Group_3",
                altId: "Group_5"
            }],
            rootId: "_1"
        },
        9: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,9",
                    to: "T800ms,6"
                }],
                eltId: "_1"
            }, {
                eltId: "Group_5",
                altId: "Group"
            }],
            rootId: "_1"
        },
        18: {
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
                    from: "18"
                }, {
                    type: "click",
                    to: "19"
                }],
                eltId: "WhatsApp"
            }, {
                props: t[1],
                eltId: "Vertical_container"
            }],
            rootId: "WhatsApp"
        },
        19: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[2],
                reactions: [{
                    type: "click",
                    from: "19"
                }],
                eltId: "WhatsApp"
            }, {
                props: t[3],
                eltId: "Vertical_container"
            }, {
                props: t[4],
                eltId: "Group_1_0"
            }, {
                props: t[4],
                eltId: "Frame_4"
            }, {
                props: t[4],
                eltId: "https_lottiefiles_com_animations_doctor_consultation_E1yd0wb6cx"
            }, {
                props: t[4],
                eltId: "Frame_5"
            }, {
                props: t[5],
                eltId: "I1838_1253_1125_460"
            }, {
                props: t[5],
                eltId: "I1838_1253_1125_461"
            }, {
                props: t[4],
                eltId: "mi_circle_error"
            }, {
                props: t[6],
                eltId: "Vector_21"
            }, {
                eltId: "linea_whatsApp",
                altId: "linea_whatsApp_0"
            }],
            rootId: "WhatsApp"
        },
        38: {
            type: "ANIMATE",
            animations: [{
                props: t[7],
                reactions: [{
                    type: "hover",
                    to: "18"
                }],
                eltId: "WhatsApp"
            }, {
                props: t[4],
                eltId: "Vertical_container"
            }, {
                props: t[8],
                eltId: "Group_1_0"
            }, {
                props: t[8],
                eltId: "Frame_4"
            }, {
                props: t[8],
                eltId: "https_lottiefiles_com_animations_doctor_consultation_E1yd0wb6cx"
            }, {
                props: t[8],
                eltId: "Frame_5"
            }, {
                props: t[9],
                eltId: "I1838_1253_1125_460"
            }, {
                props: t[9],
                eltId: "I1838_1253_1125_461"
            }, {
                props: t[8],
                eltId: "mi_circle_error"
            }, {
                props: t[10],
                eltId: "Vector_21"
            }, {
                eltId: "linea_whatsApp_0",
                altId: "linea_whatsApp"
            }],
            rootId: "WhatsApp"
        },
        43: {
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
        47: {
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
        48: {
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
        51: {
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
        52: {
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
        55: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[11],
                reactions: [{
                    type: "hover",
                    from: "55"
                }],
                eltId: "mobile_1"
            }, {
                props: t[12],
                eltId: "Frame_7"
            }, {
                props: t[13],
                eltId: "I1879_1679_1872_1838"
            }, {
                props: t[5],
                eltId: "I1879_1679_1872_1841"
            }, {
                props: t[5],
                eltId: "I1879_1679_1872_1843"
            }, {
                props: t[6],
                eltId: "Line"
            }, {
                props: t[4],
                eltId: "Image_0"
            }],
            rootId: "mobile_1"
        },
        70: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[11],
                reactions: [{
                    type: "hover",
                    from: "70"
                }],
                eltId: "mobile_2"
            }, {
                props: t[12],
                eltId: "Frame_8"
            }, {
                props: t[13],
                eltId: "I1879_1685_1872_1848"
            }, {
                props: t[5],
                eltId: "I1879_1685_1872_1830"
            }, {
                props: t[5],
                eltId: "I1879_1685_1872_1832"
            }, {
                props: t[6],
                eltId: "Line_1"
            }, {
                props: t[4],
                eltId: "Image_1"
            }],
            rootId: "mobile_2"
        },
        85: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[11],
                reactions: [{
                    type: "hover",
                    from: "85"
                }],
                eltId: "mobile_3"
            }, {
                props: t[12],
                eltId: "Frame_9"
            }, {
                props: t[14],
                eltId: "I1879_1688_1872_1816"
            }, {
                props: t[5],
                eltId: "I1879_1688_1872_1819"
            }, {
                props: t[5],
                eltId: "I1879_1688_1872_1821"
            }, {
                props: t[6],
                eltId: "Line_3"
            }, {
                props: t[4],
                eltId: "Image_2"
            }],
            rootId: "mobile_3"
        },
        100: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[11],
                reactions: [{
                    type: "hover",
                    from: "100"
                }],
                eltId: "mobile_4"
            }, {
                props: t[12],
                eltId: "Frame_10"
            }, {
                props: t[15],
                eltId: "I1879_1691_1872_1805"
            }, {
                props: t[5],
                eltId: "I1879_1691_1872_1808"
            }, {
                props: t[5],
                eltId: "I1879_1691_1872_1810"
            }, {
                props: t[6],
                eltId: "Line_5"
            }, {
                props: t[4],
                eltId: "Image_3"
            }],
            rootId: "mobile_4"
        },
        115: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[11],
                reactions: [{
                    type: "hover",
                    from: "115"
                }],
                eltId: "mobile_5"
            }, {
                props: t[12],
                eltId: "Frame_11"
            }, {
                props: t[15],
                eltId: "I1879_1694_1872_1794"
            }, {
                props: t[16],
                eltId: "I1879_1694_1872_1797"
            }, {
                props: t[5],
                eltId: "I1879_1694_1872_1799"
            }, {
                props: t[6],
                eltId: "Line_7"
            }, {
                props: t[4],
                eltId: "Image_4"
            }],
            rootId: "mobile_5"
        },
        130: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[11],
                reactions: [{
                    type: "hover",
                    from: "130"
                }],
                eltId: "mobile_6"
            }, {
                props: t[12],
                eltId: "Frame_12"
            }, {
                props: t[15],
                eltId: "I1879_1697_1872_1783"
            }, {
                props: t[5],
                eltId: "I1879_1697_1872_1786"
            }, {
                props: t[5],
                eltId: "I1879_1697_1872_1788"
            }, {
                props: t[6],
                eltId: "Line_9"
            }, {
                props: t[4],
                eltId: "Image_5"
            }],
            rootId: "mobile_6"
        },
        145: {
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
                    from: "145"
                }],
                eltId: "Leer_m_s_"
            }, {
                props: t[17],
                eltId: "__139"
            }],
            rootId: "Leer_m_s_"
        },
        151: {
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
                    from: "151"
                }],
                eltId: "Agendar_Cita"
            }],
            rootId: "Agendar_Cita"
        },
        156: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[18],
                reactions: [{
                    type: "hover",
                    from: "156"
                }],
                eltId: "Agendar"
            }, {
                props: t[19],
                eltId: "I1838_1417_1122_438"
            }, {
                props: t[19],
                eltId: "__158"
            }],
            rootId: "Agendar"
        },
        167: {
            type: "ANIMATE",
            animations: [{
                props: t[20],
                eltId: "tres_barras"
            }, {
                props: t[10],
                eltId: "Vector_39"
            }, {
                props: t[21],
                eltId: "Frame_12_0"
            }, {
                props: t[8],
                eltId: "Image_10"
            }, {
                props: t[4],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_41",
                altId: "Vector_43"
            }, {
                props: t[22],
                eltId: "Frame_13_0"
            }, {
                props: t[22],
                eltId: "Frame_8_0"
            }, {
                props: t[4],
                eltId: "ph_house_fill"
            }, {
                props: t[6],
                eltId: "Vector_51"
            }, {
                props: t[5],
                eltId: "I1840_1464_1263_760"
            }, {
                props: t[4],
                eltId: "Text_input_1"
            }, {
                props: t[5],
                eltId: "I1840_1464_1263_763"
            }, {
                props: t[5],
                eltId: "I1840_1464_1263_764"
            }, {
                props: t[5],
                eltId: "I1840_1464_1263_765"
            }],
            rootId: "tres_barras"
        },
        168: {
            type: "ALIAS",
            alias: "167"
        },
        175: {
            type: "ANIMATE",
            animations: [{
                props: t[23],
                eltId: "tres_barras"
            }, {
                props: t[6],
                eltId: "Vector_39"
            }, {
                props: t[22],
                eltId: "Frame_12_0"
            }, {
                props: t[4],
                eltId: "Image_10"
            }, {
                props: t[8],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_43",
                altId: "Vector_41"
            }, {
                props: t[21],
                eltId: "Frame_13_0"
            }, {
                props: t[21],
                eltId: "Frame_8_0"
            }, {
                props: t[8],
                eltId: "ph_house_fill"
            }, {
                props: t[10],
                eltId: "Vector_51"
            }, {
                props: t[9],
                eltId: "I1840_1464_1263_760"
            }, {
                props: t[8],
                eltId: "Text_input_1"
            }, {
                props: t[9],
                eltId: "I1840_1464_1263_763"
            }, {
                props: t[9],
                eltId: "I1840_1464_1263_764"
            }, {
                props: t[9],
                eltId: "I1840_1464_1263_765"
            }],
            rootId: "tres_barras"
        },
        176: {
            type: "ANIMATE",
            animations: [{
                props: t[23],
                eltId: "tres_barras"
            }, {
                props: t[6],
                eltId: "Vector_39"
            }, {
                props: t[22],
                eltId: "Frame_12_0"
            }, {
                props: t[4],
                eltId: "Image_10"
            }, {
                props: t[8],
                reactions: [{
                    type: "click",
                    from: "176",
                    to: "175"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_45",
                altId: "Vector_41"
            }, {
                props: t[9],
                reactions: [{
                    type: "click",
                    from: "209",
                    to: "208"
                }],
                eltId: "I1840_1464_1263_764"
            }, {
                props: t[9],
                reactions: [{
                    type: "click",
                    from: "216",
                    to: "215"
                }],
                eltId: "I1840_1464_1263_765"
            }, {
                props: t[9],
                eltId: "I1840_1464_1263_806"
            }, {
                props: t[21],
                eltId: "Frame_10_0"
            }, {
                props: t[8],
                eltId: "healthicons_doctor_24px"
            }, {
                props: t[10],
                eltId: "Vector_53"
            }, {
                props: t[9],
                eltId: "I1840_1464_1263_807"
            }, {
                eltId: "Text_input_4",
                altId: "Text_input_2"
            }],
            rootId: "tres_barras"
        },
        177: {
            type: "ANIMATE",
            animations: [{
                props: t[23],
                eltId: "tres_barras"
            }, {
                props: t[6],
                eltId: "Vector_39"
            }, {
                props: t[22],
                eltId: "Frame_12_0"
            }, {
                props: t[4],
                eltId: "Image_10"
            }, {
                props: t[8],
                reactions: [{
                    type: "click",
                    from: "177",
                    to: "175"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_47",
                altId: "Vector_41"
            }, {
                props: t[9],
                reactions: [{
                    type: "click",
                    from: "202",
                    to: "201"
                }],
                eltId: "I1840_1464_1263_763"
            }, {
                props: t[9],
                reactions: [{
                    type: "click",
                    from: "217",
                    to: "215"
                }],
                eltId: "I1840_1464_1263_765"
            }, {
                props: t[9],
                reactions: [{
                    type: "click",
                    from: "223",
                    to: "222"
                }],
                eltId: "I1840_1464_1263_806"
            }, {
                eltId: "Text_input_6",
                altId: "Text_input_2"
            }, {
                props: t[21],
                eltId: "Frame_9_0"
            }, {
                props: t[8],
                eltId: "lsicon_user_crowd_filled"
            }, {
                props: t[10],
                eltId: "Vector_55"
            }, {
                props: t[9],
                eltId: "I1840_1464_1263_817"
            }],
            rootId: "tres_barras"
        },
        178: {
            type: "ANIMATE",
            animations: [{
                props: t[23],
                eltId: "tres_barras"
            }, {
                props: t[6],
                eltId: "Vector_39"
            }, {
                props: t[22],
                eltId: "Frame_12_0"
            }, {
                props: t[4],
                eltId: "Image_10"
            }, {
                props: t[8],
                reactions: [{
                    type: "click",
                    from: "178",
                    to: "175"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_49",
                altId: "Vector_41"
            }, {
                props: t[9],
                reactions: [{
                    type: "click",
                    from: "203",
                    to: "201"
                }],
                eltId: "I1840_1464_1263_763"
            }, {
                props: t[9],
                reactions: [{
                    type: "click",
                    from: "210",
                    to: "208"
                }],
                eltId: "I1840_1464_1263_764"
            }, {
                props: t[9],
                reactions: [{
                    type: "click",
                    from: "224",
                    to: "222"
                }],
                eltId: "I1840_1464_1263_806"
            }, {
                eltId: "Text_input_7",
                altId: "Text_input_2"
            }, {
                props: t[21],
                eltId: "Frame_11_0"
            }, {
                props: t[8],
                eltId: "fluent_call_16_filled"
            }, {
                props: t[10],
                eltId: "Vector_57"
            }, {
                props: t[9],
                eltId: "I1840_1464_1263_827"
            }],
            rootId: "tres_barras"
        },
        201: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "175",
                    to: "176"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_43",
                altId: "Vector_45"
            }, {
                props: t[21],
                eltId: "Frame_13_0"
            }, {
                props: t[21],
                eltId: "Frame_8_0"
            }, {
                props: t[8],
                eltId: "ph_house_fill"
            }, {
                props: t[10],
                eltId: "Vector_51"
            }, {
                props: t[9],
                eltId: "I1840_1464_1263_760"
            }, {
                props: t[8],
                eltId: "Text_input_1"
            }, {
                props: t[9],
                eltId: "I1840_1464_1263_763"
            }, {
                reactions: [{
                    type: "click",
                    from: "208",
                    to: "209"
                }],
                eltId: "I1840_1464_1263_764"
            }, {
                reactions: [{
                    type: "click",
                    from: "215",
                    to: "216"
                }],
                eltId: "I1840_1464_1263_765"
            }, {
                props: t[5],
                eltId: "I1840_1464_1263_806"
            }, {
                props: t[22],
                eltId: "Frame_10_0"
            }, {
                props: t[4],
                eltId: "healthicons_doctor_24px"
            }, {
                props: t[6],
                eltId: "Vector_53"
            }, {
                props: t[5],
                eltId: "I1840_1464_1263_807"
            }, {
                eltId: "Text_input_2",
                altId: "Text_input_4"
            }],
            rootId: "tres_barras"
        },
        202: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "177",
                    to: "176"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_47",
                altId: "Vector_45"
            }, {
                props: t[9],
                reactions: [{
                    type: "click",
                    from: "202",
                    to: "201"
                }],
                eltId: "I1840_1464_1263_763"
            }, {
                props: t[5],
                reactions: [{
                    type: "click",
                    from: "208",
                    to: "209"
                }],
                eltId: "I1840_1464_1263_764"
            }, {
                reactions: [{
                    type: "click",
                    from: "217",
                    to: "216"
                }],
                eltId: "I1840_1464_1263_765"
            }, {
                reactions: [{
                    type: "click",
                    from: "223",
                    to: "222"
                }],
                eltId: "I1840_1464_1263_806"
            }, {
                props: t[22],
                eltId: "Frame_10_0"
            }, {
                props: t[4],
                eltId: "healthicons_doctor_24px"
            }, {
                props: t[6],
                eltId: "Vector_53"
            }, {
                props: t[5],
                eltId: "I1840_1464_1263_807"
            }, {
                eltId: "Text_input_6",
                altId: "Text_input_4"
            }, {
                props: t[21],
                eltId: "Frame_9_0"
            }, {
                props: t[8],
                eltId: "lsicon_user_crowd_filled"
            }, {
                props: t[10],
                eltId: "Vector_55"
            }, {
                props: t[9],
                eltId: "I1840_1464_1263_817"
            }],
            rootId: "tres_barras"
        },
        203: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "178",
                    to: "176"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_49",
                altId: "Vector_45"
            }, {
                props: t[9],
                reactions: [{
                    type: "click",
                    from: "203",
                    to: "201"
                }],
                eltId: "I1840_1464_1263_763"
            }, {
                reactions: [{
                    type: "click",
                    from: "210",
                    to: "209"
                }],
                eltId: "I1840_1464_1263_764"
            }, {
                props: t[5],
                reactions: [{
                    type: "click",
                    from: "215",
                    to: "216"
                }],
                eltId: "I1840_1464_1263_765"
            }, {
                reactions: [{
                    type: "click",
                    from: "224",
                    to: "222"
                }],
                eltId: "I1840_1464_1263_806"
            }, {
                props: t[22],
                eltId: "Frame_10_0"
            }, {
                props: t[4],
                eltId: "healthicons_doctor_24px"
            }, {
                props: t[6],
                eltId: "Vector_53"
            }, {
                props: t[5],
                eltId: "I1840_1464_1263_807"
            }, {
                eltId: "Text_input_7",
                altId: "Text_input_4"
            }, {
                props: t[21],
                eltId: "Frame_11_0"
            }, {
                props: t[8],
                eltId: "fluent_call_16_filled"
            }, {
                props: t[10],
                eltId: "Vector_57"
            }, {
                props: t[9],
                eltId: "I1840_1464_1263_827"
            }],
            rootId: "tres_barras"
        },
        208: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "175",
                    to: "177"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_43",
                altId: "Vector_47"
            }, {
                props: t[21],
                eltId: "Frame_13_0"
            }, {
                props: t[21],
                eltId: "Frame_8_0"
            }, {
                props: t[8],
                eltId: "ph_house_fill"
            }, {
                props: t[10],
                eltId: "Vector_51"
            }, {
                props: t[9],
                eltId: "I1840_1464_1263_760"
            }, {
                props: t[8],
                eltId: "Text_input_1"
            }, {
                reactions: [{
                    type: "click",
                    from: "201",
                    to: "202"
                }],
                eltId: "I1840_1464_1263_763"
            }, {
                props: t[9],
                eltId: "I1840_1464_1263_764"
            }, {
                reactions: [{
                    type: "click",
                    from: "215",
                    to: "217"
                }],
                eltId: "I1840_1464_1263_765"
            }, {
                props: t[5],
                reactions: [{
                    type: "click",
                    from: "222",
                    to: "223"
                }],
                eltId: "I1840_1464_1263_806"
            }, {
                eltId: "Text_input_2",
                altId: "Text_input_6"
            }, {
                props: t[22],
                eltId: "Frame_9_0"
            }, {
                props: t[4],
                eltId: "lsicon_user_crowd_filled"
            }, {
                props: t[6],
                eltId: "Vector_55"
            }, {
                props: t[5],
                eltId: "I1840_1464_1263_817"
            }],
            rootId: "tres_barras"
        },
        209: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "176",
                    to: "177"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_45",
                altId: "Vector_47"
            }, {
                props: t[5],
                reactions: [{
                    type: "click",
                    from: "201",
                    to: "202"
                }],
                eltId: "I1840_1464_1263_763"
            }, {
                props: t[9],
                reactions: [{
                    type: "click",
                    from: "209",
                    to: "208"
                }],
                eltId: "I1840_1464_1263_764"
            }, {
                reactions: [{
                    type: "click",
                    from: "216",
                    to: "217"
                }],
                eltId: "I1840_1464_1263_765"
            }, {
                reactions: [{
                    type: "click",
                    from: "222",
                    to: "223"
                }],
                eltId: "I1840_1464_1263_806"
            }, {
                props: t[21],
                eltId: "Frame_10_0"
            }, {
                props: t[8],
                eltId: "healthicons_doctor_24px"
            }, {
                props: t[10],
                eltId: "Vector_53"
            }, {
                props: t[9],
                eltId: "I1840_1464_1263_807"
            }, {
                eltId: "Text_input_4",
                altId: "Text_input_6"
            }, {
                props: t[22],
                eltId: "Frame_9_0"
            }, {
                props: t[4],
                eltId: "lsicon_user_crowd_filled"
            }, {
                props: t[6],
                eltId: "Vector_55"
            }, {
                props: t[5],
                eltId: "I1840_1464_1263_817"
            }],
            rootId: "tres_barras"
        },
        210: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "178",
                    to: "177"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_49",
                altId: "Vector_47"
            }, {
                reactions: [{
                    type: "click",
                    from: "203",
                    to: "202"
                }],
                eltId: "I1840_1464_1263_763"
            }, {
                props: t[9],
                reactions: [{
                    type: "click",
                    from: "210",
                    to: "208"
                }],
                eltId: "I1840_1464_1263_764"
            }, {
                props: t[5],
                reactions: [{
                    type: "click",
                    from: "215",
                    to: "217"
                }],
                eltId: "I1840_1464_1263_765"
            }, {
                reactions: [{
                    type: "click",
                    from: "224",
                    to: "223"
                }],
                eltId: "I1840_1464_1263_806"
            }, {
                eltId: "Text_input_7",
                altId: "Text_input_6"
            }, {
                props: t[22],
                eltId: "Frame_9_0"
            }, {
                props: t[4],
                eltId: "lsicon_user_crowd_filled"
            }, {
                props: t[6],
                eltId: "Vector_55"
            }, {
                props: t[5],
                eltId: "I1840_1464_1263_817"
            }, {
                props: t[21],
                eltId: "Frame_11_0"
            }, {
                props: t[8],
                eltId: "fluent_call_16_filled"
            }, {
                props: t[10],
                eltId: "Vector_57"
            }, {
                props: t[9],
                eltId: "I1840_1464_1263_827"
            }],
            rootId: "tres_barras"
        },
        215: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "175",
                    to: "178"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_43",
                altId: "Vector_49"
            }, {
                props: t[21],
                eltId: "Frame_13_0"
            }, {
                props: t[21],
                eltId: "Frame_8_0"
            }, {
                props: t[8],
                eltId: "ph_house_fill"
            }, {
                props: t[10],
                eltId: "Vector_51"
            }, {
                props: t[9],
                eltId: "I1840_1464_1263_760"
            }, {
                props: t[8],
                eltId: "Text_input_1"
            }, {
                reactions: [{
                    type: "click",
                    from: "201",
                    to: "203"
                }],
                eltId: "I1840_1464_1263_763"
            }, {
                reactions: [{
                    type: "click",
                    from: "208",
                    to: "210"
                }],
                eltId: "I1840_1464_1263_764"
            }, {
                props: t[9],
                eltId: "I1840_1464_1263_765"
            }, {
                props: t[5],
                reactions: [{
                    type: "click",
                    from: "222",
                    to: "224"
                }],
                eltId: "I1840_1464_1263_806"
            }, {
                eltId: "Text_input_2",
                altId: "Text_input_7"
            }, {
                props: t[22],
                eltId: "Frame_11_0"
            }, {
                props: t[4],
                eltId: "fluent_call_16_filled"
            }, {
                props: t[6],
                eltId: "Vector_57"
            }, {
                props: t[5],
                eltId: "I1840_1464_1263_827"
            }],
            rootId: "tres_barras"
        },
        216: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "176",
                    to: "178"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_45",
                altId: "Vector_49"
            }, {
                props: t[5],
                reactions: [{
                    type: "click",
                    from: "201",
                    to: "203"
                }],
                eltId: "I1840_1464_1263_763"
            }, {
                reactions: [{
                    type: "click",
                    from: "209",
                    to: "210"
                }],
                eltId: "I1840_1464_1263_764"
            }, {
                props: t[9],
                reactions: [{
                    type: "click",
                    from: "216",
                    to: "215"
                }],
                eltId: "I1840_1464_1263_765"
            }, {
                reactions: [{
                    type: "click",
                    from: "222",
                    to: "224"
                }],
                eltId: "I1840_1464_1263_806"
            }, {
                props: t[21],
                eltId: "Frame_10_0"
            }, {
                props: t[8],
                eltId: "healthicons_doctor_24px"
            }, {
                props: t[10],
                eltId: "Vector_53"
            }, {
                props: t[9],
                eltId: "I1840_1464_1263_807"
            }, {
                eltId: "Text_input_4",
                altId: "Text_input_7"
            }, {
                props: t[22],
                eltId: "Frame_11_0"
            }, {
                props: t[4],
                eltId: "fluent_call_16_filled"
            }, {
                props: t[6],
                eltId: "Vector_57"
            }, {
                props: t[5],
                eltId: "I1840_1464_1263_827"
            }],
            rootId: "tres_barras"
        },
        217: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "177",
                    to: "178"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_47",
                altId: "Vector_49"
            }, {
                reactions: [{
                    type: "click",
                    from: "202",
                    to: "203"
                }],
                eltId: "I1840_1464_1263_763"
            }, {
                props: t[5],
                reactions: [{
                    type: "click",
                    from: "208",
                    to: "210"
                }],
                eltId: "I1840_1464_1263_764"
            }, {
                props: t[9],
                reactions: [{
                    type: "click",
                    from: "217",
                    to: "215"
                }],
                eltId: "I1840_1464_1263_765"
            }, {
                reactions: [{
                    type: "click",
                    from: "223",
                    to: "224"
                }],
                eltId: "I1840_1464_1263_806"
            }, {
                eltId: "Text_input_6",
                altId: "Text_input_7"
            }, {
                props: t[21],
                eltId: "Frame_9_0"
            }, {
                props: t[8],
                eltId: "lsicon_user_crowd_filled"
            }, {
                props: t[10],
                eltId: "Vector_55"
            }, {
                props: t[9],
                eltId: "I1840_1464_1263_817"
            }, {
                props: t[22],
                eltId: "Frame_11_0"
            }, {
                props: t[4],
                eltId: "fluent_call_16_filled"
            }, {
                props: t[6],
                eltId: "Vector_57"
            }, {
                props: t[5],
                eltId: "I1840_1464_1263_827"
            }],
            rootId: "tres_barras"
        },
        222: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "176",
                    to: "175"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_45",
                altId: "Vector_43"
            }, {
                props: t[22],
                eltId: "Frame_13_0"
            }, {
                props: t[22],
                eltId: "Frame_8_0"
            }, {
                props: t[4],
                eltId: "ph_house_fill"
            }, {
                props: t[6],
                eltId: "Vector_51"
            }, {
                props: t[5],
                eltId: "I1840_1464_1263_760"
            }, {
                props: t[4],
                eltId: "Text_input_1"
            }, {
                props: t[5],
                eltId: "I1840_1464_1263_763"
            }, {
                reactions: [{
                    type: "click",
                    from: "209",
                    to: "208"
                }],
                eltId: "I1840_1464_1263_764"
            }, {
                reactions: [{
                    type: "click",
                    from: "216",
                    to: "215"
                }],
                eltId: "I1840_1464_1263_765"
            }, {
                props: t[9],
                eltId: "I1840_1464_1263_806"
            }, {
                props: t[21],
                eltId: "Frame_10_0"
            }, {
                props: t[8],
                eltId: "healthicons_doctor_24px"
            }, {
                props: t[10],
                eltId: "Vector_53"
            }, {
                props: t[9],
                eltId: "I1840_1464_1263_807"
            }, {
                eltId: "Text_input_4",
                altId: "Text_input_2"
            }],
            rootId: "tres_barras"
        },
        223: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "177",
                    to: "175"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_47",
                altId: "Vector_43"
            }, {
                props: t[22],
                eltId: "Frame_13_0"
            }, {
                props: t[22],
                eltId: "Frame_8_0"
            }, {
                props: t[4],
                eltId: "ph_house_fill"
            }, {
                props: t[6],
                eltId: "Vector_51"
            }, {
                props: t[5],
                eltId: "I1840_1464_1263_760"
            }, {
                props: t[4],
                eltId: "Text_input_1"
            }, {
                reactions: [{
                    type: "click",
                    from: "202",
                    to: "201"
                }],
                eltId: "I1840_1464_1263_763"
            }, {
                props: t[5],
                eltId: "I1840_1464_1263_764"
            }, {
                reactions: [{
                    type: "click",
                    from: "217",
                    to: "215"
                }],
                eltId: "I1840_1464_1263_765"
            }, {
                props: t[9],
                reactions: [{
                    type: "click",
                    from: "223",
                    to: "222"
                }],
                eltId: "I1840_1464_1263_806"
            }, {
                eltId: "Text_input_6",
                altId: "Text_input_2"
            }, {
                props: t[21],
                eltId: "Frame_9_0"
            }, {
                props: t[8],
                eltId: "lsicon_user_crowd_filled"
            }, {
                props: t[10],
                eltId: "Vector_55"
            }, {
                props: t[9],
                eltId: "I1840_1464_1263_817"
            }],
            rootId: "tres_barras"
        },
        224: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "178",
                    to: "175"
                }],
                eltId: "mage_multiply"
            }, {
                eltId: "Vector_49",
                altId: "Vector_43"
            }, {
                props: t[22],
                eltId: "Frame_13_0"
            }, {
                props: t[22],
                eltId: "Frame_8_0"
            }, {
                props: t[4],
                eltId: "ph_house_fill"
            }, {
                props: t[6],
                eltId: "Vector_51"
            }, {
                props: t[5],
                eltId: "I1840_1464_1263_760"
            }, {
                props: t[4],
                eltId: "Text_input_1"
            }, {
                reactions: [{
                    type: "click",
                    from: "203",
                    to: "201"
                }],
                eltId: "I1840_1464_1263_763"
            }, {
                reactions: [{
                    type: "click",
                    from: "210",
                    to: "208"
                }],
                eltId: "I1840_1464_1263_764"
            }, {
                props: t[5],
                eltId: "I1840_1464_1263_765"
            }, {
                props: t[9],
                reactions: [{
                    type: "click",
                    from: "224",
                    to: "222"
                }],
                eltId: "I1840_1464_1263_806"
            }, {
                eltId: "Text_input_7",
                altId: "Text_input_2"
            }, {
                props: t[21],
                eltId: "Frame_11_0"
            }, {
                props: t[8],
                eltId: "fluent_call_16_filled"
            }, {
                props: t[10],
                eltId: "Vector_57"
            }, {
                props: t[9],
                eltId: "I1840_1464_1263_827"
            }],
            rootId: "tres_barras"
        },
        257: {
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
                    from: "257"
                }],
                eltId: "Ver_m_s_0"
            }],
            rootId: "Ver_m_s_0"
        },
        262: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,262",
                    to: "T800ms,263"
                }],
                eltId: "_1_0"
            }, {
                eltId: "Group_16",
                altId: "Group_18"
            }],
            rootId: "_1_0"
        },
        263: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,263",
                    to: "T800ms,264"
                }],
                eltId: "_1_0"
            }, {
                eltId: "Group_18",
                altId: "Group_20"
            }],
            rootId: "_1_0"
        },
        264: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,264",
                    to: "T800ms,265"
                }],
                eltId: "_1_0"
            }, {
                eltId: "Group_20",
                altId: "Group_22"
            }],
            rootId: "_1_0"
        },
        265: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,265",
                    to: "T800ms,262"
                }],
                eltId: "_1_0"
            }, {
                eltId: "Group_22",
                altId: "Group_16"
            }],
            rootId: "_1_0"
        },
        274: {
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
                    from: "274"
                }, {
                    type: "click",
                    to: "275"
                }],
                eltId: "WhatsApp_0"
            }, {
                props: t[1],
                eltId: "Vertical_container_1"
            }],
            rootId: "WhatsApp_0"
        },
        275: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[2],
                reactions: [{
                    type: "click",
                    from: "275"
                }],
                eltId: "WhatsApp_0"
            }, {
                props: t[3],
                eltId: "Vertical_container_1"
            }, {
                props: t[4],
                eltId: "Group_1_1"
            }, {
                props: t[4],
                eltId: "Frame_4_0"
            }, {
                props: t[4],
                eltId: "https_lottiefiles_com_animations_doctor_consultation_E1yd0wb6cx_0"
            }, {
                props: t[4],
                eltId: "Frame_5_0"
            }, {
                props: t[5],
                eltId: "I1891_2186_1125_460"
            }, {
                props: t[5],
                eltId: "I1891_2186_1125_461"
            }, {
                props: t[4],
                eltId: "mi_circle_error_0"
            }, {
                props: t[6],
                eltId: "Vector_80"
            }, {
                eltId: "linea_whatsApp_2",
                altId: "linea_whatsApp_3"
            }],
            rootId: "WhatsApp_0"
        },
        294: {
            type: "ANIMATE",
            animations: [{
                props: t[7],
                reactions: [{
                    type: "hover",
                    to: "274"
                }],
                eltId: "WhatsApp_0"
            }, {
                props: t[4],
                eltId: "Vertical_container_1"
            }, {
                props: t[8],
                eltId: "Group_1_1"
            }, {
                props: t[8],
                eltId: "Frame_4_0"
            }, {
                props: t[8],
                eltId: "https_lottiefiles_com_animations_doctor_consultation_E1yd0wb6cx_0"
            }, {
                props: t[8],
                eltId: "Frame_5_0"
            }, {
                props: t[9],
                eltId: "I1891_2186_1125_460"
            }, {
                props: t[9],
                eltId: "I1891_2186_1125_461"
            }, {
                props: t[8],
                eltId: "mi_circle_error_0"
            }, {
                props: t[10],
                eltId: "Vector_80"
            }, {
                eltId: "linea_whatsApp_3",
                altId: "linea_whatsApp_2"
            }],
            rootId: "WhatsApp_0"
        },
        299: {
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
        303: {
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
        304: {
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
        307: {
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
        308: {
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
        311: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[11],
                reactions: [{
                    type: "hover",
                    from: "311"
                }],
                eltId: "Property_1_card_4"
            }, {
                props: t[24],
                eltId: "Frame_61"
            }, {
                props: t[25],
                eltId: "I1835_1412_619_538"
            }, {
                props: t[5],
                eltId: "I1835_1412_619_541"
            }, {
                props: t[5],
                eltId: "I1835_1412_619_543"
            }, {
                props: t[6],
                eltId: "Line_11"
            }, {
                props: t[4],
                eltId: "Image_12"
            }],
            rootId: "Property_1_card_4"
        },
        326: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[11],
                reactions: [{
                    type: "hover",
                    from: "326"
                }],
                eltId: "Property_1_card_4_0"
            }, {
                props: t[24],
                eltId: "Frame_62"
            }, {
                props: t[25],
                eltId: "I1835_1413_619_505"
            }, {
                props: t[5],
                eltId: "I1835_1413_619_508"
            }, {
                props: t[5],
                eltId: "I1835_1413_619_510"
            }, {
                props: t[6],
                eltId: "Line_13"
            }, {
                props: t[4],
                eltId: "Image_13"
            }],
            rootId: "Property_1_card_4_0"
        },
        341: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[11],
                reactions: [{
                    type: "hover",
                    from: "341"
                }],
                eltId: "Property_1_card_4_1"
            }, {
                props: t[24],
                eltId: "Frame_63"
            }, {
                props: t[25],
                eltId: "I1835_1414_619_516"
            }, {
                props: t[5],
                eltId: "I1835_1414_619_519"
            }, {
                props: t[5],
                eltId: "I1835_1414_619_521"
            }, {
                props: t[6],
                eltId: "Line_15"
            }, {
                props: t[4],
                eltId: "Image_14"
            }],
            rootId: "Property_1_card_4_1"
        },
        356: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[11],
                reactions: [{
                    type: "hover",
                    from: "356"
                }],
                eltId: "Property_1_card_4_2"
            }, {
                props: t[24],
                eltId: "Frame_64"
            }, {
                props: t[25],
                eltId: "I1835_1415_619_527"
            }, {
                props: t[5],
                eltId: "I1835_1415_619_530"
            }, {
                props: t[5],
                eltId: "I1835_1415_619_532"
            }, {
                props: t[6],
                eltId: "Line_17"
            }, {
                props: t[4],
                eltId: "Image_15"
            }],
            rootId: "Property_1_card_4_2"
        },
        371: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[11],
                reactions: [{
                    type: "hover",
                    from: "371"
                }],
                eltId: "Property_1_card_4_3"
            }, {
                props: t[24],
                eltId: "Frame_65"
            }, {
                props: t[25],
                eltId: "I1835_1416_619_549"
            }, {
                props: t[5],
                eltId: "I1835_1416_619_552"
            }, {
                props: t[5],
                eltId: "I1835_1416_619_554"
            }, {
                props: t[6],
                eltId: "Line_19"
            }, {
                props: t[4],
                eltId: "Image_16"
            }],
            rootId: "Property_1_card_4_3"
        },
        386: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[11],
                reactions: [{
                    type: "hover",
                    from: "386"
                }],
                eltId: "Property_1_card_4_4"
            }, {
                props: t[24],
                eltId: "Frame_66"
            }, {
                props: t[25],
                eltId: "I1835_1417_619_580"
            }, {
                props: t[5],
                eltId: "I1835_1417_619_583"
            }, {
                props: t[5],
                eltId: "I1835_1417_619_585"
            }, {
                props: t[6],
                eltId: "Line_21"
            }, {
                props: t[4],
                eltId: "Image_17"
            }],
            rootId: "Property_1_card_4_4"
        },
        401: {
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
                    from: "401"
                }],
                eltId: "Leer_m_s_0"
            }, {
                props: t[17],
                eltId: "__310"
            }],
            rootId: "Leer_m_s_0"
        },
        407: {
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
                    from: "407"
                }],
                eltId: "Agendar_Cita_0"
            }],
            rootId: "Agendar_Cita_0"
        },
        412: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[18],
                reactions: [{
                    type: "hover",
                    from: "412"
                }],
                eltId: "Agendar_0"
            }, {
                props: t[19],
                eltId: "I1838_1224_1122_438"
            }, {
                props: t[19],
                eltId: "__329"
            }],
            rootId: "Agendar_0"
        },
        422: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[26],
                eltId: "nav"
            }, {
                reactions: [{
                    type: "click",
                    from: "422"
                }],
                eltId: "Text_input_10"
            }, {
                props: t[27],
                eltId: "I1879_1727_1175_723"
            }, {
                props: t[27],
                eltId: "__332"
            }, {
                props: t[28],
                reactions: [{
                    type: "click",
                    to: "434"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[29],
                eltId: "I1879_1727_1175_725"
            }, {
                props: t[29],
                eltId: "__333"
            }, {
                props: t[8],
                eltId: "Text_input_12"
            }, {
                reactions: [{
                    type: "click",
                    from: "449",
                    to: "448"
                }],
                eltId: "Text_input_13"
            }, {
                reactions: [{
                    type: "click",
                    from: "463",
                    to: "462"
                }],
                eltId: "Button"
            }, {
                props: t[4],
                eltId: "Text_input_16"
            }],
            rootId: "nav"
        },
        423: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "click",
                    from: "423"
                }],
                eltId: "Text_input_10"
            }, {
                props: t[27],
                eltId: "I1879_1727_1175_723"
            }, {
                props: t[27],
                eltId: "__332"
            }, {
                reactions: [{
                    type: "click",
                    from: "435",
                    to: "434"
                }],
                eltId: "Text_input_11"
            }, {
                reactions: [{
                    type: "click",
                    to: "448"
                }],
                eltId: "Text_input_13"
            }, {
                props: t[29],
                eltId: "I1879_1727_1175_727"
            }, {
                props: t[29],
                eltId: "__334"
            }, {
                props: t[8],
                eltId: "Text_input_14"
            }, {
                reactions: [{
                    type: "click",
                    from: "464",
                    to: "462"
                }],
                eltId: "Button"
            }, {
                props: t[4],
                eltId: "Text_input_16"
            }],
            rootId: "nav"
        },
        424: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "424"
                }],
                eltId: "Text_input_10"
            }, {
                props: t[27],
                eltId: "I1879_1727_1175_723"
            }, {
                props: t[27],
                eltId: "__332"
            }, {
                reactions: [{
                    type: "click",
                    from: "436",
                    to: "434"
                }],
                eltId: "Text_input_11"
            }, {
                reactions: [{
                    type: "click",
                    from: "450",
                    to: "448"
                }],
                eltId: "Text_input_13"
            }, {
                reactions: [{
                    type: "click",
                    to: "462"
                }],
                eltId: "Button"
            }, {
                props: t[29],
                eltId: "I1879_1727_1175_729"
            }, {
                props: t[29],
                eltId: "__335"
            }, {
                props: t[8],
                eltId: "Text_input_15"
            }, {
                props: t[4],
                eltId: "Text_input_16"
            }],
            rootId: "nav"
        },
        434: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[30],
                eltId: "nav"
            }, {
                reactions: [{
                    type: "click",
                    to: "422"
                }],
                eltId: "Text_input_10"
            }, {
                props: t[29],
                eltId: "I1879_1727_1175_723"
            }, {
                props: t[29],
                eltId: "__332"
            }, {
                props: t[31],
                reactions: [{
                    type: "click",
                    from: "434"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[27],
                eltId: "I1879_1727_1175_725"
            }, {
                props: t[27],
                eltId: "__333"
            }, {
                props: t[4],
                eltId: "Text_input_12"
            }, {
                reactions: [{
                    type: "click",
                    from: "448",
                    to: "449"
                }],
                eltId: "Text_input_13"
            }, {
                reactions: [{
                    type: "click",
                    from: "462",
                    to: "463"
                }],
                eltId: "Button"
            }, {
                props: t[8],
                eltId: "Text_input_16"
            }],
            rootId: "nav"
        },
        435: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[30],
                eltId: "nav"
            }, {
                reactions: [{
                    type: "click",
                    from: "423",
                    to: "422"
                }],
                eltId: "Text_input_10"
            }, {
                props: t[31],
                reactions: [{
                    type: "click",
                    from: "435"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[27],
                eltId: "I1879_1727_1175_725"
            }, {
                props: t[27],
                eltId: "__333"
            }, {
                props: t[4],
                eltId: "Text_input_12"
            }, {
                reactions: [{
                    type: "click",
                    to: "449"
                }],
                eltId: "Text_input_13"
            }, {
                props: t[29],
                eltId: "I1879_1727_1175_727"
            }, {
                props: t[29],
                eltId: "__334"
            }, {
                props: t[8],
                eltId: "Text_input_14"
            }, {
                reactions: [{
                    type: "click",
                    from: "464",
                    to: "463"
                }],
                eltId: "Button"
            }],
            rootId: "nav"
        },
        436: {
            type: "ANIMATE",
            animations: [{
                props: t[30],
                eltId: "nav"
            }, {
                reactions: [{
                    type: "click",
                    from: "424",
                    to: "422"
                }],
                eltId: "Text_input_10"
            }, {
                props: t[31],
                reactions: [{
                    type: "click",
                    from: "436"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[27],
                eltId: "I1879_1727_1175_725"
            }, {
                props: t[27],
                eltId: "__333"
            }, {
                props: t[4],
                eltId: "Text_input_12"
            }, {
                reactions: [{
                    type: "click",
                    from: "450",
                    to: "449"
                }],
                eltId: "Text_input_13"
            }, {
                reactions: [{
                    type: "click",
                    to: "463"
                }],
                eltId: "Button"
            }, {
                props: t[29],
                eltId: "I1879_1727_1175_729"
            }, {
                props: t[29],
                eltId: "__335"
            }, {
                props: t[8],
                eltId: "Text_input_15"
            }],
            rootId: "nav"
        },
        448: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "click",
                    to: "423"
                }],
                eltId: "Text_input_10"
            }, {
                props: t[29],
                eltId: "I1879_1727_1175_723"
            }, {
                props: t[29],
                eltId: "__332"
            }, {
                reactions: [{
                    type: "click",
                    from: "434",
                    to: "435"
                }],
                eltId: "Text_input_11"
            }, {
                reactions: [{
                    type: "click",
                    from: "448"
                }],
                eltId: "Text_input_13"
            }, {
                props: t[27],
                eltId: "I1879_1727_1175_727"
            }, {
                props: t[27],
                eltId: "__334"
            }, {
                props: t[4],
                eltId: "Text_input_14"
            }, {
                reactions: [{
                    type: "click",
                    from: "462",
                    to: "464"
                }],
                eltId: "Button"
            }, {
                props: t[8],
                eltId: "Text_input_16"
            }],
            rootId: "nav"
        },
        449: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[26],
                eltId: "nav"
            }, {
                reactions: [{
                    type: "click",
                    from: "422",
                    to: "423"
                }],
                eltId: "Text_input_10"
            }, {
                props: t[28],
                reactions: [{
                    type: "click",
                    to: "435"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[29],
                eltId: "I1879_1727_1175_725"
            }, {
                props: t[29],
                eltId: "__333"
            }, {
                props: t[8],
                eltId: "Text_input_12"
            }, {
                reactions: [{
                    type: "click",
                    from: "449"
                }],
                eltId: "Text_input_13"
            }, {
                props: t[27],
                eltId: "I1879_1727_1175_727"
            }, {
                props: t[27],
                eltId: "__334"
            }, {
                props: t[4],
                eltId: "Text_input_14"
            }, {
                reactions: [{
                    type: "click",
                    from: "463",
                    to: "464"
                }],
                eltId: "Button"
            }],
            rootId: "nav"
        },
        450: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "424",
                    to: "423"
                }],
                eltId: "Text_input_10"
            }, {
                reactions: [{
                    type: "click",
                    from: "436",
                    to: "435"
                }],
                eltId: "Text_input_11"
            }, {
                reactions: [{
                    type: "click",
                    from: "450"
                }],
                eltId: "Text_input_13"
            }, {
                props: t[27],
                eltId: "I1879_1727_1175_727"
            }, {
                props: t[27],
                eltId: "__334"
            }, {
                props: t[4],
                eltId: "Text_input_14"
            }, {
                reactions: [{
                    type: "click",
                    to: "464"
                }],
                eltId: "Button"
            }, {
                props: t[29],
                eltId: "I1879_1727_1175_729"
            }, {
                props: t[29],
                eltId: "__335"
            }, {
                props: t[8],
                eltId: "Text_input_15"
            }],
            rootId: "nav"
        },
        462: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "click",
                    to: "424"
                }],
                eltId: "Text_input_10"
            }, {
                props: t[29],
                eltId: "I1879_1727_1175_723"
            }, {
                props: t[29],
                eltId: "__332"
            }, {
                reactions: [{
                    type: "click",
                    from: "434",
                    to: "436"
                }],
                eltId: "Text_input_11"
            }, {
                reactions: [{
                    type: "click",
                    from: "448",
                    to: "450"
                }],
                eltId: "Text_input_13"
            }, {
                reactions: [{
                    type: "click",
                    from: "462"
                }],
                eltId: "Button"
            }, {
                props: t[27],
                eltId: "I1879_1727_1175_729"
            }, {
                props: t[27],
                eltId: "__335"
            }, {
                props: t[4],
                eltId: "Text_input_15"
            }, {
                props: t[8],
                eltId: "Text_input_16"
            }],
            rootId: "nav"
        },
        463: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[26],
                eltId: "nav"
            }, {
                reactions: [{
                    type: "click",
                    from: "422",
                    to: "424"
                }],
                eltId: "Text_input_10"
            }, {
                props: t[28],
                reactions: [{
                    type: "click",
                    to: "436"
                }],
                eltId: "Text_input_11"
            }, {
                props: t[29],
                eltId: "I1879_1727_1175_725"
            }, {
                props: t[29],
                eltId: "__333"
            }, {
                props: t[8],
                eltId: "Text_input_12"
            }, {
                reactions: [{
                    type: "click",
                    from: "449",
                    to: "450"
                }],
                eltId: "Text_input_13"
            }, {
                reactions: [{
                    type: "click",
                    from: "463"
                }],
                eltId: "Button"
            }, {
                props: t[27],
                eltId: "I1879_1727_1175_729"
            }, {
                props: t[27],
                eltId: "__335"
            }, {
                props: t[4],
                eltId: "Text_input_15"
            }],
            rootId: "nav"
        },
        464: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "423",
                    to: "424"
                }],
                eltId: "Text_input_10"
            }, {
                reactions: [{
                    type: "click",
                    from: "435",
                    to: "436"
                }],
                eltId: "Text_input_11"
            }, {
                reactions: [{
                    type: "click",
                    to: "450"
                }],
                eltId: "Text_input_13"
            }, {
                props: t[29],
                eltId: "I1879_1727_1175_727"
            }, {
                props: t[29],
                eltId: "__334"
            }, {
                props: t[8],
                eltId: "Text_input_14"
            }, {
                reactions: [{
                    type: "click",
                    from: "464"
                }],
                eltId: "Button"
            }, {
                props: t[27],
                eltId: "I1879_1727_1175_729"
            }, {
                props: t[27],
                eltId: "__335"
            }, {
                props: t[4],
                eltId: "Text_input_15"
            }],
            rootId: "nav"
        },
        478: {
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
                    from: "478"
                }],
                eltId: "Ver_m_s_1"
            }],
            rootId: "Ver_m_s_1"
        },
        483: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,483",
                    to: "T800ms,484"
                }],
                eltId: "_1_1"
            }, {
                eltId: "Group_36",
                altId: "Group_38"
            }],
            rootId: "_1_1"
        },
        484: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,484",
                    to: "T800ms,485"
                }],
                eltId: "_1_1"
            }, {
                eltId: "Group_38",
                altId: "Group_40"
            }],
            rootId: "_1_1"
        },
        485: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,485",
                    to: "T800ms,486"
                }],
                eltId: "_1_1"
            }, {
                eltId: "Group_40",
                altId: "Group_42"
            }],
            rootId: "_1_1"
        },
        486: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "timeout",
                    from: "T800ms,486",
                    to: "T800ms,483"
                }],
                eltId: "_1_1"
            }, {
                eltId: "Group_42",
                altId: "Group_36"
            }],
            rootId: "_1_1"
        },
        495: {
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
                    from: "495"
                }, {
                    type: "click",
                    to: "496"
                }],
                eltId: "WhatsApp_1"
            }, {
                props: t[1],
                eltId: "Vertical_container_3"
            }],
            rootId: "WhatsApp_1"
        },
        496: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[2],
                reactions: [{
                    type: "click",
                    from: "496"
                }],
                eltId: "WhatsApp_1"
            }, {
                props: t[3],
                eltId: "Vertical_container_3"
            }, {
                props: t[4],
                eltId: "Group_1_2"
            }, {
                props: t[4],
                eltId: "Frame_4_1"
            }, {
                props: t[4],
                eltId: "https_lottiefiles_com_animations_doctor_consultation_E1yd0wb6cx_1"
            }, {
                props: t[4],
                eltId: "Frame_5_1"
            }, {
                props: t[5],
                eltId: "I1891_2179_1125_460"
            }, {
                props: t[5],
                eltId: "I1891_2179_1125_461"
            }, {
                props: t[4],
                eltId: "mi_circle_error_1"
            }, {
                props: t[6],
                eltId: "Vector_123"
            }, {
                eltId: "linea_whatsApp_5",
                altId: "linea_whatsApp_6"
            }],
            rootId: "WhatsApp_1"
        },
        515: {
            type: "ANIMATE",
            animations: [{
                props: t[7],
                reactions: [{
                    type: "hover",
                    to: "495"
                }],
                eltId: "WhatsApp_1"
            }, {
                props: t[4],
                eltId: "Vertical_container_3"
            }, {
                props: t[8],
                eltId: "Group_1_2"
            }, {
                props: t[8],
                eltId: "Frame_4_1"
            }, {
                props: t[8],
                eltId: "https_lottiefiles_com_animations_doctor_consultation_E1yd0wb6cx_1"
            }, {
                props: t[8],
                eltId: "Frame_5_1"
            }, {
                props: t[9],
                eltId: "I1891_2179_1125_460"
            }, {
                props: t[9],
                eltId: "I1891_2179_1125_461"
            }, {
                props: t[8],
                eltId: "mi_circle_error_1"
            }, {
                props: t[10],
                eltId: "Vector_123"
            }, {
                eltId: "linea_whatsApp_6",
                altId: "linea_whatsApp_5"
            }],
            rootId: "WhatsApp_1"
        },
        520: {
            type: "ANIMATE",
            transition: {
                type: "DISSOLVE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                eltId: "linea_whatsApp_6",
                altId: "linea_whatsApp_7"
            }],
            rootId: "linea_whatsApp_6"
        },
        524: {
            type: "ANIMATE",
            transition: {
                type: "DISSOLVE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                eltId: "l_nea_7",
                altId: "l_nea_8"
            }],
            rootId: "l_nea_7"
        },
        525: {
            type: "ANIMATE",
            transition: {
                type: "DISSOLVE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                eltId: "l_nea_8",
                altId: "l_nea_7"
            }],
            rootId: "l_nea_8"
        },
        528: {
            type: "ANIMATE",
            transition: {
                type: "DISSOLVE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                eltId: "l_nea_9",
                altId: "l_nea_10"
            }],
            rootId: "l_nea_9"
        },
        529: {
            type: "ANIMATE",
            transition: {
                type: "DISSOLVE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                eltId: "l_nea_10",
                altId: "l_nea_9"
            }],
            rootId: "l_nea_10"
        },
        532: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[11],
                reactions: [{
                    type: "hover",
                    from: "532"
                }],
                eltId: "Property_1_card_4_5"
            }, {
                props: t[24],
                eltId: "Frame_115"
            }, {
                props: t[25],
                eltId: "I1731_1002_619_538"
            }, {
                props: t[5],
                eltId: "I1731_1002_619_541"
            }, {
                props: t[5],
                eltId: "I1731_1002_619_543"
            }, {
                props: t[6],
                eltId: "Line_23"
            }, {
                props: t[4],
                eltId: "Image_23"
            }],
            rootId: "Property_1_card_4_5"
        },
        547: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[11],
                reactions: [{
                    type: "hover",
                    from: "547"
                }],
                eltId: "Property_1_card_4_6"
            }, {
                props: t[24],
                eltId: "Frame_116"
            }, {
                props: t[25],
                eltId: "I1731_1003_619_505"
            }, {
                props: t[5],
                eltId: "I1731_1003_619_508"
            }, {
                props: t[5],
                eltId: "I1731_1003_619_510"
            }, {
                props: t[6],
                eltId: "Line_25"
            }, {
                props: t[4],
                eltId: "Image_24"
            }],
            rootId: "Property_1_card_4_6"
        },
        562: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[11],
                reactions: [{
                    type: "hover",
                    from: "562"
                }],
                eltId: "Property_1_card_4_7"
            }, {
                props: t[24],
                eltId: "Frame_117"
            }, {
                props: t[25],
                eltId: "I1731_1004_619_516"
            }, {
                props: t[5],
                eltId: "I1731_1004_619_519"
            }, {
                props: t[5],
                eltId: "I1731_1004_619_521"
            }, {
                props: t[6],
                eltId: "Line_27"
            }, {
                props: t[4],
                eltId: "Image_25"
            }],
            rootId: "Property_1_card_4_7"
        },
        577: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[11],
                reactions: [{
                    type: "hover",
                    from: "577"
                }],
                eltId: "Property_1_card_4_8"
            }, {
                props: t[24],
                eltId: "Frame_118"
            }, {
                props: t[25],
                eltId: "I1731_1005_619_527"
            }, {
                props: t[5],
                eltId: "I1731_1005_619_530"
            }, {
                props: t[5],
                eltId: "I1731_1005_619_532"
            }, {
                props: t[6],
                eltId: "Line_29"
            }, {
                props: t[4],
                eltId: "Image_26"
            }],
            rootId: "Property_1_card_4_8"
        },
        592: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[11],
                reactions: [{
                    type: "hover",
                    from: "592"
                }],
                eltId: "Property_1_card_4_9"
            }, {
                props: t[24],
                eltId: "Frame_119"
            }, {
                props: t[25],
                eltId: "I1731_1006_619_549"
            }, {
                props: t[5],
                eltId: "I1731_1006_619_552"
            }, {
                props: t[5],
                eltId: "I1731_1006_619_554"
            }, {
                props: t[6],
                eltId: "Line_31"
            }, {
                props: t[4],
                eltId: "Image_27"
            }],
            rootId: "Property_1_card_4_9"
        },
        607: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.042 2.7%, 0.479 13.5%, 0.659, 0.785 24.3%, 0.832 27%, 0.898 32.4%, 0.921 35.1%, 0.954, 0.973, 0.984 51.4%, 0.997 67.6%, 1)",
                duration: .3333333333333333
            },
            animations: [{
                props: t[11],
                reactions: [{
                    type: "hover",
                    from: "607"
                }],
                eltId: "Property_1_card_4_10"
            }, {
                props: t[24],
                eltId: "Frame_120"
            }, {
                props: t[25],
                eltId: "I1731_1007_619_580"
            }, {
                props: t[5],
                eltId: "I1731_1007_619_583"
            }, {
                props: t[5],
                eltId: "I1731_1007_619_585"
            }, {
                props: t[6],
                eltId: "Line_33"
            }, {
                props: t[4],
                eltId: "Image_28"
            }],
            rootId: "Property_1_card_4_10"
        },
        622: {
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
                    from: "622"
                }],
                eltId: "Leer_m_s_1"
            }, {
                props: t[17],
                eltId: "__477"
            }],
            rootId: "Leer_m_s_1"
        },
        628: {
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
                    from: "628"
                }],
                eltId: "Agendar_Cita_1"
            }],
            rootId: "Agendar_Cita_1"
        },
        633: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "linear(0, 0.065 2.7%, 0.778 13.5%, 0.914, 1.011, 1.071, 1.101, 1.108, 1.1 29.7%, 1.022 40.5%, 1.008 43.2%, 0.992, 0.988 54.1%, 1.001 75.7%, 1)",
                duration: .6666666666666666
            },
            animations: [{
                props: t[18],
                reactions: [{
                    type: "hover",
                    from: "633"
                }],
                eltId: "Agendar_1"
            }, {
                props: t[19],
                eltId: "I1866_1737_1122_438"
            }, {
                props: t[19],
                eltId: "__496"
            }],
            rootId: "Agendar_1"
        },
        643: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[26],
                eltId: "nav_0"
            }, {
                reactions: [{
                    type: "click",
                    from: "643"
                }],
                eltId: "Text_input_19"
            }, {
                props: t[27],
                eltId: "I1879_1716_1175_723"
            }, {
                props: t[27],
                eltId: "__499"
            }, {
                props: t[28],
                reactions: [{
                    type: "click",
                    to: "655"
                }],
                eltId: "Text_input_20"
            }, {
                props: t[29],
                eltId: "I1879_1716_1175_725"
            }, {
                props: t[29],
                eltId: "__500"
            }, {
                props: t[8],
                eltId: "Text_input_21"
            }, {
                reactions: [{
                    type: "click",
                    from: "670",
                    to: "669"
                }],
                eltId: "Text_input_22"
            }, {
                reactions: [{
                    type: "click",
                    from: "684",
                    to: "683"
                }],
                eltId: "Button_0"
            }, {
                props: t[4],
                eltId: "Text_input_25"
            }],
            rootId: "nav_0"
        },
        644: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "click",
                    from: "644"
                }],
                eltId: "Text_input_19"
            }, {
                props: t[27],
                eltId: "I1879_1716_1175_723"
            }, {
                props: t[27],
                eltId: "__499"
            }, {
                reactions: [{
                    type: "click",
                    from: "656",
                    to: "655"
                }],
                eltId: "Text_input_20"
            }, {
                reactions: [{
                    type: "click",
                    to: "669"
                }],
                eltId: "Text_input_22"
            }, {
                props: t[29],
                eltId: "I1879_1716_1175_727"
            }, {
                props: t[29],
                eltId: "__501"
            }, {
                props: t[8],
                eltId: "Text_input_23"
            }, {
                reactions: [{
                    type: "click",
                    from: "685",
                    to: "683"
                }],
                eltId: "Button_0"
            }, {
                props: t[4],
                eltId: "Text_input_25"
            }],
            rootId: "nav_0"
        },
        645: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "645"
                }],
                eltId: "Text_input_19"
            }, {
                props: t[27],
                eltId: "I1879_1716_1175_723"
            }, {
                props: t[27],
                eltId: "__499"
            }, {
                reactions: [{
                    type: "click",
                    from: "657",
                    to: "655"
                }],
                eltId: "Text_input_20"
            }, {
                reactions: [{
                    type: "click",
                    from: "671",
                    to: "669"
                }],
                eltId: "Text_input_22"
            }, {
                reactions: [{
                    type: "click",
                    to: "683"
                }],
                eltId: "Button_0"
            }, {
                props: t[29],
                eltId: "I1879_1716_1175_729"
            }, {
                props: t[29],
                eltId: "__502"
            }, {
                props: t[8],
                eltId: "Text_input_24"
            }, {
                props: t[4],
                eltId: "Text_input_25"
            }],
            rootId: "nav_0"
        },
        655: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[30],
                eltId: "nav_0"
            }, {
                reactions: [{
                    type: "click",
                    to: "643"
                }],
                eltId: "Text_input_19"
            }, {
                props: t[29],
                eltId: "I1879_1716_1175_723"
            }, {
                props: t[29],
                eltId: "__499"
            }, {
                props: t[31],
                reactions: [{
                    type: "click",
                    from: "655"
                }],
                eltId: "Text_input_20"
            }, {
                props: t[27],
                eltId: "I1879_1716_1175_725"
            }, {
                props: t[27],
                eltId: "__500"
            }, {
                props: t[4],
                eltId: "Text_input_21"
            }, {
                reactions: [{
                    type: "click",
                    from: "669",
                    to: "670"
                }],
                eltId: "Text_input_22"
            }, {
                reactions: [{
                    type: "click",
                    from: "683",
                    to: "684"
                }],
                eltId: "Button_0"
            }, {
                props: t[8],
                eltId: "Text_input_25"
            }],
            rootId: "nav_0"
        },
        656: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[30],
                eltId: "nav_0"
            }, {
                reactions: [{
                    type: "click",
                    from: "644",
                    to: "643"
                }],
                eltId: "Text_input_19"
            }, {
                props: t[31],
                reactions: [{
                    type: "click",
                    from: "656"
                }],
                eltId: "Text_input_20"
            }, {
                props: t[27],
                eltId: "I1879_1716_1175_725"
            }, {
                props: t[27],
                eltId: "__500"
            }, {
                props: t[4],
                eltId: "Text_input_21"
            }, {
                reactions: [{
                    type: "click",
                    to: "670"
                }],
                eltId: "Text_input_22"
            }, {
                props: t[29],
                eltId: "I1879_1716_1175_727"
            }, {
                props: t[29],
                eltId: "__501"
            }, {
                props: t[8],
                eltId: "Text_input_23"
            }, {
                reactions: [{
                    type: "click",
                    from: "685",
                    to: "684"
                }],
                eltId: "Button_0"
            }],
            rootId: "nav_0"
        },
        657: {
            type: "ANIMATE",
            animations: [{
                props: t[30],
                eltId: "nav_0"
            }, {
                reactions: [{
                    type: "click",
                    from: "645",
                    to: "643"
                }],
                eltId: "Text_input_19"
            }, {
                props: t[31],
                reactions: [{
                    type: "click",
                    from: "657"
                }],
                eltId: "Text_input_20"
            }, {
                props: t[27],
                eltId: "I1879_1716_1175_725"
            }, {
                props: t[27],
                eltId: "__500"
            }, {
                props: t[4],
                eltId: "Text_input_21"
            }, {
                reactions: [{
                    type: "click",
                    from: "671",
                    to: "670"
                }],
                eltId: "Text_input_22"
            }, {
                reactions: [{
                    type: "click",
                    to: "684"
                }],
                eltId: "Button_0"
            }, {
                props: t[29],
                eltId: "I1879_1716_1175_729"
            }, {
                props: t[29],
                eltId: "__502"
            }, {
                props: t[8],
                eltId: "Text_input_24"
            }],
            rootId: "nav_0"
        },
        669: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "click",
                    to: "644"
                }],
                eltId: "Text_input_19"
            }, {
                props: t[29],
                eltId: "I1879_1716_1175_723"
            }, {
                props: t[29],
                eltId: "__499"
            }, {
                reactions: [{
                    type: "click",
                    from: "655",
                    to: "656"
                }],
                eltId: "Text_input_20"
            }, {
                reactions: [{
                    type: "click",
                    from: "669"
                }],
                eltId: "Text_input_22"
            }, {
                props: t[27],
                eltId: "I1879_1716_1175_727"
            }, {
                props: t[27],
                eltId: "__501"
            }, {
                props: t[4],
                eltId: "Text_input_23"
            }, {
                reactions: [{
                    type: "click",
                    from: "683",
                    to: "685"
                }],
                eltId: "Button_0"
            }, {
                props: t[8],
                eltId: "Text_input_25"
            }],
            rootId: "nav_0"
        },
        670: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[26],
                eltId: "nav_0"
            }, {
                reactions: [{
                    type: "click",
                    from: "643",
                    to: "644"
                }],
                eltId: "Text_input_19"
            }, {
                props: t[28],
                reactions: [{
                    type: "click",
                    to: "656"
                }],
                eltId: "Text_input_20"
            }, {
                props: t[29],
                eltId: "I1879_1716_1175_725"
            }, {
                props: t[29],
                eltId: "__500"
            }, {
                props: t[8],
                eltId: "Text_input_21"
            }, {
                reactions: [{
                    type: "click",
                    from: "670"
                }],
                eltId: "Text_input_22"
            }, {
                props: t[27],
                eltId: "I1879_1716_1175_727"
            }, {
                props: t[27],
                eltId: "__501"
            }, {
                props: t[4],
                eltId: "Text_input_23"
            }, {
                reactions: [{
                    type: "click",
                    from: "684",
                    to: "685"
                }],
                eltId: "Button_0"
            }],
            rootId: "nav_0"
        },
        671: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "645",
                    to: "644"
                }],
                eltId: "Text_input_19"
            }, {
                reactions: [{
                    type: "click",
                    from: "657",
                    to: "656"
                }],
                eltId: "Text_input_20"
            }, {
                reactions: [{
                    type: "click",
                    from: "671"
                }],
                eltId: "Text_input_22"
            }, {
                props: t[27],
                eltId: "I1879_1716_1175_727"
            }, {
                props: t[27],
                eltId: "__501"
            }, {
                props: t[4],
                eltId: "Text_input_23"
            }, {
                reactions: [{
                    type: "click",
                    to: "685"
                }],
                eltId: "Button_0"
            }, {
                props: t[29],
                eltId: "I1879_1716_1175_729"
            }, {
                props: t[29],
                eltId: "__502"
            }, {
                props: t[8],
                eltId: "Text_input_24"
            }],
            rootId: "nav_0"
        },
        683: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                reactions: [{
                    type: "click",
                    to: "645"
                }],
                eltId: "Text_input_19"
            }, {
                props: t[29],
                eltId: "I1879_1716_1175_723"
            }, {
                props: t[29],
                eltId: "__499"
            }, {
                reactions: [{
                    type: "click",
                    from: "655",
                    to: "657"
                }],
                eltId: "Text_input_20"
            }, {
                reactions: [{
                    type: "click",
                    from: "669",
                    to: "671"
                }],
                eltId: "Text_input_22"
            }, {
                reactions: [{
                    type: "click",
                    from: "683"
                }],
                eltId: "Button_0"
            }, {
                props: t[27],
                eltId: "I1879_1716_1175_729"
            }, {
                props: t[27],
                eltId: "__502"
            }, {
                props: t[4],
                eltId: "Text_input_24"
            }, {
                props: t[8],
                eltId: "Text_input_25"
            }],
            rootId: "nav_0"
        },
        684: {
            type: "ANIMATE",
            transition: {
                type: "SMART_ANIMATE",
                easing: "ease-in-out",
                duration: .3333333333333333
            },
            animations: [{
                props: t[26],
                eltId: "nav_0"
            }, {
                reactions: [{
                    type: "click",
                    from: "643",
                    to: "645"
                }],
                eltId: "Text_input_19"
            }, {
                props: t[28],
                reactions: [{
                    type: "click",
                    to: "657"
                }],
                eltId: "Text_input_20"
            }, {
                props: t[29],
                eltId: "I1879_1716_1175_725"
            }, {
                props: t[29],
                eltId: "__500"
            }, {
                props: t[8],
                eltId: "Text_input_21"
            }, {
                reactions: [{
                    type: "click",
                    from: "670",
                    to: "671"
                }],
                eltId: "Text_input_22"
            }, {
                reactions: [{
                    type: "click",
                    from: "684"
                }],
                eltId: "Button_0"
            }, {
                props: t[27],
                eltId: "I1879_1716_1175_729"
            }, {
                props: t[27],
                eltId: "__502"
            }, {
                props: t[4],
                eltId: "Text_input_24"
            }],
            rootId: "nav_0"
        },
        685: {
            type: "ANIMATE",
            animations: [{
                reactions: [{
                    type: "click",
                    from: "644",
                    to: "645"
                }],
                eltId: "Text_input_19"
            }, {
                reactions: [{
                    type: "click",
                    from: "656",
                    to: "657"
                }],
                eltId: "Text_input_20"
            }, {
                reactions: [{
                    type: "click",
                    to: "671"
                }],
                eltId: "Text_input_22"
            }, {
                props: t[29],
                eltId: "I1879_1716_1175_727"
            }, {
                props: t[29],
                eltId: "__501"
            }, {
                props: t[8],
                eltId: "Text_input_23"
            }, {
                reactions: [{
                    type: "click",
                    from: "685"
                }],
                eltId: "Button_0"
            }, {
                props: t[27],
                eltId: "I1879_1716_1175_729"
            }, {
                props: t[27],
                eltId: "__502"
            }, {
                props: t[4],
                eltId: "Text_input_24"
            }],
            rootId: "nav_0"
        }
    }
})(), window.F2W_VARIABLES = {
    "--bracketpoints": 390,
    "--Display": 0,
    "--Display-1": 24,
    "--Display-2": 0,
    "--Display-3": 0,
    "--Display-4": 16,
    "--Display-5": 14,
    "--Display-6": 12,
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
    "--String": "String value",
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
        M = (r, n) => Ue(r, Ye(n)),
        ue = (r, n) => {
            var o = {};
            for (var i in r) se.call(r, i) && n.indexOf(i) < 0 && (o[i] = r[i]);
            if (r != null && H)
                for (var i of H(r)) n.indexOf(i) < 0 && ae.call(r, i) && (o[i] = r[i]);
            return o
        },
        le = (r, n, o) => new Promise((i, l) => {
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
        return le(this, arguments, function*(n, o = []) {
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

function S(r) {
    if (rt(r)) return r;
    if (ot(r)) return F.from(r)
}

function ge(r) {
    let n = S(r);
    return n ? () => (n.muted = !n.muted, () => {
        n.muted = !n.muted
    }) : () => console.warn("Video element not recognized", r)
}

function ye(r) {
    let n = S(r);
    return n ? () => (n.muted = !0, () => {
        n.muted = !1
    }) : () => console.warn("Video element not recognized", r)
}

function Ee(r) {
    let n = S(r);
    return n ? () => (n.muted = !1, () => {
        n.muted = !0
    }) : () => console.warn("Video element not recognized", r)
}

function he(r) {
    let n = S(r);
    return n ? () => (n.play(), () => n.pause()) : () => console.warn("Video element not recognized", r)
}

function xe(r) {
    let n = S(r);
    return n ? () => (n.pause(), () => n.play()) : () => console.warn("Video element not recognized", r)
}

function be(r) {
    let n = S(r);
    return n ? () => (n.paused ? n.play() : n.pause(), () => {
        n.paused ? n.play() : n.pause()
    }) : () => console.warn("Video element not recognized", r)
}

function Te(r, n) {
    let o = S(r);
    return o ? () => {
        o.currentTime = n
    } : () => console.warn("Video element not recognized", r)
}

function ve(r, n) {
    let o = S(r);
    return o ? () => (o.currentTime += n, () => {
        o.currentTime -= n
    }) : () => console.warn("Video element not recognized", r)
}

function Ne(r, n) {
    let o = S(r);
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
        h = n.map(a => M(C({}, a), {
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

function ut(r, n) {
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
    let i = r.map(l => lt(l, n, o));
    return (l, s) => {
        let u = i.map(c => c(l, s)).filter(c => !!c);
        if (u.length) return (c, m) => u.forEach(f => f(c, m))
    }
}

function lt(r, n, o) {
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
            if (variableCollectionName && variableModeName) return () => ut(variableCollectionName, variableModeName);
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
var Se = new Map;

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
            let a = Se.get(d);
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
                b || (b = document.createElement("template"), b.id = z(d), b.innerHTML = v.outerHTML, a.insertAdjacentElement("afterend", b)), Se.set(d, a.id)
            }
            h.push({
                eltId: a.id,
                altId: v.id
            }), isNaN(+getComputedStyle(a).getPropertyValue("--f2w-order")) || E.add(a.parentElement)
        } else {
            let a = (N || []).map(p => {
                let b = Me(v, p.key, p.from),
                    R = Me(v, p.key, p.to);
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
                return M(C({}, y), {
                    swapped: !1,
                    props: (v = y.props) == null ? void 0 : v.map(a => M(C({}, a), {
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
                        b = ue(g, ["reactions"]);
                    if (a.props) return M(C({}, b), {
                        props: a.props.map(R => {
                            let q = yt(R, v),
                                oe = R.curr;
                            return R.curr = q, M(C({}, R), {
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
                            props: a.props.map(p => M(C({}, p), {
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

function Me(r, n, o) {
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
        "Text_input_24": "Nosotros.html",   // Botón de Nosotros
        "Button_1": "citas.html"            // Botón de Contacto
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