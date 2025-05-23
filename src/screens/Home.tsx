import { Component, createSignal, createUniqueId, For } from "solid-js";
import { FaRegularImage } from "solid-icons/fa";
import MainLayout from "../components/layouts/Main";
import GlidePost from "../components/glides/GlidePost";
import { Glide } from "../types/Glide";


const HomeScreen: Component = () => {
  const [content, setContent] = createSignal("");
  const [glides, setGlides] = createSignal<Glide[]>([]);

  const createGlide = () => {
    const glide = {
      id: createUniqueId(),
      content: content(),
      user: {
        nickName: "shmorish",
        avatar: "https://cdn.intra.42.fr/users/178cc86cc4333abfb20f61a684ff28ec/shmorish.jpg",
      },
      likesCount: 0,
      subglidesCount: 0,
      date: new Date()
    }
    setGlides([glide, ...glides()])
    setContent("")
    // console.log(JSON.stringify(glides()))
  }

  return (
    <MainLayout>
      {/* HOME PAGE START */}
      <div class="flex-it py-1 px-4 flex-row">
        <div class="flex-it mr-4">
          <div class="w-12 h-12 overflow-visible cursor-pointer transition duration-200 hover:opacity-80">
            <img
              class="rounded-full"
              src="https://cdn.intra.42.fr/users/178cc86cc4333abfb20f61a684ff28ec/shmorish.jpg"
            ></img>
          </div>
        </div>
        {/* MESSENGER START */}
        <div class="flex-it flex-grow">
          <div class="flex-it">
            <textarea
              value={content()}
              onInput={(event) => {
                setContent(event.currentTarget.value)
              }}
              name="content"
              rows="1"
              id="glide"
              class="bg-transparent resize-none overflow-hidden block !outline-none !border-none border-transparent focus:border-transparent focus:ring-0 text-gray-100 text-xl w-full p-0"
              placeholder={"What's new?"}
            />
          </div>
          <div class="flex-it mb-1 flex-row xs:justify-between items-center">
            <div class="flex-it mt-3 mr-3 cursor-pointer text-white hover:text-blue-400 transition">
              <div class="upload-btn-wrapper">
                <FaRegularImage class="cursor-pointer" size={18} />
                <input type="file" name="myfile" />
              </div>
            </div>
            <div class="flex-it w-32 mt-3 cursor-pointer">
              <button
                onClick={createGlide}
                // disabled={content().trim() === ""}
                type="button"
                class="
                            disabled:cursor-not-allowed disabled:bg-gray-400
                            bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full flex-it transition duration-200"
              >
                <div class="flex-it flex-row text-sm font-bold text-white items-start justify-center">
                  <span>懺悔する</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* MESSENGER END */}
      </div>
      <div class="h-px bg-gray-700 my-1" />
      <For each={glides()}>
        {(glide) => (
          <div>
            <GlidePost glide={glide} />
          </div>
        )}
      </For>
      {/* HOME PAGE END */}
    </MainLayout>
  );
};

export default HomeScreen;