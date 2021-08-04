<template>
    <div>
                 <div class="search-container">
            <div class="search-container-property">
              <form class="grid">
                <div class="form-input bordered no-border flex">
                  <span><img src="/img/home/header/location.svg" /></span>
                  <input type="text" placeholder="Name, State, City..." />
                </div>
                <div class="grid grid-btw">
                  <div class="form-input bordered b-left in-btw flex">
                    <span><img src="/img/home/header/home.svg" /></span>

                    <input type="text" value="Property Type" />
                  </div>
                  <div class="form-input bordered in-btw flex">
                    <span><img src="/img/home/header/naira.svg" /></span>
                    <input type="text" placeholder="Maximum Price" />
                  </div>
                  <div class="form-input bordered in-btw no-border flex">
                    <span><img src="/img/home/header/naira.svg" /></span>
                    <input type="text" placeholder="Property Status" />
                  </div>
                </div>
                <div class="form-input flex">
                  <input
                    class="submit-property"
                    value="Search"
                    type="submit"
                    id=""
                    name=""
                  />
                </div>
              </form>
            </div>
          </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>