import React from 'react';
import { Text3D, Center } from '@react-three/drei';

export default function WelcomeMessage() {
  return (
    <Center position={[0, 0, 7]}  /* x and y are vertical and horizontal positions with respect to the user's viewport, 
                                     z is depth (size, effectively, since it's rendered on top of all other geometry) */>
      <Text3D font="/MK2font_reversed.json"  /* font is processed in reverse order to fix issues with holes in letters like 'o' and 'p',
                                                note that this doesnt reverse the letters or anything. */
              rotation={[0, Math.PI, 0]}     // font needed to be rotated about y-axis so it wasn't backwards
              renderOrder={999}              /* renderOrder is set to 999 to make sure it's always on top */>
        
        {`Welcome\n     To My \n  Website`}

        <meshNormalMaterial depthTest={false} // these are set to false to render text on top
                            depthWrite={false} />
      </Text3D>
    </Center>
  )
}