import React from "react";

export default function Box() {

    return (
        <mesh
            scale={[1, 1, 1]}
            rotation={[15, 15, 15]}
            position={[5, 3, 1]}
        >
            <boxGeometry />
            <meshTransmissionMaterial/>
        </mesh>
    )

}
