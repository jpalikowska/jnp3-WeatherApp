import { MapWrapper } from './MapWrapper';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvent } from 'react-leaflet';
import MapIcon from './MapIcon'
import { divIcon } from 'leaflet';
import * as ReactDOMServer from 'react-dom/server';
import "leaflet/dist/leaflet.css";

import { useDispatch, useSelector } from 'react-redux';

import { locationSelector, displayedCitiesDataSelector } from '../../forecast/selectors';
import { useEffect } from 'react';
import { setCurrentCities } from '../../forecast/reducer';

function getIcon(city) {
    return divIcon({ className: "custom icon", iconAnchor: [30, 30], html: ReactDOMServer.renderToString(<MapIcon city={city} />) })
}

function popupContent(city) {
    return (
        `Temperature: ${city.temp_c} C
        Pressure: ${city.pressure_mb} mb
        Rain: ${city.precip_mm} mm`
    )
}

function CenterMapProvider() {
    const location = useSelector(locationSelector);
    const dispatch = useDispatch();
    const map = useMap();

    function getBBox() {
        const bounds = map.getBounds();
        const southWest = bounds.getSouthWest(); // South-west corner of the map view
        const northEast = bounds.getNorthEast();
        const bbox = {
            south: southWest.lat,
            west: southWest.lng,
            north: northEast.lat,
            east: northEast.lng
        };
        return bbox;
    }

    useEffect(() => {
        map.setView(location, map.getZoom());
        dispatch(setCurrentCities(getBBox()));
    }, [location]);

    useMapEvent('moveend', () => {
        dispatch(setCurrentCities(getBBox()));
    })

    return null;
}

function Map() {
    const citiesData = useSelector(displayedCitiesDataSelector);

    return (
        <MapWrapper>
            <MapContainer center={[48.8566, 2.3522]} zoom={5}>
                <CenterMapProvider />
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {
                    citiesData.map((city: any) =>
                        <Marker key={city.name} position={[city.lat, city.lon]} icon={getIcon(city)}>
                            <Popup>
                                {popupContent(city)}
                            </Popup>
                        </Marker>
                    )
                }
            </MapContainer>
        </MapWrapper>
    );
}

export default Map;