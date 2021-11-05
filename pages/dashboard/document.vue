<template>
  <div >

        <div class="content_body">
          <h3 class="app_head">Documents</h3>
          <p class="app_para">
            Upload the following documents for speedy processing of submitted
            application
          </p>
        </div>

        <div class="table_cover">
          <table class="table">
            <thead>
              <tr>
                <!-- <th scope="col">s/n</th> -->
                <th scope="col">Document Type</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="done in uploaded_docs" :key="done.id">
                <td>{{done.doc.name}}</td>
                <td class="td-text"><div :class="done.is_uploaded==1?'pill_a':'pill_p'">{{done.is_uploaded==1?'Uploaded':"Pending"}}</div></td>
                <td class="td-text">
                  <div class="action_cover ">
                    <!-- 1 -->
                         <input  @change="addFile" type="file" style="display:none" :id="done.doc.id.toString()" accept="image/png, image/jpeg, application/pdf">
                    <div class="action cursor" @click="triggerUpload(done.doc)">

                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.4998 18.9582H7.49984C2.97484 18.9582 1.0415 17.0248 1.0415 12.4998V7.49984C1.0415 2.97484 2.97484 1.0415 7.49984 1.0415H9.1665C9.50817 1.0415 9.7915 1.32484 9.7915 1.6665C9.7915 2.00817 9.50817 2.2915 9.1665 2.2915H7.49984C3.65817 2.2915 2.2915 3.65817 2.2915 7.49984V12.4998C2.2915 16.3415 3.65817 17.7082 7.49984 17.7082H12.4998C16.3415 17.7082 17.7082 16.3415 17.7082 12.4998V10.8332C17.7082 10.4915 17.9915 10.2082 18.3332 10.2082C18.6748 10.2082 18.9582 10.4915 18.9582 10.8332V12.4998C18.9582 17.0248 17.0248 18.9582 12.4998 18.9582Z"
                          fill="#FFAB00"
                        />
                        <path
                          d="M7.08311 14.7415C6.57478 14.7415 6.10811 14.5581 5.76645 14.2248C5.35811 13.8165 5.18311 13.2248 5.27478 12.5998L5.63311 10.0915C5.69978 9.60814 6.01645 8.98314 6.35811 8.64147L12.9248 2.0748C14.5831 0.416471 16.2664 0.416471 17.9248 2.0748C18.8331 2.98314 19.2414 3.90814 19.1581 4.83314C19.0831 5.58314 18.6831 6.31647 17.9248 7.06647L11.3581 13.6331C11.0164 13.9748 10.3914 14.2915 9.90811 14.3581L7.39978 14.7165C7.29145 14.7415 7.18311 14.7415 7.08311 14.7415ZM13.8081 2.95814L7.24145 9.5248C7.08311 9.68314 6.89978 10.0498 6.86645 10.2665L6.50811 12.7748C6.47478 13.0165 6.52478 13.2165 6.64978 13.3415C6.77478 13.4665 6.97478 13.5165 7.21645 13.4831L9.72478 13.1248C9.94145 13.0915 10.3164 12.9081 10.4664 12.7498L17.0331 6.18314C17.5748 5.64147 17.8581 5.15814 17.8998 4.70814C17.9498 4.16647 17.6664 3.59147 17.0331 2.9498C15.6998 1.61647 14.7831 1.99147 13.8081 2.95814Z"
                          fill="#FFAB00"
                        />
                        <path
                          d="M16.5418 8.19173C16.4835 8.19173 16.4251 8.1834 16.3751 8.16673C14.1835 7.55006 12.4418 5.8084 11.8251 3.61673C11.7335 3.2834 11.9251 2.94173 12.2585 2.84173C12.5918 2.75006 12.9335 2.94173 13.0251 3.27506C13.5251 5.05006 14.9335 6.4584 16.7085 6.9584C17.0418 7.05006 17.2335 7.40006 17.1418 7.7334C17.0668 8.01673 16.8168 8.19173 16.5418 8.19173Z"
                          fill="#FFAB00"
                        />
                      </svg>
                      Edit
                    </div>
                    <!-- 2 -->
                    <div class="action cursor" @click="removeFile(done)">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5 4.98356C14.725 4.70856 11.9333 4.56689 9.15 4.56689C7.5 4.56689 5.85 4.65023 4.2 4.81689L2.5 4.98356"
                          stroke="#FF5630"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.0835 4.1415L7.26683 3.04984C7.40016 2.25817 7.50016 1.6665 8.9085 1.6665H11.0918C12.5002 1.6665 12.6085 2.2915 12.7335 3.05817L12.9168 4.1415"
                          stroke="#FF5630"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.7082 7.6167L15.1665 16.0084C15.0748 17.3167 14.9998 18.3334 12.6748 18.3334H7.32484C4.99984 18.3334 4.92484 17.3167 4.83317 16.0084L4.2915 7.6167"
                          stroke="#FF5630"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.6084 13.75H11.3834"
                          stroke="#FF5630"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.9165 10.4165H12.0832"
                          stroke="#FF5630"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Delete
                    </div>
                    <!-- 3 -->
                    <div class="action cursor" @click="viewDoc(done)" v-if="done.resource_type !='pdf'">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.99994 13.6083C8.00827 13.6083 6.3916 11.9916 6.3916 9.99994C6.3916 8.00827 8.00827 6.3916 9.99994 6.3916C11.9916 6.3916 13.6083 8.00827 13.6083 9.99994C13.6083 11.9916 11.9916 13.6083 9.99994 13.6083ZM9.99994 7.6416C8.69994 7.6416 7.6416 8.69994 7.6416 9.99994C7.6416 11.2999 8.69994 12.3583 9.99994 12.3583C11.2999 12.3583 12.3583 11.2999 12.3583 9.99994C12.3583 8.69994 11.2999 7.6416 9.99994 7.6416Z"
                          fill="#38CB89"
                        />
                        <path
                          d="M9.9999 17.5167C6.86657 17.5167 3.90824 15.6834 1.8749 12.5001C0.991569 11.1251 0.991569 8.8834 1.8749 7.50006C3.91657 4.31673 6.8749 2.4834 9.9999 2.4834C13.1249 2.4834 16.0832 4.31673 18.1166 7.50006C18.9999 8.87506 18.9999 11.1167 18.1166 12.5001C16.0832 15.6834 13.1249 17.5167 9.9999 17.5167ZM9.9999 3.7334C7.30824 3.7334 4.73324 5.35006 2.93324 8.17507C2.30824 9.15006 2.30824 10.8501 2.93324 11.8251C4.73324 14.6501 7.30824 16.2667 9.9999 16.2667C12.6916 16.2667 15.2666 14.6501 17.0666 11.8251C17.6916 10.8501 17.6916 9.15006 17.0666 8.17507C15.2666 5.35006 12.6916 3.7334 9.9999 3.7334Z"
                          fill="#38CB89"
                        />
                      </svg>
                      View
                    </div>
                    <a :href="done.filename" target="_blank" v-if="done.resource_type=='pdf'">
                    <div class="action cursor"  >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.99994 13.6083C8.00827 13.6083 6.3916 11.9916 6.3916 9.99994C6.3916 8.00827 8.00827 6.3916 9.99994 6.3916C11.9916 6.3916 13.6083 8.00827 13.6083 9.99994C13.6083 11.9916 11.9916 13.6083 9.99994 13.6083ZM9.99994 7.6416C8.69994 7.6416 7.6416 8.69994 7.6416 9.99994C7.6416 11.2999 8.69994 12.3583 9.99994 12.3583C11.2999 12.3583 12.3583 11.2999 12.3583 9.99994C12.3583 8.69994 11.2999 7.6416 9.99994 7.6416Z"
                          fill="#38CB89"
                        />
                        <path
                          d="M9.9999 17.5167C6.86657 17.5167 3.90824 15.6834 1.8749 12.5001C0.991569 11.1251 0.991569 8.8834 1.8749 7.50006C3.91657 4.31673 6.8749 2.4834 9.9999 2.4834C13.1249 2.4834 16.0832 4.31673 18.1166 7.50006C18.9999 8.87506 18.9999 11.1167 18.1166 12.5001C16.0832 15.6834 13.1249 17.5167 9.9999 17.5167ZM9.9999 3.7334C7.30824 3.7334 4.73324 5.35006 2.93324 8.17507C2.30824 9.15006 2.30824 10.8501 2.93324 11.8251C4.73324 14.6501 7.30824 16.2667 9.9999 16.2667C12.6916 16.2667 15.2666 14.6501 17.0666 11.8251C17.6916 10.8501 17.6916 9.15006 17.0666 8.17507C15.2666 5.35006 12.6916 3.7334 9.9999 3.7334Z"
                          fill="#38CB89"
                        />
                      </svg>
                      View
                    </div>
                  </a>

                  </div>
                </td>
              </tr>
              <tr v-for="p in pending_docs" :key="p.id">
                 <td>{{p.name}}</td>
                <td class="td-text"><div class="pill_p">Pedning</div></td>
                <td class="td-text">
                  <div class="action_cover">
                    <!-- 1 -->
                     <input  @change="addFile" type="file" style="display:none" :id="p.id.toString()" accept="image/png, image/jpeg, application/pdf">
                    <div class="action cursor" @click="triggerUpload(p)">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.4998 18.9582H7.49984C2.97484 18.9582 1.0415 17.0248 1.0415 12.4998V7.49984C1.0415 2.97484 2.97484 1.0415 7.49984 1.0415H9.1665C9.50817 1.0415 9.7915 1.32484 9.7915 1.6665C9.7915 2.00817 9.50817 2.2915 9.1665 2.2915H7.49984C3.65817 2.2915 2.2915 3.65817 2.2915 7.49984V12.4998C2.2915 16.3415 3.65817 17.7082 7.49984 17.7082H12.4998C16.3415 17.7082 17.7082 16.3415 17.7082 12.4998V10.8332C17.7082 10.4915 17.9915 10.2082 18.3332 10.2082C18.6748 10.2082 18.9582 10.4915 18.9582 10.8332V12.4998C18.9582 17.0248 17.0248 18.9582 12.4998 18.9582Z"
                          fill="#FFAB00"
                        />
                        <path
                          d="M7.08311 14.7415C6.57478 14.7415 6.10811 14.5581 5.76645 14.2248C5.35811 13.8165 5.18311 13.2248 5.27478 12.5998L5.63311 10.0915C5.69978 9.60814 6.01645 8.98314 6.35811 8.64147L12.9248 2.0748C14.5831 0.416471 16.2664 0.416471 17.9248 2.0748C18.8331 2.98314 19.2414 3.90814 19.1581 4.83314C19.0831 5.58314 18.6831 6.31647 17.9248 7.06647L11.3581 13.6331C11.0164 13.9748 10.3914 14.2915 9.90811 14.3581L7.39978 14.7165C7.29145 14.7415 7.18311 14.7415 7.08311 14.7415ZM13.8081 2.95814L7.24145 9.5248C7.08311 9.68314 6.89978 10.0498 6.86645 10.2665L6.50811 12.7748C6.47478 13.0165 6.52478 13.2165 6.64978 13.3415C6.77478 13.4665 6.97478 13.5165 7.21645 13.4831L9.72478 13.1248C9.94145 13.0915 10.3164 12.9081 10.4664 12.7498L17.0331 6.18314C17.5748 5.64147 17.8581 5.15814 17.8998 4.70814C17.9498 4.16647 17.6664 3.59147 17.0331 2.9498C15.6998 1.61647 14.7831 1.99147 13.8081 2.95814Z"
                          fill="#FFAB00"
                        />
                        <path
                          d="M16.5418 8.19173C16.4835 8.19173 16.4251 8.1834 16.3751 8.16673C14.1835 7.55006 12.4418 5.8084 11.8251 3.61673C11.7335 3.2834 11.9251 2.94173 12.2585 2.84173C12.5918 2.75006 12.9335 2.94173 13.0251 3.27506C13.5251 5.05006 14.9335 6.4584 16.7085 6.9584C17.0418 7.05006 17.2335 7.40006 17.1418 7.7334C17.0668 8.01673 16.8168 8.19173 16.5418 8.19173Z"
                          fill="#FFAB00"
                        />
                      </svg>
                      Upload
                    </div>
                    <!-- 2 -->
                    <!-- <div class="action">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5 4.98356C14.725 4.70856 11.9333 4.56689 9.15 4.56689C7.5 4.56689 5.85 4.65023 4.2 4.81689L2.5 4.98356"
                          stroke="#FF5630"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.0835 4.1415L7.26683 3.04984C7.40016 2.25817 7.50016 1.6665 8.9085 1.6665H11.0918C12.5002 1.6665 12.6085 2.2915 12.7335 3.05817L12.9168 4.1415"
                          stroke="#FF5630"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.7082 7.6167L15.1665 16.0084C15.0748 17.3167 14.9998 18.3334 12.6748 18.3334H7.32484C4.99984 18.3334 4.92484 17.3167 4.83317 16.0084L4.2915 7.6167"
                          stroke="#FF5630"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.6084 13.75H11.3834"
                          stroke="#FF5630"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.9165 10.4165H12.0832"
                          stroke="#FF5630"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Delete
                    </div> -->
                    <!-- 3 -->
                    <!-- <div class="action">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.99994 13.6083C8.00827 13.6083 6.3916 11.9916 6.3916 9.99994C6.3916 8.00827 8.00827 6.3916 9.99994 6.3916C11.9916 6.3916 13.6083 8.00827 13.6083 9.99994C13.6083 11.9916 11.9916 13.6083 9.99994 13.6083ZM9.99994 7.6416C8.69994 7.6416 7.6416 8.69994 7.6416 9.99994C7.6416 11.2999 8.69994 12.3583 9.99994 12.3583C11.2999 12.3583 12.3583 11.2999 12.3583 9.99994C12.3583 8.69994 11.2999 7.6416 9.99994 7.6416Z"
                          fill="#38CB89"
                        />
                        <path
                          d="M9.9999 17.5167C6.86657 17.5167 3.90824 15.6834 1.8749 12.5001C0.991569 11.1251 0.991569 8.8834 1.8749 7.50006C3.91657 4.31673 6.8749 2.4834 9.9999 2.4834C13.1249 2.4834 16.0832 4.31673 18.1166 7.50006C18.9999 8.87506 18.9999 11.1167 18.1166 12.5001C16.0832 15.6834 13.1249 17.5167 9.9999 17.5167ZM9.9999 3.7334C7.30824 3.7334 4.73324 5.35006 2.93324 8.17507C2.30824 9.15006 2.30824 10.8501 2.93324 11.8251C4.73324 14.6501 7.30824 16.2667 9.9999 16.2667C12.6916 16.2667 15.2666 14.6501 17.0666 11.8251C17.6916 10.8501 17.6916 9.15006 17.0666 8.17507C15.2666 5.35006 12.6916 3.7334 9.9999 3.7334Z"
                          fill="#38CB89"
                        />
                      </svg>
                      View
                    </div> -->
                  </div>
                </td>
              </tr>


            </tbody>
          </table>
        </div>
        <!-- mobile table -->
        <div class="res_table_cover" v-for="done in uploaded_docs" :key="done.id">
          <div class="res_table">
            <!-- 1 -->
            <div class="">
              <span class="res_table_label">Document type</span>
              <h6 class="res_table_data">{{done.doc.name}}</h6>
            </div>
            <!-- 2 -->
            <div class="res_table_">
              <!-- <span class="res_table_label">Date of application</span>
              <h6 class="res_table_data">12 JAN, 2021</h6> -->
            </div>
            <!-- 3 -->
            <div class="res_table_">
              <span class="res_table_label">Status</span>
              <div class="res_info" :class="done.is_uploaded==1?'pill_a':'pill_p'">{{done.is_uploaded==1?'Uploaded':"Pending"}}</div>

            </div>
            <!-- 4 -->
            <div class="res_table_">

              <span class="res_table_label">Action</span>
              <div class="action_cover res_info">
                <input  @change="addFile" type="file" style="display:none" :id="done.doc.id.toString()" accept="image/png, image/jpeg, application/pdf">
                <!-- 1 -->
                <div class="action cursor" @click="triggerUpload(done.doc)">
                  <svg
                    class="svg-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.4998 18.9582H7.49984C2.97484 18.9582 1.0415 17.0248 1.0415 12.4998V7.49984C1.0415 2.97484 2.97484 1.0415 7.49984 1.0415H9.1665C9.50817 1.0415 9.7915 1.32484 9.7915 1.6665C9.7915 2.00817 9.50817 2.2915 9.1665 2.2915H7.49984C3.65817 2.2915 2.2915 3.65817 2.2915 7.49984V12.4998C2.2915 16.3415 3.65817 17.7082 7.49984 17.7082H12.4998C16.3415 17.7082 17.7082 16.3415 17.7082 12.4998V10.8332C17.7082 10.4915 17.9915 10.2082 18.3332 10.2082C18.6748 10.2082 18.9582 10.4915 18.9582 10.8332V12.4998C18.9582 17.0248 17.0248 18.9582 12.4998 18.9582Z"
                      fill="#FFAB00"
                    />
                    <path
                      d="M7.08311 14.7415C6.57478 14.7415 6.10811 14.5581 5.76645 14.2248C5.35811 13.8165 5.18311 13.2248 5.27478 12.5998L5.63311 10.0915C5.69978 9.60814 6.01645 8.98314 6.35811 8.64147L12.9248 2.0748C14.5831 0.416471 16.2664 0.416471 17.9248 2.0748C18.8331 2.98314 19.2414 3.90814 19.1581 4.83314C19.0831 5.58314 18.6831 6.31647 17.9248 7.06647L11.3581 13.6331C11.0164 13.9748 10.3914 14.2915 9.90811 14.3581L7.39978 14.7165C7.29145 14.7415 7.18311 14.7415 7.08311 14.7415ZM13.8081 2.95814L7.24145 9.5248C7.08311 9.68314 6.89978 10.0498 6.86645 10.2665L6.50811 12.7748C6.47478 13.0165 6.52478 13.2165 6.64978 13.3415C6.77478 13.4665 6.97478 13.5165 7.21645 13.4831L9.72478 13.1248C9.94145 13.0915 10.3164 12.9081 10.4664 12.7498L17.0331 6.18314C17.5748 5.64147 17.8581 5.15814 17.8998 4.70814C17.9498 4.16647 17.6664 3.59147 17.0331 2.9498C15.6998 1.61647 14.7831 1.99147 13.8081 2.95814Z"
                      fill="#FFAB00"
                    />
                    <path
                      d="M16.5418 8.19173C16.4835 8.19173 16.4251 8.1834 16.3751 8.16673C14.1835 7.55006 12.4418 5.8084 11.8251 3.61673C11.7335 3.2834 11.9251 2.94173 12.2585 2.84173C12.5918 2.75006 12.9335 2.94173 13.0251 3.27506C13.5251 5.05006 14.9335 6.4584 16.7085 6.9584C17.0418 7.05006 17.2335 7.40006 17.1418 7.7334C17.0668 8.01673 16.8168 8.19173 16.5418 8.19173Z"
                      fill="#FFAB00"
                    />
                  </svg>
                  Edit
                </div>
                <!-- 2 -->
                <div class="action cursor" @click="removeFile(done)">
                  <svg
                    class="svg-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 4.98356C14.725 4.70856 11.9333 4.56689 9.15 4.56689C7.5 4.56689 5.85 4.65023 4.2 4.81689L2.5 4.98356"
                      stroke="#FF5630"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.0835 4.1415L7.26683 3.04984C7.40016 2.25817 7.50016 1.6665 8.9085 1.6665H11.0918C12.5002 1.6665 12.6085 2.2915 12.7335 3.05817L12.9168 4.1415"
                      stroke="#FF5630"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.7082 7.6167L15.1665 16.0084C15.0748 17.3167 14.9998 18.3334 12.6748 18.3334H7.32484C4.99984 18.3334 4.92484 17.3167 4.83317 16.0084L4.2915 7.6167"
                      stroke="#FF5630"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.6084 13.75H11.3834"
                      stroke="#FF5630"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.9165 10.4165H12.0832"
                      stroke="#FF5630"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Delete
                </div>
                <!-- 3 -->
                <div class="action cursor" @click="viewDoc(done)" v-if="done.resource_type !='pdf'">
                  <svg
                    class="svg-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99994 13.6083C8.00827 13.6083 6.3916 11.9916 6.3916 9.99994C6.3916 8.00827 8.00827 6.3916 9.99994 6.3916C11.9916 6.3916 13.6083 8.00827 13.6083 9.99994C13.6083 11.9916 11.9916 13.6083 9.99994 13.6083ZM9.99994 7.6416C8.69994 7.6416 7.6416 8.69994 7.6416 9.99994C7.6416 11.2999 8.69994 12.3583 9.99994 12.3583C11.2999 12.3583 12.3583 11.2999 12.3583 9.99994C12.3583 8.69994 11.2999 7.6416 9.99994 7.6416Z"
                      fill="#38CB89"
                    />
                    <path
                      d="M9.9999 17.5167C6.86657 17.5167 3.90824 15.6834 1.8749 12.5001C0.991569 11.1251 0.991569 8.8834 1.8749 7.50006C3.91657 4.31673 6.8749 2.4834 9.9999 2.4834C13.1249 2.4834 16.0832 4.31673 18.1166 7.50006C18.9999 8.87506 18.9999 11.1167 18.1166 12.5001C16.0832 15.6834 13.1249 17.5167 9.9999 17.5167ZM9.9999 3.7334C7.30824 3.7334 4.73324 5.35006 2.93324 8.17507C2.30824 9.15006 2.30824 10.8501 2.93324 11.8251C4.73324 14.6501 7.30824 16.2667 9.9999 16.2667C12.6916 16.2667 15.2666 14.6501 17.0666 11.8251C17.6916 10.8501 17.6916 9.15006 17.0666 8.17507C15.2666 5.35006 12.6916 3.7334 9.9999 3.7334Z"
                      fill="#38CB89"
                    />
                  </svg>
                  View
                </div>
                 <a :href="done.filename" target="_blank" v-if="done.resource_type=='pdf'">
                <div class="action">
                  <svg
                    class="svg-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99994 13.6083C8.00827 13.6083 6.3916 11.9916 6.3916 9.99994C6.3916 8.00827 8.00827 6.3916 9.99994 6.3916C11.9916 6.3916 13.6083 8.00827 13.6083 9.99994C13.6083 11.9916 11.9916 13.6083 9.99994 13.6083ZM9.99994 7.6416C8.69994 7.6416 7.6416 8.69994 7.6416 9.99994C7.6416 11.2999 8.69994 12.3583 9.99994 12.3583C11.2999 12.3583 12.3583 11.2999 12.3583 9.99994C12.3583 8.69994 11.2999 7.6416 9.99994 7.6416Z"
                      fill="#38CB89"
                    />
                    <path
                      d="M9.9999 17.5167C6.86657 17.5167 3.90824 15.6834 1.8749 12.5001C0.991569 11.1251 0.991569 8.8834 1.8749 7.50006C3.91657 4.31673 6.8749 2.4834 9.9999 2.4834C13.1249 2.4834 16.0832 4.31673 18.1166 7.50006C18.9999 8.87506 18.9999 11.1167 18.1166 12.5001C16.0832 15.6834 13.1249 17.5167 9.9999 17.5167ZM9.9999 3.7334C7.30824 3.7334 4.73324 5.35006 2.93324 8.17507C2.30824 9.15006 2.30824 10.8501 2.93324 11.8251C4.73324 14.6501 7.30824 16.2667 9.9999 16.2667C12.6916 16.2667 15.2666 14.6501 17.0666 11.8251C17.6916 10.8501 17.6916 9.15006 17.0666 8.17507C15.2666 5.35006 12.6916 3.7334 9.9999 3.7334Z"
                      fill="#38CB89"
                    />
                  </svg>
                  View
                </div>
                 </a>
              </div>
            </div>
          </div>
        </div>
        <!-- mobile -->
        <div class="res_table_cover" v-for="p in pending_docs" :key="p.id">
          <div class="res_table">
            <!-- 1 -->
            <div class="">
              <span class="res_table_label">Document type</span>
              <h6 class="res_table_data">{{p.name}}</h6>
            </div>
            <!-- 2 -->
            <div class="res_table_">
              <!-- <span class="res_table_label">Date of application</span>
              <h6 class="res_table_data">12 JAN, 2021</h6> -->
            </div>
            <!-- 3 -->
            <div class="res_table_">
              <span class="res_table_label">Status</span>
              <div class="pill_p res_info">Pending</div>
            </div>
            <!-- 4 -->
            <div class="res_table_">
              <span class="res_table_label">Action</span>
              <div class="action_cover res_info">
                <!-- 1 -->
                <input  @change="addFile" type="file" style="display:none" :id="p.id.toString()" accept="image/png, image/jpeg, application/pdf">
                <!-- 1 -->
                <div class="action cursor" @click="triggerUpload(p)">
                  <svg
                    class="svg-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.4998 18.9582H7.49984C2.97484 18.9582 1.0415 17.0248 1.0415 12.4998V7.49984C1.0415 2.97484 2.97484 1.0415 7.49984 1.0415H9.1665C9.50817 1.0415 9.7915 1.32484 9.7915 1.6665C9.7915 2.00817 9.50817 2.2915 9.1665 2.2915H7.49984C3.65817 2.2915 2.2915 3.65817 2.2915 7.49984V12.4998C2.2915 16.3415 3.65817 17.7082 7.49984 17.7082H12.4998C16.3415 17.7082 17.7082 16.3415 17.7082 12.4998V10.8332C17.7082 10.4915 17.9915 10.2082 18.3332 10.2082C18.6748 10.2082 18.9582 10.4915 18.9582 10.8332V12.4998C18.9582 17.0248 17.0248 18.9582 12.4998 18.9582Z"
                      fill="#FFAB00"
                    />
                    <path
                      d="M7.08311 14.7415C6.57478 14.7415 6.10811 14.5581 5.76645 14.2248C5.35811 13.8165 5.18311 13.2248 5.27478 12.5998L5.63311 10.0915C5.69978 9.60814 6.01645 8.98314 6.35811 8.64147L12.9248 2.0748C14.5831 0.416471 16.2664 0.416471 17.9248 2.0748C18.8331 2.98314 19.2414 3.90814 19.1581 4.83314C19.0831 5.58314 18.6831 6.31647 17.9248 7.06647L11.3581 13.6331C11.0164 13.9748 10.3914 14.2915 9.90811 14.3581L7.39978 14.7165C7.29145 14.7415 7.18311 14.7415 7.08311 14.7415ZM13.8081 2.95814L7.24145 9.5248C7.08311 9.68314 6.89978 10.0498 6.86645 10.2665L6.50811 12.7748C6.47478 13.0165 6.52478 13.2165 6.64978 13.3415C6.77478 13.4665 6.97478 13.5165 7.21645 13.4831L9.72478 13.1248C9.94145 13.0915 10.3164 12.9081 10.4664 12.7498L17.0331 6.18314C17.5748 5.64147 17.8581 5.15814 17.8998 4.70814C17.9498 4.16647 17.6664 3.59147 17.0331 2.9498C15.6998 1.61647 14.7831 1.99147 13.8081 2.95814Z"
                      fill="#FFAB00"
                    />
                    <path
                      d="M16.5418 8.19173C16.4835 8.19173 16.4251 8.1834 16.3751 8.16673C14.1835 7.55006 12.4418 5.8084 11.8251 3.61673C11.7335 3.2834 11.9251 2.94173 12.2585 2.84173C12.5918 2.75006 12.9335 2.94173 13.0251 3.27506C13.5251 5.05006 14.9335 6.4584 16.7085 6.9584C17.0418 7.05006 17.2335 7.40006 17.1418 7.7334C17.0668 8.01673 16.8168 8.19173 16.5418 8.19173Z"
                      fill="#FFAB00"
                    />
                  </svg>
                  Edit
                </div>

              </div>
            </div>
          </div>
        </div>

    <document-image-viewer/>

  </div>
</template>

<script>
import general_mixin from '@/mixins/general_mixin'
import file_upload_mixin from '@/mixins/file_upload_mixin'
import form_mixin from '@/mixins/form_mixin'
import store_mixin from '@/mixins/store_mixin'
import DocumentImageViewer from '@/components/dashboard/DocumentImageViewer.vue'
  export default {
  components: { DocumentImageViewer },
    // mixins:[store_mixin],
   layout:"dashboard",
    head(){
      return{
        title:'Document'
      }
    },
      mixins:[general_mixin,form_mixin,file_upload_mixin,store_mixin],
      data(){
          return{
              search: '',
              show:false,
              current_file_name:'',
              active_file_name:'',
              view_file:'',
              apploading:false,
              form:{
                filename:'',
                filename_id:'',
                is_uploaded:0,
                resource_type:'',
                upload_id:''
              },
              active_file:''

          }
      },
      computed:{
        logged_user(){},
        pending_docs(){
            let d = this.$store.state.dashboard.pending_documents;
            return d;
        },
        uploaded_docs(){
            let d = this.$store.state.dashboard.uploaded_documents;
            return d;
        },

      },
      methods:{
        triggerUpload(item){
          this.active_file =item;
          this.active_file_name = item.value
          let f = document.getElementById(item.id);
          f.click();

        },
        mapUploadResultToForm(cloud){
          this.form.filename = cloud.secure_url;
          this.form.filename_id = cloud.public_id;
          this.form.resource_type = cloud.format;
          this.form.is_uploaded=1;
          this.form.upload_id = this.active_file.id
        },
        addFile(ev){
          let file = event.target.files[0];
          this.current_file_name=file.name
          if(file.size > 1000000){
            this.$apptoast.error('file size should be less than 1 MB!')
            return ;
          }
          // this.appLoading(true);
            console.log("file:",file)
            // return;
            let cloudname ='profiling_documents/'+ this.user.firstname+'_'+this.user.id;
            this.uploadFileToCloudinary(file,cloudname).then((res)=>{
              console.log(res);
              this.mapUploadResultToForm(res);
              this.$store.dispatch("dashboard/afterUploadSaveFileAction",this.form).then(res=>{
                  // this.appLoading(false);
                  this.$store.dispatch("dashboard/getDocumentListAction");
              })

            }).catch(err=>{
              console.log(err);
              // this.appLoading(false);
            })
        },
        removeFile(item){
              this.$store.dispatch("dashboard/deleteFromCloudinary",item.id).then(res=>{
                //  this.appLoading(false);
                 this.$store.dispatch("dashboard/getDocumentListAction");
              }).catch(err=>{
              console.log(err);
              // this.appLoading(false);
            })

          //  }).catch(err=>{
          //    console.log(err);
          //     this.appLoading(false);
          //  })

        },
        viewDoc(item){

          this.$nuxt.$emit("view_document",{status:true,
          details:{file:item.filename,type:item.resource_type}});
        }
      }

  }
</script>

<style lang="scss" scoped>

</style>
