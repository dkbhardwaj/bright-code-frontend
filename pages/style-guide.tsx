import React from "react";
import ColTwoCard from "../components/ColTwoCard";
import TitleSection from "../components/TitleSection";
import ThreeColumns from "../components/ThreeColumns";
import GridCards from "@/components/GridCards";
import BannerThird, { BannerThirdData } from "@/components/BannerThird";
import Timeline from "@/components/Timeline";
import Cta from "@/components/Cta";
import ContactSection from "@/components/ContactSection";
import CalendlyCalendar from "@/components/CalendlyCalendar";

const StyleGuide: React.FC = () => {
    const bannerData: BannerThirdData['data'] = {
        theme: "dark" as "dark",
        image: {
            bg: {
                light: "/what-we-do-blades/BG.svg",
                dark: "/what-we-do-blades/BG_dark_theme.svg",
            },
            leftIcons: {
                light: "/what-we-do-blades/hero_icons.svg",
                dark: "/what-we-do-blades/hero_icons-dark-theme.svg",
            },
            rightImg: {
                light: "/what-we-do-blades/hero.svg",
                dark: "/what-we-do-blades/hero-dark-theme.svg",
            },
            node: {
                altText: "Hero banner image",
                guid: "",
                sourceUrl: "/what-we-do-blades/hero-dark-theme.svg",
            }
        },
        title: {
            titlePrefix: "Protect your",
            titleGradient: "Reputation",
            titleSuffix: "Not just your Website.",
        },
        varient: "dark",
        subtitle: "Your clients hire you for vision. You hire us so the dev never lets that vision down.",
        textUnderCta: "",
        cta: [
            {
                link: {
                    target: false,
                    linkUrl: "#",
                    linkText: "Book a 30-minute call",
                    classname: "rounded-blue",
                }
            },
            {
                link: {
                    target: false,
                    linkUrl: "#",
                    linkText: "We protect agencies",
                    classname: "rounded-gray no-arrow",
                }
            },
        ],
    };
    const bannerData2: BannerThirdData['data'] = {
        theme: "light" as "light",
        image: {
            bg: {
                light: "/what-we-do-blades/BG.svg",
                dark: "/what-we-do-blades/BG_dark_theme.svg",
            },
            leftIcons: {
                light: "/what-we-do-blades/hero_icons.svg",
                dark: "/what-we-do-blades/hero_icons-dark-theme.svg",
            },
            rightImg: {
                light: "/what-we-do-blades/hero.svg",
                dark: "/what-we-do-blades/hero-dark-theme.svg",
            },
            node: {
                altText: "Hero banner image",
                guid: "",
                sourceUrl: "/what-we-do-blades/hero.svg",
            }
        },
        title: {
            titlePrefix: "Protect your",
            titleGradient: "Reputation",
            titleSuffix: "Not just your Website.",
        },
        varient: "light",
        subtitle: "Your clients hire you for vision. You hire us so the dev never lets that vision down.",
        textUnderCta: "",
        cta: [
            {
                link: {
                    target: false,
                    linkUrl: "#",
                    linkText: "Book a 30-minute call",
                    classname: "rounded-blue",
                }
            },
            {
                link: {
                    target: false,
                    linkUrl: "#",
                    linkText: "We protect agencies",
                    classname: "rounded-gray no-arrow",
                }
            },
        ],
    };
    const cardData = {
        imageOnLeft: true,
        image: {
            node: {
                sourceUrl: "/what-we-do-blades/what_we_do.svg",
                altText: "Digital transformation banner",
            }
        },
        eyebrowText: "Bright-Code does",
        imageWithContentTitle: "We Build Digital Presence for Future of Businesses",
        blurb:
            "Bright Code works seamlessly with your team to help you envision and create your clients’ digital presence. Whether it’s building something from the ground up or developing and QA-ing existing architecture, we create sophisticated websites and content management systems that meet the enterprise needs of large businesses and institutions.",
        link: {
            target: false,
            linkUrl: "/services",
            linkText: "Learn more",
            classname: "gradient-btn-blue",
        },
        buttonText: "Learn more",
        buttonLink: "/services",
        theme: "light" as "light",
        sectionPadding: ["padding-large"],
    };

    const cardData2 = {
        imageOnLeft: false,
        image: {
            node: {
                sourceUrl: "/what-we-do-blades/what_we_do.svg",
                altText: "Digital transformation banner",
            }
        },
        eyebrowText: "Bright-Code does",
        imageWithContentTitle: "We Build Digital Presence for Future of Businesses",
        blurb:
            "Bright Code works seamlessly with your team to help you envision and create your clients’ digital presence. Whether it’s building something from the ground up or developing and QA-ing existing architecture, we create sophisticated websites and content management systems that meet the enterprise needs of large businesses and institutions.",
        link: {
            target: false,
            linkUrl: "/services",
            linkText: "Learn more",
            classname: "gradient-btn-blue",
        },
        buttonText: "Learn more",
        buttonLink: "/services",
        theme: "dark" as "dark",
        sectionPadding: ["padding-large"],
    };
    const titleSectionData = {
        badgeText: "Bright-Code does",
        title: "We Build Digital Presence for Future of Businesses",
        description:
            "Bright Code works seamlessly with your team to help you envision and create your clients’ digital presence. Whether it’s building something from the ground up or developing and QA-ing existing architecture, we create sophisticated websites and content management systems that meet the enterprise needs of large businesses and institutions.",
        alignment: "center",
        buttonText: "Learn more",
        buttonLink: "/services",
    } as const;

    const titleSectionData2 = {
        badgeText: "About Bright Code",
        title: "Who we are here to help",
        description:
            "Bright Code works seamlessly with your team to help you envision and create your clients’ digital presence. Whether it’s building something from the ground up or developing and QA-ing existing architecture, we create sophisticated websites and content management systems.",
        alignment: "center",
        buttonText: "",
        buttonLink: "",
    } as const;

    const colThreeCardsDataDark = {
        fieldGroupName: 'PagebuilderSectionsColThreeCardsLayout' as const,
        theme: "dark",
        sectionPadding: ["padding-large"],
        cards: [
            {
                fieldGroupName: "PagebuilderSectionsColThreeCardsLayoutCards",
                cardTitle: "Creative and Brand Agencies",
                subtitle: "We have over a decade of experience using leading technologies to provide support.",
                cta: {
                    fieldGroupName: "PagebuilderSectionsColThreeCardsLayoutCardsCtaLink",
                    linkPath: "#",
                    linkText: "Learn more",
                },
                cardImage: {
                    node: {
                        sourceUrl: "/what-we-do-blades/creative.svg",
                        altText: "Channels",
                    }
                }
            },
            {
                fieldGroupName: "PagebuilderSectionsColThreeCardsLayoutCards",
                cardTitle: "Marketing and Digital Teams",
                subtitle: "We have over a decade of experience using leading technologies to provide support.",
                cta: {
                    fieldGroupName: "PagebuilderSectionsColThreeCardsLayoutCardsCtaLink",
                    linkPath: "#",
                    linkText: "Learn more",
                },
                cardImage: {
                    node: {
                        sourceUrl: "/what-we-do-blades/marketing.svg",
                        altText: "Team",
                    }
                }
            },
            {
                fieldGroupName: "PagebuilderSectionsColThreeCardsLayoutCards",
                cardTitle: "Teams with too much on their Plate",
                subtitle: "We have over a decade of experience using leading technologies to provide support.",
                cta: {
                    fieldGroupName: "PagebuilderSectionsColThreeCardsLayoutCardsCtaLink",
                    linkPath: "#",
                    linkText: "Learn more",
                },
                cardImage: {
                    node: {
                        sourceUrl: "/what-we-do-blades/teams.svg",
                        altText: "Tools",
                    }
                }
            },
        ],
        link: {
            classname: "gradient-btn-blue",
            fieldGroupName: "PagebuilderSectionsColThreeCardsLayoutLink",
            linkText: "Learn more",
            linkUrl: "#",
            target: "",
        }
    };

    const colThreeCardsDataLight = {
        fieldGroupName: 'PagebuilderSectionsColThreeCardsLayout' as const,
        theme: "light",
        sectionPadding: ["padding-large"],
        cards: [
            {
                fieldGroupName: "PagebuilderSectionsColThreeCardsLayoutCards",
                cardTitle: "Creative and Brand Agencies",
                subtitle: "We have over a decade of experience using leading technologies to provide support.",
                cta: {
                    fieldGroupName: "PagebuilderSectionsColThreeCardsLayoutCardsCtaLink",
                    linkPath: "#",
                    linkText: "Learn more",
                },
                cardImage: {
                    node: {
                        sourceUrl: "/what-we-do-blades/creative.svg",
                        altText: "Channels",
                    }
                }
            },
            {
                fieldGroupName: "PagebuilderSectionsColThreeCardsLayoutCards",
                cardTitle: "Marketing and Digital Teams",
                subtitle: "We have over a decade of experience using leading technologies to provide support.",
                cta: {
                    fieldGroupName: "PagebuilderSectionsColThreeCardsLayoutCardsCtaLink",
                    linkPath: "#",
                    linkText: "Learn more",
                },
                cardImage: {
                    node: {
                        sourceUrl: "/what-we-do-blades/marketing.svg",
                        altText: "Team",
                    }
                }
            },
            {
                fieldGroupName: "PagebuilderSectionsColThreeCardsLayoutCards",
                cardTitle: "Teams with too much on their Plate",
                subtitle: "We have over a decade of experience using leading technologies to provide support.",
                cta: {
                    fieldGroupName: "PagebuilderSectionsColThreeCardsLayoutCardsCtaLink",
                    linkPath: "#",
                    linkText: "Learn more",
                },
                cardImage: {
                    node: {
                        sourceUrl: "/what-we-do-blades/teams.svg",
                        altText: "Tools",
                    }
                }
            },
        ],
        link: {
            classname: "gradient-btn-blue",
            fieldGroupName: "PagebuilderSectionsColThreeCardsLayoutLink",
            linkText: "Learn more",
            linkUrl: "#",
            target: "",
        }
    };
    const titleSectionData01 = {
        badgeText: "Values - Benefits",
        title: "What we believe. What you feel",
        description:
            "Under the hood, we are a web development studio focused on CMS heavy, business critical sites.",
        alignment: "center",
        buttonText: "",
        buttonLink: "",
    } as const;

    const titleSectionData3 = {
        badgeText: "Bright Code Work",
        title: "What we actually build",
        description:
            "Under the hood, we are a web development studio focused on CMS heavy, business critical sites.",
        alignment: "center",
        buttonText: "",
        buttonLink: "",
    } as const;
    const gridCardsDataDark = {
        fieldGroupName: 'PagebuilderSectionsGridCardsSectionLayout' as const,
        theme: "dark",
        sectionPadding: ["padding-large"],
        gridCards: [
            {
                cardTitle: "White label Website Builds",
                cardDescription: "We have over a decade of experience using leading technologies to provide support.",
                cardImage: {
                    node: {
                        sourceUrl: "/what-we-do-blades/white_label.svg",
                        altText: "websites",
                    }
                },
                cta: {
                    ctaLabel: "Learn more",
                    ctaUrl: "#",
                    openInNewTab: false,
                }
            },
            {
                cardTitle: "Legacy Rescue and Refractor",
                cardDescription: "We have over a decade of experience using leading technologies to provide support.",
                cardImage: {
                    node: {
                        sourceUrl: "/what-we-do-blades/legacy.svg",
                        altText: "Infrastructure",
                    }
                },
                cta: {
                    ctaLabel: "Learn more",
                    ctaUrl: "#",
                    openInNewTab: false,
                }
            },
            {
                cardTitle: "Care and Optimization Plans",
                cardDescription: "We have over a decade of experience using leading technologies to provide support.",
                cardImage: {
                    node: {
                        sourceUrl: "/what-we-do-blades/care.svg",
                        altText: "Care and Optimization",
                    }
                },
                cta: {
                    ctaLabel: "Learn more",
                    ctaUrl: "#",
                    openInNewTab: false,
                }
            },
            {
                cardTitle: "Embedded Dev Squads",
                cardDescription: "We have over a decade of experience using leading technologies to provide support.",
                cardImage: {
                    node: {
                        sourceUrl: "/what-we-do-blades/embedded.svg",
                        altText: "Scalable team",
                    }
                },
                cta: {
                    ctaLabel: "Learn more",
                    ctaUrl: "#",
                    openInNewTab: false,
                }
            },
        ],
        link: {
            target: "",
            linkUrl: "#",
            linkText: "Learn more",
            classname: ["gradient-btn-blue"],
        }
    };

    const gridCardsDataLight = {
        ...gridCardsDataDark,
        theme: "light",
    };

    const ctaDataDark = {
        fieldGroupName: "PagebuilderSectionsFooterCtaLayout" as const,
        footerCtaTitle: "Sophisticated web solutions for smart agencies.",
        subtitle: "Bright Code works seamlessly with your team to help you envision and create your clients’ digital presence.",
        theme: "dark",
        sectionPadding: ["padding-small"],
        link: {
            target: "",
            linkUrl: "/contact-us",
            linkText: "Contact us",
            fieldGroupName: "PagebuilderSectionsFooterCtaLayoutLink",
            classname: "rounded-blue",
        }
    };

    const ctaDataLight = {
        ...ctaDataDark,
        theme: "light",
    };

    const contactForm = {
        fieldGroupName: 'PagebuilderSectionsContentWithFormOrCalanderLayout' as const,
        contactTitle: "Manage Customers across the Lifetime of the product cycle",
        subtitle: "Bright Code works seamlessly with your team to help you envision and create your clients’ digital presence. Whether it’s building something from the ground up or enhancing existing architecture, we create sophisticated websites and content management systems.",
        iconWithTextCards: [
            {
                card: {
                    icon: {
                        node: {
                            sourceUrl: "/clock.svg",
                            altText: "Customer history",
                        }
                    },
                    title: "Customer History",
                    subtitle: "Analyze customer behavior across product lines",
                }
            },
            {
                card: {
                    icon: {
                        node: {
                            sourceUrl: "/uis_graph-bar.svg",
                            altText: "Actionable insights",
                        }
                    },
                    title: "Actionable Insights",
                    subtitle: "Gain meaningful insights from customer data",
                }
            },
            {
                card: {
                    icon: {
                        node: {
                            sourceUrl: "/patterns.svg",
                            altText: "Identify patterns",
                        }
                    },
                    title: "Identify Patterns",
                    subtitle: "Discover trends and usage patterns efficiently",
                }
            },
            {
                card: {
                    icon: {
                        node: {
                            sourceUrl: "/analysis.svg",
                            altText: "Predictive analysis",
                        }
                    },
                    title: "Predictive Analysis",
                    subtitle: "Predict outcomes using historical customer data",
                }
            },
        ],
        link: {
            classname: "gradient-btn-blue",
            linkText: "Learn more",
            linkUrl: "#",
            target: false,
        }
    };

    const contactUsCalender = {
        fieldGroupName: 'PagebuilderSectionsContentWithFormOrCalanderLayout' as const,
        contactTitle: "Manage Customers across the Lifetime of the product cycle",
        subtitle: "Bright Code works seamlessly with your team to help you envision and create your clients' digital presence. Schedule time with our team to explore how we can help.",
        iconWithTextCards: [
            {
                card: {
                    icon: {
                        node: {
                            sourceUrl: "/clock.svg",
                            altText: "Customer history",
                        }
                    },
                    title: "Customer History",
                    subtitle: "Analyze customer behavior across product lines",
                }
            },
            {
                card: {
                    icon: {
                        node: {
                            sourceUrl: "/uis_graph-bar.svg",
                            altText: "Actionable insights",
                        }
                    },
                    title: "Actionable Insights",
                    subtitle: "Turn data into actionable business insights",
                }
            },
            {
                card: {
                    icon: {
                        node: {
                            sourceUrl: "/patterns.svg",
                            altText: "Identify patterns",
                        }
                    },
                    title: "Identify Patterns",
                    subtitle: "Understand trends across customer journeys",
                }
            },
            {
                card: {
                    icon: {
                        node: {
                            sourceUrl: "/analysis.svg",
                            altText: "Predictive analysis",
                        }
                    },
                    title: "Predictive Analysis",
                    subtitle: "Forecast future outcomes with confidence",
                }
            },
        ],
        link: {
            classname: "gradient-btn-blue",
            linkText: "Learn more",
            linkUrl: "#",
            target: false,

        }
    };

    return (
        <>
            <div >
                <BannerThird data={bannerData} />
                <BannerThird data={bannerData2} />
                <TitleSection {...titleSectionData01} theme="dark" />
                <Timeline theme="dark" />
                <TitleSection {...titleSectionData01} theme="light" />
                <Timeline theme="light" />
                <ColTwoCard data={cardData} />
                <ColTwoCard data={cardData} />
                <ColTwoCard data={cardData2} />
                <TitleSection {...titleSectionData} theme="dark" />
                <TitleSection {...titleSectionData} theme="light" />
                <TitleSection {...titleSectionData2} theme="dark" />
                <ThreeColumns data={colThreeCardsDataDark} />
                <ThreeColumns data={colThreeCardsDataLight} />
                <TitleSection {...titleSectionData3} theme="dark" />
                {/* <ContactSection data={contactForm} theme="dark" rightSlot={<ContactForm />} />
        <ContactSection data={contactForm} theme="light" rightSlot={<ContactForm />} /> */}
                <ContactSection
                    data={contactUsCalender}
                    theme="dark"
                    rightSlot={<CalendlyCalendar theme="dark" />}
                />
                <ContactSection
                    data={contactUsCalender}
                    theme="light"
                    rightSlot={<CalendlyCalendar theme="light" />}
                />
                <GridCards data={gridCardsDataDark} />
                <GridCards data={gridCardsDataLight} />
                <Cta data={ctaDataDark} />
                <Cta data={ctaDataLight} />
            </div>
        </>
    );
};

const ContactForm = () => {
    return (
        <form className="contactForm" autoComplete="on">
            <div className="row">
                <div className="field">
                    <label htmlFor="firstName">First name</label>
                    <input
                        id="firstName"
                        type="text"
                        autoComplete="given-name"
                    />
                </div>

                <div className="field">
                    <label htmlFor="lastName">Last name</label>
                    <input
                        id="lastName"
                        type="text"
                        autoComplete="family-name"
                    />
                </div>
            </div>

            <div className="row">
                <div className="field">
                    <label htmlFor="email">Your mail</label>
                    <input
                        id="email"
                        type="email"
                        autoComplete="email"
                    />
                </div>

                <div className="field">
                    <label htmlFor="country">Country</label>
                    <input
                        id="country"
                        type="text"
                        autoComplete="country-name"
                    />
                </div>
            </div>

            <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    autoComplete="off"
                />
            </div>

            <button className="gradient-btn no-arrow rounded-btn w-fit ml-auto mt-[15px] " type="submit">Contact us</button>
        </form>
    );
};

export default StyleGuide;
