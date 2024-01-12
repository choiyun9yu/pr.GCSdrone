import React, {useContext, useState} from "react";

import { ColorThema } from '../ProejctThema';
import {DroneContext} from "./SignalRContainder";
import {MiniMap, Table} from "./MiddleMap";
import {DroneJoyStick} from "./DroneJoyStick";
import {ControlJoyStick} from "./ControlJoyStick";
import {CameraJoyStick} from "./CameraJoyStick";
import {AttitudeIndicator, GaugeStyleComponent} from "./AttitudeIndicator";

export const FlightMode = (props) => {
    return (
        <div id="right-sidebar" className="flex  flex-col w-[500px]">
            <RightSideTop />
            <RightSideBottom swapMap={props.swapMap}
                             handleSwapMap={props.handleSwapMap}
                             center={props.center}
            />
        </div>
    );
};

const RightSideTop = () => {
    const { droneMessage } = useContext(DroneContext);
    const droneState = droneMessage ? droneMessage['droneMessage'] : null;
    return (
        <div className={`items-start w-full h-1/2 mb-3 rounded-2xl ${ColorThema.Secondary4}`}>
            <div className="flex m-2 items-center">
                <span className="text-white rounded-md m-3 font-bold text-medium">• 드론 정보</span>
            </div>
            <table id={'gcs-mini-table'}
                   className={`w-[90%] h-[70%] mx-auto border-t-2 border-l-2 border-[#4B4B99] text-white text-sm`}>
                <tbody>
                <tr className={'w-full border-b-2 border-[#4B4B99]'}>
                    <th className={'w-[23%] border-r-2 border-[#4B4B99]'}>드론 ID</th>
                    <td className={`w-[27%] pl-3 border-r-2 border-[#4B4B99] ${ColorThema.Secondary3}`}>{droneMessage && droneState.DroneId}</td>
                    <th className={'w-[23%] border-r-2 border-[#4B4B99]'}>현재 WP 번호</th>
                    <td className={`w-[27%] pl-3 border-r-2 border-[#4B4B99] ${ColorThema.Secondary3}`}>{droneMessage && droneState.DroneStt.WayPointNum}</td>
                </tr>

                <tr className={'w-full border-b-2 border-[#4B4B99]'}>
                    <th className={'w-[23%] border-r-2 border-[#4B4B99]'}>드론 전압 (V)</th>
                    <td className={`w-[27%] pl-3 border-r-2 border-[#4B4B99] ${ColorThema.Secondary3}`}>{droneMessage && droneState.DroneStt.PowerV}</td>
                    <th className={'w-[23%] border-r-2 border-[#4B4B99]'}>드론 온도 (°C)</th>
                    <td className={`w-[27%] pl-3 border-r-2 border-[#4B4B99] ${ColorThema.Secondary3}`}>{droneMessage && droneState.DroneStt.TempC}</td>
                </tr>

                {/*<tr className={'w-full border-b-2 border-[#4B4B99]'}>*/}
                {/*    <th className={'w-[23%] border-r-2 border-[#4B4B99]'}>GPS 수신</th>*/}
                {/*    <td className={`w-[27%] pl-3 border-r-2 border-[#4B4B99] ${ColorThema.Secondary3}`}>{droneStates && droneState.DroneStt.GpsStt}</td>*/}
                {/*    <th className={'w-[23%] border-r-2 border-[#4B4B99]'}>HDOP</th>*/}
                {/*    <td className={`w-[27%] pl-3 border-r-2 border-[#4B4B99] ${ColorThema.Secondary3}`}>{droneStates && droneState.DroneStt.HODP}</td>*/}
                {/*</tr>*/}

                <tr className={'w-full border-b-2 border-[#4B4B99]'}>
                    <th className={'w-[23%] border-r-2 border-[#4B4B99]'}>위도</th>
                    <td className={`w-[27%] pl-3 border-r-2 border-[#4B4B99] ${ColorThema.Secondary3}`}>{droneMessage && droneState.DroneStt.Lat}</td>
                    <th className={'w-[23%] border-r-2 border-[#4B4B99]'}>경도</th>
                    <td className={`w-[27%] pl-3 border-r-2 border-[#4B4B99] ${ColorThema.Secondary3}`}>{droneMessage && droneState.DroneStt.Lon}</td>
                </tr>

                <tr className={'w-full border-b-2 border-[#4B4B99]'}>
                    <th className={'w-[23%] border-r-2 border-[#4B4B99]'}>고도 (m)</th>
                    <td className={`w-[27%] pl-3 border-r-2 border-[#4B4B99] ${ColorThema.Secondary3}`}>{droneMessage && droneState.DroneStt.Alt}</td>
                    <th className={'w-[23%] border-r-2 border-[#4B4B99]'}>제어권</th>
                    <td className={`w-[27%] pl-3 border-r-2 border-[#4B4B99] ${ColorThema.Secondary3}`}>{droneMessage && null}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
};

const RightSideBottom = (props) => {
    return (
        <div className={`flex items-start w-full h-full rounded-2xl ${ColorThema.Secondary4}`}>
            <div className="flex flex-col w-full h-full m-2">
                <span className="text-white rounded-md m-3 font-bold text-medium">• 드론 운용</span>
                <div className={`w-full h-full min-h-[200px] bg-black`}>
                    {props.swapMap
                        ? <MiniMap handleSwapMap={props.handleSwapMap}
                                   center={props.center}
                        />
                        : null}
                </div>
                <div className={'flex flex-col w-full h-full text-[#AEABD8]'}>
                    <div className={`flex flex-row w-full mt-3 justify-center`}>
                        <div className={`w-full`}>
                            <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 hover:text-gray-300">
                                <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clipRule="evenodd" />
                            </svg>

                            </button>
                        </div>
                        <div className={`flex justify-center min-w-[100px] py-0.5 rounded border border-[#6359E9] text-sm text-[#6359E9] font-semibold`}>카메라 제어</div>
                        <div className={`flex w-full items-center justify-end`}>
                            <button className={`mr-3`}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 hover:text-gray-300">
                                <path fillRule="evenodd" d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clipRule="evenodd" />
                            </svg>
                            </button>
                            <button className={`mr-3 my-0.5 px-1 rounded border text-sm text-[#1D1D41] border-[#AEABD8] bg-[#AEABD8] hover:text-gray-300 hover:border-gray-300`}>Follow</button>
                            <button className={`mr-3`}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 hover:text-gray-300">
                                <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
                                <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                            </svg>
                            </button>
                            <button className={`mr-3`}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 hover:text-gray-300">
                                <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                            </svg>

                            </button>
                        </div>
                    </div>

                    <div className={`flex flex-row w-full h-full mt-5 mb-3`}>
                        <div className={`flex justify-end items-center w-full h-full`}>
                            <button className={`mt-4 mx-auto`}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 hover:text-gray-300">
                                <path fillRule="evenodd" d="M3.22 3.22a.75.75 0 011.06 0l3.97 3.97V4.5a.75.75 0 011.5 0V9a.75.75 0 01-.75.75H4.5a.75.75 0 010-1.5h2.69L3.22 4.28a.75.75 0 010-1.06zm17.56 0a.75.75 0 010 1.06l-3.97 3.97h2.69a.75.75 0 010 1.5H15a.75.75 0 01-.75-.75V4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0zM3.75 15a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-2.69l-3.97 3.97a.75.75 0 01-1.06-1.06l3.97-3.97H4.5a.75.75 0 01-.75-.75zm10.5 0a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-2.69l3.97 3.97a.75.75 0 11-1.06 1.06l-3.97-3.97v2.69a.75.75 0 01-1.5 0V15z" clipRule="evenodd" />
                            </svg>
                            </button>
                            <div className={`flex flex-col h-full mr-5 items-center`}>
                                <div className={`flex justify-end px-1 rounded border border-[#AEABD8] text-sm`}>
                                    zoom</div>
                                <div className={`flex flex-col h-full justify-between`}>
                                    <button className={`flex justify-center items-center m-2 w-5 h-5 rounded-full bg-[#AEABD8] text-gray-800 hover:bg-gray-300`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    <button className={`flex justify-center items-center m-2 w-5 h-5 rounded-full bg-[#AEABD8] text-gray-800 hover:bg-gray-300`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className={`flex w-full`}>
                            <CameraJoyStick />
                        </div>

                        <div className={`flex w-full h-full items-center`}>
                            <div className={`flex flex-col h-full ml-5 items-center`}>
                                <div className={`flex flex-col justify-end px-1 rounded border border-[#AEABD8] text-sm`}>
                                    focus</div>
                                <div className={`flex flex-col h-full justify-between`}>
                                    <button className={`flex justify-center items-center m-2 w-5 h-5 rounded-full bg-[#AEABD8] text-gray-800 hover:bg-gray-300`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    <button className={`flex justify-center items-center m-2 w-5 h-5 rounded-full bg-[#AEABD8] text-gray-800 hover:bg-gray-300`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <button className={`mt-4 mx-auto`}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 hover:text-gray-300">
                                <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                            </svg>
                            </button>
                        </div>
                    </div>

                    <div className={`flex flex-col text-gray-800 font-semibold`}>
                        <div className={`flex flex-col mb-5 items-center`}>
                            <div>
                                <button className={`mb-1 ml-1 px-2 py-1 rounded-md shadow border border-gray-400 bg-gray-300 hover:bg-gray-400 text-xs `}>Mid</button>
                                <button className={`mb-1 ml-1 px-2 py-1 rounded-md shadow border border-gray-400 bg-gray-300 hover:bg-gray-400 text-xs `}>Down</button>
                            </div>
                            <div>
                                <button className={`mb-1 ml-1 px-4 py-1 rounded-md shadow border border-gray-400 bg-gray-300 hover:bg-gray-400 text-xs `}>Calibration</button>
                            </div>
                        </div>
                     </div>
                </div>

            </div>
        </div>
    );
};

export const FlightContents = (props) => {
    const [monitorTable, setMonitorTable] = useState(true);
    const [indicator, setIndicator] = useState(true);

    const handleMonitorTable = () => {
        setMonitorTable(!monitorTable);
    }

    const handleIndicator = () => {
        setIndicator(!indicator);
    }

    return (
        <div id='map-contents' className={`flex justify-center w-full h-full`}>
            <Btn isLeftPanel={props.isLeftPanel}
                 handleIsLeftPanel={props.handleIsLeftPanel}
                 handleSwapMap={props.handleSwapMap}
                 isRightPanel={props.isRightPanel}
                 handleIsRightPanel={props.handleIsRightPanel}
                 handleMonitorTable={handleMonitorTable}
                 handleIndicator={handleIndicator}
                 isMarker={props.isMarker}
                 handleIsMarker={props.handleIsMarker}
            />

            <Table middleTable={props.middleTable} monitorTable={monitorTable} setMonitorTable={setMonitorTable}/>
            <AttitudeIndicator indicator={indicator}/>
            {props.isController
                ? <MainController isController={props.isController}
                                  handleIsController={props.handleIsController}
                                  handleIsRtl={props.handleIsRtl}
                                  lastPathReset={props.lastPathReset}/>
                : <button onClick={props.handleIsController} className={`absolute bottom-0 w-10 h-7 rounded-t-md bg-[#1D1D41] hover:bg-gray-300`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" style={{ transform: 'rotate(270deg)' }} className="w-6 h-5 mx-auto mt-0.5 hover:text-[#1D1D41]">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                  </button>}
        </div>
    );
}

const MainController = (props) => {
    const { handleDroneFlightCommand, handleDroneFlightMode } = useContext(DroneContext);
    const handelReturnBtn = () => {
        handleDroneFlightMode(6)
        props.handleIsRtl();
    }
    const handleTakeoffBtn = () => {
        handleDroneFlightCommand(2)
        props.lastPathReset();
    }
    return (
        <div id='main-controller' className={`absolute flex justify-center overflow-hidden bottom-0 h-[220px] text-[#AEABD8]`}>
            <div className={`flex flex-col mt-0.5 mx-2`}>
                <button className={`w-20 h-10 mb-1.5 rounded-xl control_btn`} onClick={() => handleDroneFlightCommand(0)}>
                    Arm
                </button>
                <button className={`w-20 h-10 mb-1.5 rounded-xl control_btn`} onClick={() => handleTakeoffBtn()}>
                    Take Off
                </button>

                <button className={`w-20 h-10 mb-1.5 rounded-xl control_btn`} onClick={() => handleDroneFlightCommand(3)}>
                    Land
                </button>

                <button className={`w-20 h-10 mb-1.5 rounded-xl control_btn`} onClick={() => handleDroneFlightCommand(1)}>
                    Dis-Arm
                </button>
            </div>

            <div
                className={`flex flex-col justify-center items-center h-full rounded-t-3xl w-[200px] shadow-2xl ${ColorThema.Secondary4}`}>
                <span
                    className={`flex justify-center w-[40px] mb-3 rounded-md border border-[#6359E9] text-sm text-[#6359E9]`}>드론</span>
                <DroneJoyStick/>
            </div>
            <button onClick={props.handleIsController} className={`absolute bottom-0 w-5 h-5 rounded-t-md bg-white hover:bg-gray-300`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1D1D41" style={{ transform: 'rotate(90deg)' }} className="w-5 h-4 mx-auto mt-0.5 hover:text-white">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                </svg>
            </button>
            <div className={`flex flex-col justify-center items-center h-full rounded-t-3xl w-[200px] shadow-2xl ${ColorThema.Secondary4}`}>
                <span className={`flex justify-center w-[40px] mb-3 rounded-md border border-[#6359E9] text-sm text-[#6359E9]`}>제어</span>
                <ControlJoyStick/>
            </div>

            <div className={`flex flex-col mt-0.5 mx-2`}>
                <button className={`w-20 h-10 mb-1.5 rounded-xl control_btn`}>
                    Move
                </button>

                <button className={`w-20 h-10 mb-1.5 rounded-xl control_btn`} onClick={() => handleDroneFlightMode(17)}>
                    Break
                </button>

                <button className={`w-20 h-10 mb-1.5 rounded-xl control_btn`} onClick={() => handelReturnBtn()}>
                    Return
                </button>

            </div>
        </div>
    );
}

const Btn = (props) => {
    const [isSensorArea, setIsSensorArea] = useState(false);
    const [isLogArea, setIsLogArea] = useState(false);
    const {droneMessage, handleDroneFlightMode} = useContext(DroneContext);
    const droneState = droneMessage ? droneMessage['droneMessage'] : null;
    const handleMonitorTable = props.handleMonitorTable;
    const handleIndicator = props.handleIndicator;
    const handleIsMarker = props.handleIsMarker;

    const handleSensorArea = () => {
        setIsSensorArea(!isSensorArea);
    }

    const handleLogArea = () => {
        setIsLogArea(!isLogArea);
    }

    const printDroneLogs = (logdata) => {
        return logdata.map((entry, index) => (
            <div className={`flex flex-row justify-start items-start`} key={index}>
                <p className={`min-w-[180px]`} style={{ textAlign: 'left' }}>
                    {new Date(entry.logtime).toLocaleString()}
                </p>
                <p className={`min-w-[370px]`} style={{ textAlign: 'left' }}>
                    {entry.message}
                </p>
            </div>
        ));
    };

    return (
        <>
            {/* top button */}
            {/* sensor btn */}
            <button
                className={`absolute top-[10px] left-[179px] flex justify-center items-center w-[40px] h-[40px] bg-white hover:bg-gray-200 shadow-sm shadow-[#BBBBBB]`}
                onClick={handleSensorArea}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M16.5 7.5h-9v9h9v-9z"/>
                    <path fillRule="evenodd"
                          d="M8.25 2.25A.75.75 0 019 3v.75h2.25V3a.75.75 0 011.5 0v.75H15V3a.75.75 0 011.5 0v.75h.75a3 3 0 013 3v.75H21A.75.75 0 0121 9h-.75v2.25H21a.75.75 0 010 1.5h-.75V15H21a.75.75 0 010 1.5h-.75v.75a3 3 0 01-3 3h-.75V21a.75.75 0 01-1.5 0v-.75h-2.25V21a.75.75 0 01-1.5 0v-.75H9V21a.75.75 0 01-1.5 0v-.75h-.75a3 3 0 01-3-3v-.75H3A.75.75 0 013 15h.75v-2.25H3a.75.75 0 010-1.5h.75V9H3a.75.75 0 010-1.5h.75v-.75a3 3 0 013-3h.75V3a.75.75 0 01.75-.75zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V6.75z"
                          clipRule="evenodd"/>
                </svg>
            </button>
            {/* sensor area */}
            {isSensorArea
                ? (
                    <div className={`overflow-scroll`} style={{
                        position: 'absolute',
                        top: '60px',
                        left: '179px',
                        width: '320px',
                        height: '570px',
                        background: '#fff',
                        border: '1px solid #000'
                    }}>
                        <div className={`px-2`}>
                            <p>roll: {droneMessage && droneState.SensorData.roll_ATTITUDE}</p>
                            <p>pitch: {droneMessage && droneState.SensorData.pitch_ATTITUDE}</p>
                            <p>yaw: {droneMessage && droneState.SensorData.yaw_ATTITUDE}</p>
                            <p>xacc: {droneMessage && droneState.SensorData.xacc_RAW_IMU}</p>
                            <p>yacc: {droneMessage && droneState.SensorData.yacc_RAW_IMU}</p>
                            <p>zacc: {droneMessage && droneState.SensorData.zacc_RAW_IMU}</p>
                            <p>xgyro: {droneMessage && droneState.SensorData.xgyro_RAW_IMU}</p>
                            <p>ygyro: {droneMessage && droneState.SensorData.ygyro_RAW_IMU}</p>
                            <p>zgyro: {droneMessage && droneState.SensorData.zgyro_RAW_IMU}</p>
                            <p>xmag: {droneMessage && droneState.SensorData.xmag_RAW_IMU}</p>
                            <p>ymag: {droneMessage && droneState.SensorData.ymag_RAW_IMU}</p>
                            <p>zmag: {droneMessage && droneState.SensorData.zmag_RAW_IMU}</p>
                            <p>xvib: {droneMessage && droneState.SensorData.vibration_x_VIBRATION}</p>
                            <p>yvib: {droneMessage && droneState.SensorData.vibration_y_VIBRATION}</p>
                            <p>zvib: {droneMessage && droneState.SensorData.vibration_z_VIBRATION}</p>
                            <p>xacc_ofs: {droneMessage && droneState.SensorData.accel_cal_x_SENSOR_OFFSETS}</p>
                            <p>yacc_ofs: {droneMessage && droneState.SensorData.accel_cal_y_SENSOR_OFFSETS}</p>
                            <p>zacc_ofs: {droneMessage && droneState.SensorData.accel_cal_z_SENSOR_OFFSETS}</p>
                            <p>xmag_ofs: {droneMessage && droneState.SensorData.mag_ofs_x_SENSOR_OFFSETS}</p>
                            <p>ymag_ofs: {droneMessage && droneState.SensorData.mag_ofs_y_SENSOR_OFFSETS}</p>
                            <p>vx_global: {droneMessage && droneState.SensorData.vx_GLOBAL_POSITION_INT}</p>
                            <p>vy_global: {droneMessage && droneState.SensorData.vy_GLOBAL_POSITION_INT}</p>
                            <p>x_local: {droneMessage && droneState.SensorData.x_LOCAL_POSITION_NED}</p>
                            <p>vx_local: {droneMessage && droneState.SensorData.vx_LOCAL_POSITION_NED}</p>
                            <p>vy_local: {droneMessage && droneState.SensorData.vy_LOCAL_POSITION_NED}</p>
                            <p>nav_pitch: {droneMessage && droneState.SensorData.nav_pitch_NAV_CONTROLLER_OUTPUT}</p>
                            <p>nav_bearing: {droneMessage && droneState.SensorData.nav_bearing_NAV_CONTROLLER_OUTPUT}</p>
                            <p>servo3: {droneMessage && droneState.SensorData.servo3_raw_SERVO_OUTPUT_RAW}</p>
                            <p>servo8: {droneMessage && droneState.SensorData.servo8_raw_SERVO_OUTPUT_RAW}</p>
                            <p>groundspeed: {droneMessage && droneState.SensorData.groundspeed_VFR_HUD}</p>
                            <p>airspeed: {droneMessage && droneState.SensorData.airspeed_VFR_HUD}</p>
                            <p>press_abs: {droneMessage && droneState.SensorData.press_abs_SCALED_PRESSURE}</p>
                            <p>Vservo: {droneMessage && droneState.SensorData.Vservo_POWER_STATUS}</p>
                            <p>voltages1: {droneMessage && droneState.SensorData.voltages1_BATTERY_STATUS}</p>
                            <p>chancount: {droneMessage && droneState.SensorData.chancount_RC_CHANNELS}</p>
                            <p>chan12: {droneMessage && droneState.SensorData.chan12_raw_RC_CHANNELS}</p>
                            <p>chan13: {droneMessage && droneState.SensorData.chan13_raw_RC_CHANNELS}</p>
                            <p>chan14: {droneMessage && droneState.SensorData.chan14_raw_RC_CHANNELS}</p>
                            <p>chan15: {droneMessage && droneState.SensorData.chan15_raw_RC_CHANNELS}</p>
                            <p>chan16: {droneMessage && droneState.SensorData.chan16_raw_RC_CHANNELS}</p>
                        </div>
                    </div>
                )
                : null
            }
            {/* log btn */}
            <button
                className={`absolute top-[10px] left-[220px] flex justify-center items-center w-[40px] h-[40px] bg-white hover:bg-gray-200 shadow-sm shadow-[#BBBBBB]`}
                onClick={handleLogArea}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd"
                          d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                          clipRule="evenodd"/>
                </svg>
                {isLogArea
                    ? (
                        <div className={`overflow-scroll`} style={{
                            position: 'absolute',
                            top: '50px',
                            left: '-41px',
                            width: '600px',
                            height: '250px',
                            background: '#fff',
                            border: '1px solid #000'
                        }}>
                            <div className={`px-2`}>
                                {droneState.DroneLogger
                                    ? printDroneLogs(droneState.DroneLogger)
                                    : null
                                }
                            </div>
                        </div>
                    ) : null
                }
            </button>

            {/*left button */}
            <button onClick={props.handleIsLeftPanel}
                    className={`absolute top-[95px] left-[10px] flex justify-center items-center w-[40px] h-[40px] bg-white hover:bg-gray-200 shadow-sm shadow-[#BBBBBB]`}>
                {props.isLeftPanel
                    ?
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd"
                              d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
                              clipRule="evenodd"/>
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd"
                              d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
                              clipRule="evenodd"/>
                    </svg>}
            </button>

            <button onClick={handleMonitorTable}
                    className={`absolute top-[145px] left-[10px] flex justify-center items-center w-[40px] h-[40px] bg-white hover:bg-gray-200 shadow-sm shadow-[#BBBBBB]`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path
                        d="M5.625 3.75a2.625 2.625 0 1 0 0 5.25h12.75a2.625 2.625 0 0 0 0-5.25H5.625ZM3.75 11.25a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75ZM3 15.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75ZM3.75 18.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z"/>
                </svg>
            </button>

            <button onClick={handleIndicator}
                    className={`absolute top-[195px] left-[10px] flex justify-center items-center w-[40px] h-[40px] bg-white hover:bg-gray-200 shadow-sm shadow-[#BBBBBB]`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path
                        d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z"/>
                </svg>
            </button>

            {props.isMarker
                ?(<button onClick={handleIsMarker} className={`absolute top-[245px] left-[10px] flex justify-center items-center w-[40px] h-[40px] bg-[#6359E9] shadow-sm shadow-[#BBBBBB]`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd"/>
                    </svg></button>)
                :(<button onClick={handleIsMarker} className={`absolute top-[245px] left-[10px] flex justify-center items-center w-[40px] h-[40px] bg-white hover:bg-gray-200 shadow-sm shadow-[#BBBBBB]`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd"/>
                    </svg></button>)
            }


            {/* middle button */}
            <div className={`flex h-[30px] z-10 ml-[200px] mt-[10px]`}>

                {droneMessage && droneState.DroneStt.FlightMode === 3
                    ? <button className={`px-2 py-1 mr-0.5 rounded-md text-white bg-[#6359e9]`}>Auto</button>
                    : <button className={`px-2 py-1 mr-0.5 rounded-md text-white control_btn`}
                              onClick={() => handleDroneFlightMode(3)}>Auto</button>
                }
                {droneMessage && droneState.DroneStt.FlightMode === 0
                    ? <button className={`px-2 py-1 mr-0.5 rounded-md text-white bg-[#6359e9]`}>Stabilize</button>
                    : <button className={`px-2 py-1 mr-0.5 rounded-md text-white control_btn`}
                              onClick={() => handleDroneFlightMode(0)}>Stabilize</button>
                }
                {droneMessage && droneState.DroneStt.FlightMode === 5
                    ? <button className={`px-2 py-1 mr-0.5 rounded-md text-white bg-[#6359e9]`}>Loiter</button>
                    : <button className={`px-2 py-1 mr-0.5 rounded-md text-white control_btn`}
                              onClick={() => handleDroneFlightMode(5)}>Loiter</button>
                }
                {droneMessage && droneState.DroneStt.FlightMode === 16
                    ? <button className={`px-2 py-1 mr-0.5 rounded-md text-white bg-[#6359e9]`}>PosHold</button>
                    : <button className={`px-2 py-1 mr-0.5 rounded-md text-white control_btn`}
                              onClick={() => handleDroneFlightMode(16)}>PosHold</button>
                }
                {droneMessage && droneState.DroneStt.FlightMode === 2
                    ? <button className={`px-2 py-1 mr-0.5 rounded-md text-white bg-[#6359e9]`}>AltHold</button>
                    : <button className={`px-2 py-1 mr-0.5 rounded-md text-white control_btn`}
                              onClick={() => handleDroneFlightMode(2)}>AltHold</button>
                }
                {droneMessage && droneState.DroneStt.FlightMode === 4
                    ? <button className={`px-2 py-1 mr-0.5 rounded-md text-white bg-[#6359e9]`}>Guided</button>
                    : <button className={`px-2 py-1 mr-0.5 rounded-md text-white control_btn`}
                              onClick={() => handleDroneFlightMode(4)}>Guided</button>
                }
                {droneMessage && droneState.DroneStt.FlightMode === 17
                    ? <button className={`px-2 py-1 mr-0.5 rounded-md text-white bg-[#6359e9]`}>Break</button>
                    : <button className={`px-2 py-1 mr-0.5 rounded-md text-white control_btn`}
                              onClick={() => handleDroneFlightMode(17)}>Break</button>
                }
                {droneMessage && droneState.DroneStt.FlightMode === 3
                    ? <button className={`px-2 py-1 mr-0.5 rounded-md text-white bg-[#6359e9]`}>Break</button>
                    : <button className={`px-2 py-1 mr-0.5 rounded-md text-white control_btn`}
                              onClick={() => handleDroneFlightMode(3)}>Land</button>
                }
                {droneMessage && droneState.DroneStt.FlightMode === 6
                    ? <button className={`px-2 py-1 mr-0.5 rounded-md text-white bg-[#6359e9]`}>RTL</button>
                    : <button className={`px-2 py-1 mr-0.5 rounded-md text-white control_btn`}
                              onClick={() => handleDroneFlightMode(6)}>RTL</button>
                }
            </div>

            {/* right button */}
            <button onClick={props.handleIsRightPanel}
                    className={`absolute top-[60px] right-[10px] flex justify-center items-center w-[40px] h-[40px] bg-white hover:bg-gray-200 shadow-sm shadow-[#BBBBBB]`}>
                {props.isRightPanel
                    ?
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd"
                              d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
                              clipRule="evenodd"/>
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd"
                              d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
                              clipRule="evenodd"/>
                    </svg>}
            </button>

            <button onClick={props.handleSwapMap}
                    className={`absolute top-[110px] right-[10px] flex justify-center items-center w-[40px] h-[40px] bg-white hover:bg-gray-200 shadow-sm shadow-[#BBBBBB]`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd"
                          d="M15.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06l3.22-3.22H7.5a.75.75 0 010-1.5h11.69l-3.22-3.22a.75.75 0 010-1.06zm-7.94 9a.75.75 0 010 1.06l-3.22 3.22H16.5a.75.75 0 010 1.5H4.81l3.22 3.22a.75.75 0 11-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06l4.5-4.5a.75.75 0 011.06 0z"
                          clipRule="evenodd"/>
                </svg>
            </button>
        </>
    );
}
