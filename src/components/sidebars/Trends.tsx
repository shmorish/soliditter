import { For } from "solid-js";

const randomize = () => Math.floor(Math.random() * 1000)

const trends = [
  {
    category: "Sports",
    content: "Some team won something",
    glideCount: randomize()
  },
  {
    category: "Finance",
    content: "Bitcoin",
    glideCount: randomize()
  },
  {
    category: "Games",
    content: "new veision Minecraft",
    glideCount: randomize()
  },
  {
    category: "Economy",
    content: "Some useless",
    glideCount: randomize()
  },
  {
    category: "Movie",
    content: "Conan fun",
    glideCount: randomize()
  },
  {
    category: "KAG",
    content: "KAGKAG",
    glideCount: randomize()
  },
]


const TrendSidebar = () => {
  return (
    <div class="bg-gray-800 overflow-hidden flex-it rounded-2xl">
      <div class="flex-it p-4">
        <span class="text-xl font-bold">Trends</span>
      </div>
      <For each={trends}>
        {
          (trend) =>
            <div class="flex-it p-4 cursor-pointer transition duration-200 hover:bg-gray-700">
              <div class="flex-it">
                <span class="text-gray-400 text-sm">
                  {trend.category}
                </span>
                <span class="text-lg font-bold">{trend.content}</span>
                <span class="text-gray-400 text-sm">{trend.glideCount} glides</span>
              </div>
            </div>
        }
      </For>
    </div>
  )
}

export default TrendSidebar;