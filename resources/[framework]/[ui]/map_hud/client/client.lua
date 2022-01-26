local Keys = {
	["ESC"] = 322, ["F1"] = 288, ["F2"] = 289, ["F3"] = 170, ["F5"] = 166, ["F6"] = 167, ["F7"] = 168, ["F8"] = 169, ["F9"] = 56, ["F10"] = 57, 
	["~"] = 243, ["1"] = 157, ["2"] = 158, ["3"] = 160, ["4"] = 164, ["5"] = 165, ["6"] = 159, ["7"] = 161, ["8"] = 162, ["9"] = 163, ["-"] = 84, ["="] = 83, ["BACKSPACE"] = 177, 
	["TAB"] = 37, ["Q"] = 44, ["W"] = 32, ["E"] = 38, ["R"] = 45, ["T"] = 245, ["Y"] = 246, ["U"] = 303, ["P"] = 199, ["["] = 39, ["]"] = 40, ["ENTER"] = 18,
	["CAPS"] = 137, ["A"] = 34, ["S"] = 8, ["D"] = 9, ["F"] = 23, ["G"] = 47, ["H"] = 74, ["K"] = 311, ["L"] = 182,
	["LEFTSHIFT"] = 21, ["Z"] = 20, ["X"] = 73, ["C"] = 26, ["V"] = 0, ["B"] = 29, ["N"] = 249, ["M"] = 244, [","] = 82, ["."] = 81,
	["LEFTCTRL"] = 36, ["LEFTALT"] = 19, ["SPACE"] = 22, ["RIGHTCTRL"] = 70, 
	["HOME"] = 213, ["PAGEUP"] = 10, ["PAGEDOWN"] = 11, ["DELETE"] = 178,
	["LEFT"] = 174, ["RIGHT"] = 175, ["TOP"] = 27, ["DOWN"] = 173,
	["NENTER"] = 201, ["N4"] = 108, ["N5"] = 60, ["N6"] = 107, ["N+"] = 96, ["N-"] = 97, ["N7"] = 117, ["N8"] = 61, ["N9"] = 118
}

local mapon = false
local minimap = RequestScaleformMovie("minimap")
local Driving, pedinVeh = false, false, false
local player, vehicle, vehicleIsOn

--[[Functions]]--
TriggerVehicleLoop = function()
    if mapon then
	    Citizen.CreateThread(function()
		    ToggleRadar(true)
            SetRadarBigmapEnabled(false, false)
	    end)
    end
end

ToggleRadar = function(state)
	DisplayRadar(state)
	BeginScaleformMovieMethod(minimap, "SETUP_HEALTH_ARMOUR")
	ScaleformMovieMethodAddParamInt(3)
	EndScaleformMovieMethod()
end

--[[Threads]]--
Citizen.CreateThread(function()
    while true do
        Wait(1500)

        player = PlayerPedId()

        pedinVeh = IsPedInAnyVehicle(player, false)				
        vehicle = GetVehiclePedIsIn(player, false)
        vehicleIsOn = GetIsVehicleEngineRunning(vehicle)
        local mapoutline = false
        
        if pedinVeh and vehicleIsOn then
            if mapon then
                SetRadarZoom(1150)
                ToggleRadar(true)
                mapoutline = true
            else
                ToggleRadar(false)
            end
            if Driving == false then
                Driving = true
                TriggerVehicleLoop()
            end
            SendNUIMessage({mapoutline = mapoutline})
        else 
            ToggleRadar(false)
            mapoutline = false
            Driving = false
            SendNUIMessage({mapoutline = mapoutline})
        end
     
        if IsPauseMenuActive() then
            showUi = false
        else 
            showUi = true
        end
        
        SendNUIMessage({showUi = showUi})
    end
end)





--[[Map]]--
local x = -0.025
local y = -0.015
Citizen.CreateThread(function()

	RequestStreamedTextureDict("circlemap", false)
	while not HasStreamedTextureDictLoaded("circlemap") do
		Wait(100)
	end

	AddReplaceTexture("platform:/textures/graphics", "radarmasksm", "circlemap", "radarmasksm")

    SetMinimapClipType(1)
    SetMinimapComponentPosition('minimap', 'L', 'B', -0.022, -0.026, 0.16, 0.245)
    SetMinimapComponentPosition('minimap_mask', 'L', 'B', x + 0.21, y + 0.09, 0.071, 0.164)
    SetMinimapComponentPosition('minimap_blur', 'L', 'B', -0.032, -0.04, 0.18, 0.22)
    SetRadarBigmapEnabled(true, false)
    Wait(150)
    SetRadarBigmapEnabled(false, false)
end)
--[[End of Map]]--
 
  
RegisterNUICallback('getmap', function(data, cb)
    mapon = data.mapon
    cb(mapon)
end)