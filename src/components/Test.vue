        <div class="language pa-5">
            <v-row
            style="height: 300px"
            class="mt-0"
            >
                  <v-col
                lg="3"
                md="4"
                xs="12"
                pa-0
                v-for="n of data"
                :key="n"
                >
                    <v-card
                    class="mt-12 mr-0"
                    outlined
                    max-width="200"
                    height="200"
                    tile
                    >
                        <v-img
                        class="mx-auto"
                        style="width: 70px; height:auto;"
                        :src="n.image"
                        ></v-img>
                        <v-card-text class="text-center">{{n.language}}</v-card-text>
                        <v-rating
                        :value="n.value"
                        color="yellow darken-3 text-center"
                        dense
                        half-increments
                        readonly
                        ></v-rating>
                    </v-card>
                </v-col>
            </v-row>
        </div>