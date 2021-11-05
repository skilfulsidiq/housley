<template>

       <div class="cr_body_cover2">
            <div class="cr_header_2">
              <span><b>{{document_count.total_uploaded}}</b> out of <b>{{document_count.total_doc}}</b> Documents Uploaded</span>
            </div>
            <div class="cr-border"></div>

            <div class="doc_item" v-for="p in uploaded_docs" :key="p.id">
              <svg
                style="margin-right: 30px"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99996 18.9582C5.05829 18.9582 1.04163 14.9415 1.04163 9.99984C1.04163 5.05817 5.05829 1.0415 9.99996 1.0415C14.9416 1.0415 18.9583 5.05817 18.9583 9.99984C18.9583 14.9415 14.9416 18.9582 9.99996 18.9582ZM9.99996 2.2915C5.74996 2.2915 2.29163 5.74984 2.29163 9.99984C2.29163 14.2498 5.74996 17.7082 9.99996 17.7082C14.25 17.7082 17.7083 14.2498 17.7083 9.99984C17.7083 5.74984 14.25 2.2915 9.99996 2.2915Z"
                  fill="#0FBC49"
                />
                <path
                  d="M8.8167 12.9832C8.65003 12.9832 8.4917 12.9165 8.37503 12.7998L6.0167 10.4415C5.77503 10.1998 5.77503 9.79984 6.0167 9.55817C6.25837 9.3165 6.65837 9.3165 6.90003 9.55817L8.8167 11.4748L13.1 7.1915C13.3417 6.94984 13.7417 6.94984 13.9834 7.1915C14.225 7.43317 14.225 7.83317 13.9834 8.07484L9.25837 12.7998C9.1417 12.9165 8.98337 12.9832 8.8167 12.9832Z"
                  fill="#0FBC49"
                />
              </svg>
              <span>{{p.doc.name}}</span>
            </div>

            <!-- upload -->
            <div style="margin-top: 30px">
              <nuxt-link to="/dashboard/document" class="upl_btn">Upload documents</nuxt-link>
            </div>
        </div>

</template>

<script>
  export default {

    computed:{
      document_count(){
        let d = this.$store.state.dashboard.document_count;
        return d;
      },
      uploaded_docs(){
          let d = this.$store.state.dashboard.uploaded_documents;
          return d.slice(0, 4);
      }
    }
  }
</script>

<style lang="scss" scoped>
.cr_header_2 b{
  color:$secondary;
}
.upl_btn {
    border: 1px solid $secondary;
    color: $secondary;
}
</style>
