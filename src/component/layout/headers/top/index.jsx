import React, { useContext } from 'react'
import PlusIcon from '../../../icons/plus'
import SettingIcon from '../../../icons/setting'
import BellIcon from '../../../icons/bell'
import Grid1Icon from '../../../icons/grid1'
import Tabing from './tabing'
import { GlobalContext } from '../../../../context/Context'


const TopHeader = ({topTabs}) => {
    let { state } = useContext(GlobalContext);

    return (
        <>
            <div className="headerTop">
                <Tabing topTabs={topTabs} />

                <div className="headerTop_right">
                    <div className="headerTop_addButton">
                        <span className='headerTop_addBtn'>
                            <PlusIcon />
                        </span>
                    </div>

                    <div className="headerTop_setting">
                        <span className='headerTop_settingBtn'>
                            <SettingIcon />
                        </span>
                    </div>

                    <div className="headerTop_notification">
                        <span className='headerTop_notificationBtn'>
                            <BellIcon />
                        </span>
                    </div>

                    <div className="headerTop_profile">
                        <span>
                            <img src={`${state.basePath}/dashboard/header_avatar.png`} alt='' width={31.4} height={31.4} />
                        </span>
                    </div>

                    <div className="headerTop_nav">
                        <div className="headerTop_navBtn">
                            <Grid1Icon />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopHeader
