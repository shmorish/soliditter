import { For, Show } from "solid-js";
import { A } from "@solidjs/router";
import { FiMoreHorizontal } from "solid-icons/fi";
import { RiDesignQuillPenLine } from "solid-icons/ri";

import { links } from "./links";
import Popup from "../utils/Popup";
import pageSize from "../../reactive/pageSize";


const MainSidebar = () => {
  return (
    <header class="lg:flex-grow flex-it items-end">
      <div class="xl:w-80 w-20 flex-it">
        <div class="h-full fixed flex-it top-0">
          <div class="flex-it h-full xl:w-80 w-20 overflow-y-auto px-3 justify-between">
            <div class="flex-it items-start">
              <div class="p-3 pt-4 xl:pb-3 pb-0 xl:text-2xl text-sm font-bold transition duration-200 hover:opacity-80">
                <a href="#">
                  <h1>Zangi</h1>
                </a>
              </div>
              <div class="my-1 w-full flex-it">
                <nav class="flex-it items-start">
                  <For each={links}>
                    {
                      (link) =>
                        <A class="flex-it items-start flex-grow w-full" href={link.href}>
                          <div class="p-3 flex-row justify-center items-center flex-it rounded-3xl hover:bg-gray-800 hover:rounded-3xl transition duration-200">
                            <div class="flex-it">
                              {link.icon()}
                            </div>
                            <div class="mx-4 text-2xl truncate xl:block hidden">
                              <span class="truncate">{link.name}</span>
                            </div>
                          </div>
                        </A>
                    }
                  </For>

                </nav>
              </div>
              {/* GLIDER SEND-MESSAGE BUTTON */}
              <div class="my-1 flex-it w-10/12 cursor-pointer">
                <div class="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full flex-it transition">
                  <div class="flex-it flex-row text-xl font-bold text-white items-start justify-center truncate duration-200">
                    <Show
                      when={pageSize.isXl()}
                      fallback={<RiDesignQuillPenLine />}
                    >
                      <div>懺悔する</div>
                    </Show>
                  </div>
                </div>
              </div>
            </div>
            {/* PROFILE MENU */}
            <div class="flex-it my-3 hover:cursor-pointer">
              {/* <UserSettingPopup /> */}
              {/* POPUP START*/}
              <Popup
                opener={() =>
                  <div class="mb-3 flex-it items-center flex-row p-3 rounded-3xl hover:bg-gray-800 hover:rounded-3xl transition duration-200 cursor-pointer">
                    <div class="flex-it">
                      <div class="w-10 h-10 overflow-visible">
                        <img
                          class="rounded-full"
                          src="https://cdn.intra.42.fr/users/178cc86cc4333abfb20f61a684ff28ec/shmorish.jpg"
                        ></img>
                      </div>
                    </div>
                    <div class="flex-it xl:flex hidden flex-grow flex-row justify-between items-center">
                      <div class="flex-it mx-3 font-bold">shmorish</div>
                      <div class="flex-it">
                        <FiMoreHorizontal />
                      </div>
                    </div>
                  </div>

                }
              />

              {/* POPUP END */}
            </div>
          </div>
        </div>
      </div>
    </header >
  )
}

export default MainSidebar;