<template>
  <div >

     <div class="content_body">
          <p class="hi">Hi {{user.firstname}} 👋🏽</p>
          <h3 class="welcome">Welcome to Houzzley</h3>
      </div>

         <div class="card_container">
          <div class="card_one cursor">
            <div class="card_details">
              <span class="card_one_text">Total loanable amount</span>
              <span class="card_one_fig">{{user.loanable_amount|easy_currency}}</span>
            </div>

            <svg
              class="svg-icon-left "
              width="88"
              height="44"
              viewBox="0 0 88 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 42C2 42 8.02856 -6.1067 23.12 16.1772C38.2114 38.4611 44.24 37.4376 50 20.2278C57.1201 -1.04557 83.3677 17.2715 86 2"
                stroke="url(#paint0_linear)"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="-1.36002"
                  y1="47.0633"
                  x2="71.0343"
                  y2="-13.3175"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div style="height: 100%; margin-right: -3px;">
              <div
                style="left: 0; margin-right: -10px; margin-top: 5px;"
                tabindex="0"
                data-bs-toggle="popover"
                data-bs-trigger="focus"
                data-bs-placement="bottom"
                data-bs-content="Here is some helpful explainer text to assist the user in understanding what Total loanable amount  is all about"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99998 1.04183C14.9416 1.04183 18.9583 5.0585 18.9583 10.0002C18.9583 14.9418 14.9416 18.9585 9.99998 18.9585C5.05831 18.9585 1.04165 14.9418 1.04165 10.0002C1.04165 5.05849 5.05831 1.04183 9.99998 1.04183ZM9.99998 17.7085C14.25 17.7085 17.7083 14.2502 17.7083 10.0002C17.7083 5.75016 14.25 2.29183 9.99998 2.29183C5.74998 2.29183 2.29165 5.75016 2.29165 10.0002C2.29165 14.2502 5.74998 17.7085 9.99998 17.7085Z"
                    fill="white"
                  />
                  <path
                    d="M10 8.54183C10.3417 8.54183 10.625 8.82516 10.625 9.16683L10.625 13.3335C10.625 13.6752 10.3417 13.9585 10 13.9585C9.65833 13.9585 9.375 13.6752 9.375 13.3335L9.375 9.16683C9.375 8.82516 9.65833 8.54183 10 8.54183Z"
                    fill="white"
                  />
                  <path
                    d="M9.99998 5.8331C10.1083 5.8331 10.2166 5.8581 10.3166 5.89977C10.4166 5.94144 10.5083 5.99977 10.5916 6.07477C10.6666 6.15811 10.725 6.24144 10.7666 6.34977C10.8083 6.44977 10.8333 6.5581 10.8333 6.66644C10.8333 6.77477 10.8083 6.88311 10.7666 6.98311C10.725 7.08311 10.6666 7.17477 10.5916 7.25811C10.5083 7.33311 10.4166 7.39144 10.3166 7.43311C10.1166 7.51644 9.88331 7.51644 9.68331 7.43311C9.58331 7.39144 9.49165 7.33311 9.40831 7.25811C9.33331 7.17477 9.27498 7.08311 9.23331 6.9831C9.19165 6.8831 9.16665 6.77477 9.16665 6.66644C9.16665 6.5581 9.19165 6.44977 9.23331 6.34977C9.27498 6.24144 9.33331 6.15811 9.40831 6.07477C9.49165 5.99977 9.58331 5.94144 9.68331 5.89977C9.78331 5.8581 9.89165 5.8331 9.99998 5.8331Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div @click="showChekclistModal"
            class="card_two"
            style="box-shadow: 0px 12px 16px rgba(17, 17, 17, 0.04)"
          >
            <div class="card_details" style="margin-right: 20px">
              <span class="card_two_text">Monthly Repayment</span>
              <span class="card_two_fig">{{user.monthly_repayment|easy_currency}}</span>
            </div>
            <svg
              class="svg-icon-left"
              width="50"
              height="46"
              viewBox="0 0 50 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="44.0736"
                y="45.5703"
                width="45.5705"
                height="5.33286"
                rx="2.66643"
                transform="rotate(-90 44.0736 45.5703)"
                fill="#E9EDF7"
              />
              <rect
                x="44.0736"
                y="45.5703"
                width="10.8668"
                height="5.33286"
                rx="2.66643"
                transform="rotate(-90 44.0736 45.5703)"
                fill="#006633"
              />
              <!-- 4C89B5 -->
              <rect
                x="29.5549"
                y="45.5703"
                width="45.5705"
                height="5.33281"
                rx="2.66641"
                transform="rotate(-90 29.5549 45.5703)"
                fill="#E9EDF7"
              />
              <rect
                x="29.5549"
                y="45.5703"
                width="41.364"
                height="5.33287"
                rx="2.66643"
                transform="rotate(-90 29.5549 45.5703)"
                fill="#006633"
              />
              <rect
                x="15.0368"
                y="45.5703"
                width="45.5705"
                height="5.33286"
                rx="2.66643"
                transform="rotate(-90 15.0368 45.5703)"
                fill="#E9EDF7"
              />
              <rect
                x="15.0368"
                y="45.5703"
                width="31.5488"
                height="5.33287"
                rx="2.66643"
                transform="rotate(-90 15.0368 45.5703)"
                fill="#006633"
              />
              <rect
                x="0.518799"
                y="45.5703"
                width="45.5705"
                height="5.33287"
                rx="2.66644"
                transform="rotate(-90 0.518799 45.5703)"
                fill="#E9EDF7"
              />
              <rect
                x="0.518799"
                y="45.5703"
                width="23.4863"
                height="5.33287"
                rx="2.66643"
                transform="rotate(-90 0.518799 45.5703)"
                fill="#006633"
              />
            </svg>
          </div>
          <div
            class="card_two"
            style="box-shadow: 0px 12px 16px rgba(17, 17, 17, 0.04)"
          >
            <svg
              class="svg-icon-right"
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="28" cy="28" r="28" fill="#F4F7FE" />
              <path
                d="M20.2842 24.3132H20.5579C21.6115 24.3132 22.4736 25.1753 22.4736 26.229V35.8078C22.4736 36.8615 21.6115 37.7236 20.5579 37.7236H20.2842C19.2305 37.7236 18.3684 36.8615 18.3684 35.8078V26.229C18.3684 25.1753 19.2305 24.3132 20.2842 24.3132ZM27.9472 18.5659C29.0009 18.5659 29.863 19.428 29.863 20.4817V35.8078C29.863 36.8615 29.0009 37.7236 27.9472 37.7236C26.8936 37.7236 26.0315 36.8615 26.0315 35.8078V20.4817C26.0315 19.428 26.8936 18.5659 27.9472 18.5659ZM35.6103 29.5131C36.664 29.5131 37.526 30.3752 37.526 31.4289V35.8078C37.526 36.8615 36.664 37.7236 35.6103 37.7236C34.5566 37.7236 33.6945 36.8615 33.6945 35.8078V31.4289C33.6945 30.3752 34.5566 29.5131 35.6103 29.5131Z"
                fill="#006633"
              />
            </svg>
            <div class="card_details" style="margin-left: 20px">
              <span class="card_two_text">Monthly income</span>
              <span class="card_two_fig">{{user.monthly_net_pay|easy_currency}}</span>
            </div>
          </div>
          <div class="card_three" style="cursor: pointer" @click.prevent="applyMortgage">
            <!--  data-bs-target="#mortgage" -->
            <div
              class="card_details"
              style="margin-left: 20px"


            >
              <span class="card_three_label">Click</span>
              <span class="card_three_text">{{have_mortgage?'View Application':' Complete Application'}} <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.22 21.6298C13.04 21.6298 11.37 20.7998 10.05 16.8298L9.33 14.6698L7.17 13.9498C3.21 12.6298 2.38 10.9598 2.38 9.77983C2.38 8.60983 3.21 6.92983 7.17 5.59983L15.66 2.76983C17.78 2.05983 19.55 2.26983 20.64 3.34983C21.73 4.42983 21.94 6.20983 21.23 8.32983L18.4 16.8198C17.07 20.7998 15.4 21.6298 14.22 21.6298ZM7.64 7.02983C4.86 7.95983 3.87 9.05983 3.87 9.77983C3.87 10.4998 4.86 11.5998 7.64 12.5198L10.16 13.3598C10.38 13.4298 10.56 13.6098 10.63 13.8298L11.47 16.3498C12.39 19.1298 13.5 20.1198 14.22 20.1198C14.94 20.1198 16.04 19.1298 16.97 16.3498L19.8 7.85983C20.31 6.31983 20.22 5.05983 19.57 4.40983C18.92 3.75983 17.66 3.67983 16.13 4.18983L7.64 7.02983Z" fill="white"/>
                <path d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z" fill="white"/>
                </svg>
                </span>
            </div>
          </div>
        </div>

        <!-- mortgage-application -->

        <!-- end mortgage-application -->

        <div class="cr_cover">
          <!-- 1 -->
          <user-request/>
          <!-- 2 -->
         <document-upload/>
        </div>

        <!-- <div class="card_container2">
          <div class="card_one_white">
            <div class="card_details_white">
              <div>
                <span class="card_one_text_white">Equity finance</span>
              </div>
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99998 1.04183C14.9416 1.04183 18.9583 5.0585 18.9583 10.0002C18.9583 14.9418 14.9416 18.9585 9.99998 18.9585C5.05831 18.9585 1.04165 14.9418 1.04165 10.0002C1.04165 5.05849 5.05831 1.04183 9.99998 1.04183ZM9.99998 17.7085C14.25 17.7085 17.7083 14.2502 17.7083 10.0002C17.7083 5.75016 14.25 2.29183 9.99998 2.29183C5.74998 2.29183 2.29165 5.75016 2.29165 10.0002C2.29165 14.2502 5.74998 17.7085 9.99998 17.7085Z"
                    fill="#C1C7D0"
                  />
                  <path
                    d="M10 8.54183C10.3417 8.54183 10.625 8.82516 10.625 9.16683L10.625 13.3335C10.625 13.6752 10.3417 13.9585 10 13.9585C9.65833 13.9585 9.375 13.6752 9.375 13.3335L9.375 9.16683C9.375 8.82516 9.65833 8.54183 10 8.54183Z"
                    fill="#C1C7D0"
                  />
                  <path
                    d="M9.99998 5.8331C10.1083 5.8331 10.2166 5.8581 10.3166 5.89977C10.4166 5.94144 10.5083 5.99977 10.5916 6.07477C10.6666 6.15811 10.725 6.24144 10.7666 6.34977C10.8083 6.44977 10.8333 6.5581 10.8333 6.66644C10.8333 6.77477 10.8083 6.88311 10.7666 6.98311C10.725 7.08311 10.6666 7.17477 10.5916 7.25811C10.5083 7.33311 10.4166 7.39144 10.3166 7.43311C10.1166 7.51644 9.88331 7.51644 9.68331 7.43311C9.58331 7.39144 9.49165 7.33311 9.40831 7.25811C9.33331 7.17477 9.27498 7.08311 9.23331 6.9831C9.19165 6.8831 9.16665 6.77477 9.16665 6.66644C9.16665 6.5581 9.19165 6.44977 9.23331 6.34977C9.27498 6.24144 9.33331 6.15811 9.40831 6.07477C9.49165 5.99977 9.58331 5.94144 9.68331 5.89977C9.78331 5.8581 9.89165 5.8331 9.99998 5.8331Z"
                    fill="#C1C7D0"
                  />
                </svg>
              </div>
            </div>
            <p class="card_white_p">
              Sed lorem turpis tellus, nisl, vel quis rhoncus purus quis.
            </p>
            <div>
              <span class="coming_s">Coming soon>></span>
            </div>
          </div>
          <div class="card_one_white">
            <div class="card_details_white">
              <div>
                <span class="card_one_text_white">Equity finance</span>
              </div>
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99998 1.04183C14.9416 1.04183 18.9583 5.0585 18.9583 10.0002C18.9583 14.9418 14.9416 18.9585 9.99998 18.9585C5.05831 18.9585 1.04165 14.9418 1.04165 10.0002C1.04165 5.05849 5.05831 1.04183 9.99998 1.04183ZM9.99998 17.7085C14.25 17.7085 17.7083 14.2502 17.7083 10.0002C17.7083 5.75016 14.25 2.29183 9.99998 2.29183C5.74998 2.29183 2.29165 5.75016 2.29165 10.0002C2.29165 14.2502 5.74998 17.7085 9.99998 17.7085Z"
                    fill="#C1C7D0"
                  />
                  <path
                    d="M10 8.54183C10.3417 8.54183 10.625 8.82516 10.625 9.16683L10.625 13.3335C10.625 13.6752 10.3417 13.9585 10 13.9585C9.65833 13.9585 9.375 13.6752 9.375 13.3335L9.375 9.16683C9.375 8.82516 9.65833 8.54183 10 8.54183Z"
                    fill="#C1C7D0"
                  />
                  <path
                    d="M9.99998 5.8331C10.1083 5.8331 10.2166 5.8581 10.3166 5.89977C10.4166 5.94144 10.5083 5.99977 10.5916 6.07477C10.6666 6.15811 10.725 6.24144 10.7666 6.34977C10.8083 6.44977 10.8333 6.5581 10.8333 6.66644C10.8333 6.77477 10.8083 6.88311 10.7666 6.98311C10.725 7.08311 10.6666 7.17477 10.5916 7.25811C10.5083 7.33311 10.4166 7.39144 10.3166 7.43311C10.1166 7.51644 9.88331 7.51644 9.68331 7.43311C9.58331 7.39144 9.49165 7.33311 9.40831 7.25811C9.33331 7.17477 9.27498 7.08311 9.23331 6.9831C9.19165 6.8831 9.16665 6.77477 9.16665 6.66644C9.16665 6.5581 9.19165 6.44977 9.23331 6.34977C9.27498 6.24144 9.33331 6.15811 9.40831 6.07477C9.49165 5.99977 9.58331 5.94144 9.68331 5.89977C9.78331 5.8581 9.89165 5.8331 9.99998 5.8331Z"
                    fill="#C1C7D0"
                  />
                </svg>
              </div>
            </div>
            <p class="card_white_p">
              Sed lorem turpis tellus, nisl, vel quis rhoncus purus quis.
            </p>
            <div>
              <span class="coming_s">Coming soon>></span>
            </div>
          </div>
          <div class="card_one_white">
            <div class="card_details_white">
              <div>
                <span class="card_one_text_white">Equity finance</span>
              </div>
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99998 1.04183C14.9416 1.04183 18.9583 5.0585 18.9583 10.0002C18.9583 14.9418 14.9416 18.9585 9.99998 18.9585C5.05831 18.9585 1.04165 14.9418 1.04165 10.0002C1.04165 5.05849 5.05831 1.04183 9.99998 1.04183ZM9.99998 17.7085C14.25 17.7085 17.7083 14.2502 17.7083 10.0002C17.7083 5.75016 14.25 2.29183 9.99998 2.29183C5.74998 2.29183 2.29165 5.75016 2.29165 10.0002C2.29165 14.2502 5.74998 17.7085 9.99998 17.7085Z"
                    fill="#C1C7D0"
                  />
                  <path
                    d="M10 8.54183C10.3417 8.54183 10.625 8.82516 10.625 9.16683L10.625 13.3335C10.625 13.6752 10.3417 13.9585 10 13.9585C9.65833 13.9585 9.375 13.6752 9.375 13.3335L9.375 9.16683C9.375 8.82516 9.65833 8.54183 10 8.54183Z"
                    fill="#C1C7D0"
                  />
                  <path
                    d="M9.99998 5.8331C10.1083 5.8331 10.2166 5.8581 10.3166 5.89977C10.4166 5.94144 10.5083 5.99977 10.5916 6.07477C10.6666 6.15811 10.725 6.24144 10.7666 6.34977C10.8083 6.44977 10.8333 6.5581 10.8333 6.66644C10.8333 6.77477 10.8083 6.88311 10.7666 6.98311C10.725 7.08311 10.6666 7.17477 10.5916 7.25811C10.5083 7.33311 10.4166 7.39144 10.3166 7.43311C10.1166 7.51644 9.88331 7.51644 9.68331 7.43311C9.58331 7.39144 9.49165 7.33311 9.40831 7.25811C9.33331 7.17477 9.27498 7.08311 9.23331 6.9831C9.19165 6.8831 9.16665 6.77477 9.16665 6.66644C9.16665 6.5581 9.19165 6.44977 9.23331 6.34977C9.27498 6.24144 9.33331 6.15811 9.40831 6.07477C9.49165 5.99977 9.58331 5.94144 9.68331 5.89977C9.78331 5.8581 9.89165 5.8331 9.99998 5.8331Z"
                    fill="#C1C7D0"
                  />
                </svg>
              </div>
            </div>
            <p class="card_white_p">
              Sed lorem turpis tellus, nisl, vel quis rhoncus purus quis.
            </p>
            <div>
              <span class="coming_s">Coming soon>></span>
            </div>
          </div>
          <div class="card_one_white" style="margin-right: 0px">
            <div class="card_details_white">
              <div>
                <span class="card_one_text_white">Equity finance</span>
              </div>
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99998 1.04183C14.9416 1.04183 18.9583 5.0585 18.9583 10.0002C18.9583 14.9418 14.9416 18.9585 9.99998 18.9585C5.05831 18.9585 1.04165 14.9418 1.04165 10.0002C1.04165 5.05849 5.05831 1.04183 9.99998 1.04183ZM9.99998 17.7085C14.25 17.7085 17.7083 14.2502 17.7083 10.0002C17.7083 5.75016 14.25 2.29183 9.99998 2.29183C5.74998 2.29183 2.29165 5.75016 2.29165 10.0002C2.29165 14.2502 5.74998 17.7085 9.99998 17.7085Z"
                    fill="#C1C7D0"
                  />
                  <path
                    d="M10 8.54183C10.3417 8.54183 10.625 8.82516 10.625 9.16683L10.625 13.3335C10.625 13.6752 10.3417 13.9585 10 13.9585C9.65833 13.9585 9.375 13.6752 9.375 13.3335L9.375 9.16683C9.375 8.82516 9.65833 8.54183 10 8.54183Z"
                    fill="#C1C7D0"
                  />
                  <path
                    d="M9.99998 5.8331C10.1083 5.8331 10.2166 5.8581 10.3166 5.89977C10.4166 5.94144 10.5083 5.99977 10.5916 6.07477C10.6666 6.15811 10.725 6.24144 10.7666 6.34977C10.8083 6.44977 10.8333 6.5581 10.8333 6.66644C10.8333 6.77477 10.8083 6.88311 10.7666 6.98311C10.725 7.08311 10.6666 7.17477 10.5916 7.25811C10.5083 7.33311 10.4166 7.39144 10.3166 7.43311C10.1166 7.51644 9.88331 7.51644 9.68331 7.43311C9.58331 7.39144 9.49165 7.33311 9.40831 7.25811C9.33331 7.17477 9.27498 7.08311 9.23331 6.9831C9.19165 6.8831 9.16665 6.77477 9.16665 6.66644C9.16665 6.5581 9.19165 6.44977 9.23331 6.34977C9.27498 6.24144 9.33331 6.15811 9.40831 6.07477C9.49165 5.99977 9.58331 5.94144 9.68331 5.89977C9.78331 5.8581 9.89165 5.8331 9.99998 5.8331Z"
                    fill="#C1C7D0"
                  />
                </svg>
              </div>
            </div>
            <p class="card_white_p">
              Sed lorem turpis tellus, nisl, vel quis rhoncus purus quis.
            </p>
            <div>
              <span class="coming_s">Coming soon>></span>
            </div>
          </div>
        </div> -->


  </div>
</template>

<script>
  import store_mixin from '@/mixins/store_mixin'
import DocumentUpload from '@/components/dashboard/DocumentUpload.vue';
import UserRequest from '@/components/dashboard/UserRequest.vue';
import MortgageApplicationModal from '../../components/dashboard/MortgageApplicationModal.vue';
  export default {
  components: { DocumentUpload,UserRequest},
    mixins:[store_mixin],
    layout:"dashboard",
    head(){
      return{
        title:'Dashboard'
      }
    },
    computed:{

      mortgage_status_data(){
        let m =  this.$store.state.mortgage.mortgage_status;
        this.mortgage_status = m;
      },
      document_count(){
        let d = this.$store.state.dashboard.document_count;
        return d;
      },
      have_mortgage(){
        let p = this.user.has_profile
        let m = this.user.have_apply_for_mortgage;
        if(p==1 && m==1){
          return true
        }
        return false;
      },
    },
    methods:{
      applyMortgage(){
        if(this.have_mortgage){
          // return this.$apptoast.success("You have a pending mortgage application")
         return this.$router.push("/dashboard/application")
        }
        // return this.$nuxt.$emit('apply_mortgage',true)
          return this.$router.push("/dashboard/profile")
      },
      showChekclistModal(){
        let user = this.$store.state.auth.user;
          if(user.have_apply_for_mortgage ==1 && user.checklist.length >0){
              // this.$nuxt.$emit("show_checklist_modal",true);
          }

      }
    },
    mounted(){
      this.showChekclistModal();
    }




  }
</script>

<style lang="scss" scoped>
.card_one{
  background: linear-gradient(135deg, $secondary 0%, $green_lighten_six 100%);
}
.card_three{
  background: $primary;
}
</style>
