import { DownOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { SSwitchTranslate } from "./styled";

const SwitchTranslate = () => {
    const router = useRouter();
    const path = router.pathname;
    const locale = router.locale;
    const items: MenuProps['items'] = [
        {
            label: <Link href={`${path}`} locale="vi" passHref>
                <Image
                    src="/icons/vi.svg"
                    width={30}
                    height={30}
                    alt="Vietename flag"
                />
            </Link>,
            key: '0',
        },
        {
            label: <Link href={`${path}`} locale="en" passHref>
                <Image
                    src="/icons/us.svg"
                    width={30}
                    height={30}
                    alt="US flag"
                />
            </Link>,
            key: '1',
        },
    ];
    return (
        <>
            <SSwitchTranslate className="pointed">
                <Dropdown.Button
                    className="custom-dropdown"
                    placement="bottomLeft"
                    icon={locale === "vi" ?
                        (
                            <div className="custom-languge">
                                <Image
                                    src="/icons/vi.svg"
                                    width={30}
                                    height={30}
                                    alt="Vietename flag"
                                />
                                <DownOutlined />
                            </div>
                        )
                        : (
                            <div className="custom-languge">
                                <Image
                                    src="/icons/us.svg"
                                    width={30}
                                    height={30}
                                    alt="US flag"
                                />
                                <DownOutlined />
                            </div>
                        )}
                    menu={{ items }}
                    trigger={['click']}
                />
            </SSwitchTranslate>
        </>
    )
}

export default SwitchTranslate;
