import { DefaultUi, Player, Youtube } from "@vime/react";
import { DiscordLogo, Lightning } from "phosphor-react";
import { Button } from "./gears/Button";
import { Smartlink } from "./gears/Smartlink";

import "@vime/core/themes/default.css";

export function Video() {
  return (
    <>
      {/* whole player and description section */}
      <div className="flex-1">
        {/* player container*/}
        <div className="bg-black flex justify-center">
          {/* actual video*/}
          <div className="bg-black h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
            <Player>
              <Youtube videoId="W05FYkqv7hM" />
              <DefaultUi />
            </Player>
          </div>
        </div>
        {/* additional info below player */}
        <div className="p-8 max-w-[1100px] mx-auto">
          {/* [ROW] lesson title, description, and buttons*/}
          <div className="flex items-start gap-16">
            {/* [COL] lesson title & description*/}
            <div className="flex-1">
              {/* lesson title */}
              <h1 className="text-2xl font-bold">
                Aula 01 - Abertura do Ignite Lab
              </h1>
              {/* lesson description */}
              <p className="mt-4 text-gray-200 leading-relaxed">
                We knew the world would not be the same. A few people laughed. A
                few people cried. Most people were silent. I remember the line
                of the hindu scripture, the Bhagavad-Gita. Vishnu is trying to
                persuade the prince that he should do his duty and, to impress
                him, takes on his multiarmed form and says "Now I am become
                death, the destroyer of worlds". I suppose we all thought that,
                one way or another.
              </p>

              <div className="flex items-center gap-4 mt-6">
                <img
                  className="h-16 w-16 rounded-full border-2 border-orange-500 "
                  src="https://github.com/helpii.png"
                  alt=""
                />
                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block">Helpii</strong>
                  <span className="text-gray-200 text-sm block">
                    Guiding Spirit @ Helplit
                  </span>
                </div>
              </div>
            </div>
            {/* [COL] buttons */}
            <div className="flex flex-col gap-4">
              <Button variant="primary">
                <DiscordLogo size={24} />
                Comunidade do Discord
              </Button>
              <Button variant="secondary">
                <Lightning size={24} />
                Acesse o desafio
              </Button>
            </div>
          </div>
          {/* [ROW] smartlinks */}
          <div className="gap-8 mt-20 grid grid-cols-2">
            <Smartlink
              variant="intra-org"
              title="Material Complementar"
              description="Acesse os extras para acelerar o seu desenvolvimento"
            />
            <Smartlink
              variant="extra-org"
              title="Wallpapers exclusivos"
              description="Baixe imagens em alta definição do Ignite Lab e personalize seu PC."
            />
          </div>
        </div>
      </div>
    </>
  );
}
