<template>
    <v-container>
        <form @submit.prevent="onSubmit" enctype="multipart/form-data" method="post">
            <v-row style="min-width: 1500px;">
                <v-col cols="6" class="d-flex flex-column justify-content-center">
                    <h2>제품 정보</h2>
                    <div class="ingredientInfo">
                        <div class="input-group mb-3" style="width: 550px; margin: 10px;">
                            <span style="width: 150px;" class="input-group-text" id="inputGroup-sizing-default">상품번호</span>
                            <input type="text" class="form-control" aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default" :value="product.productId"
                                id="inputGroup-sizing-lg" disabled>
                        </div>
                        <div class="input-group mb-3" style="width: 550px; margin: 10px;">
                            <span style="width: 150px;" class="input-group-text" id="inputGroup-sizing-default">상품명</span>
                            <input type="text" class="form-control" aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default" v-model="title" id="inputGroup-sizing-lg">
                        </div>
                        <div class="input-group mb-3" style="width: 550px; margin: 10px;">
                            <span style="width: 150px;" class="input-group-text" id="inputGroup-sizing-default">가격</span>
                            <input type="text" class="form-control" aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default" v-model="price" id="inputGroup-sizing-lg">
                        </div>
                        <div class="input-group mb-3" style="width: 550px; height: 300px; margin: 10px;">
                            <span style="width: 150px;" class="input-group-text" id="inputGroup-sizing-default">상세정보</span>
                            <input type="text" class="form-control" aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default" v-model="content" id="inputGroup-sizing-lg">
                        </div>
                    </div>
                </v-col>
                <v-col cols="6" class="d-flex flex-column" style="margin-top: 11px;">
                    <h2 style="margin-top:40px">영양소 정보</h2>
                    <div class="ingredientInfo">

                        <v-col cols="12" class="foodInfoGroup">
                            <div class="input-group mb-3" style="width: 250px; margin: 5px;">
                                <span class="input-group-text" id="inputGroup-sizing-default">열량</span>
                                <input type="number" class="form-control" aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-default" v-model="productDetail.calorie"
                                    id="inputGroup-sizing-lg">
                            </div>
                            <div class="input-group mb-3" style="width: 250px; margin: 5px;">
                                <span class="input-group-text" id="inputGroup-sizing-default">탄수화물</span>
                                <input type="number" class="form-control" aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-default" v-model="productDetail.carbohydrate"
                                    id="inputGroup-sizing-lg">
                            </div>
                        </v-col>
                        <v-col cols="12" class="foodInfoGroup">
                            <div class="input-group mb-3" style="width: 250px; margin: 5px;">
                                <span class="input-group-text" id="inputGroup-sizing-default">당류</span>
                                <input type="number" class="form-control" aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-default" v-model="productDetail.sugars"
                                    id="inputGroup-sizing-lg">
                            </div>
                            <div class="input-group mb-3" style="width: 250px; margin: 5px;">
                                <span class="input-group-text" id="inputGroup-sizing-default">단백질</span>
                                <input type="number" class="form-control" aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-default" v-model="productDetail.protein"
                                    id="inputGroup-sizing-lg">
                            </div>
                        </v-col>
                        <v-col cols="12" class="foodInfoGroup">
                            <div class="input-group mb-3" style="width: 250px; margin: 5px;">
                                <span class="input-group-text" id="inputGroup-sizing-default">지방</span>
                                <input type="number" class="form-control" aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-default" v-model="productDetail.fat"
                                    id="inputGroup-sizing-lg">
                            </div>
                            <div class="input-group mb-3" style="width: 250px; margin: 5px;">
                                <span class="input-group-text" id="inputGroup-sizing-default">포화지방</span>
                                <input type="number" class="form-control" aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-default" v-model="productDetail.aturatedFat"
                                    id="inputGroup-sizing-lg">
                            </div>
                        </v-col>
                        <v-col cols="12" class="foodInfoGroup">
                            <div class="input-group mb-3" style="width: 250px; margin: 5px;">
                                <span class="input-group-text" id="inputGroup-sizing-default">나트륨</span>
                                <input type="text" class="form-control" aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-default" v-model="productDetail.natrium"
                                    id="inputGroup-sizing-lg">
                            </div>
                        </v-col>
                    </div>
                </v-col>
                <div class="line" />
            </v-row>
            <v-row style="min-width: 1200px;">
                <v-col cols="6">
                    <span class="ingredientImage">기존 제품사진</span>
                    <div class="d-flex justify-content-center" style="margin-bottom:30px">
                        <div v-for="(imagePath, idx) in product.productImgList" :key="idx" md="3">
                            <img style="width: 150px; height: 150px;"
                                :src="require(`@/assets/product/${imagePath.editedImg}`)" aspect-ratio="1" />
                        </div>
                    </div>
                </v-col>
                <v-col cols="6">
                    <span class="ingredientImage">변경 될 제품사진</span>
                    <div class="d-flex justify-content-center">
                        <div v-for="(url, index) in imageUrls" :key="index" md="3">
                            <img style="width: 150px; height: 150px;" :src="url" :alt="'Image ' + index" aspect-ratio="1" />
                        </div>
                    </div>
                    <v-col>
                        <div class="d-flex justify-content-center">
                            <v-col cols="12">
                                <div class="d-flex justify-content-center">
                                    <div class="input-group mb-3" style="width: 70%;">
                                        <input type="file" class="form-control" id="files" ref="files" multiple
                                            @change="handleFileUpload" aria-describedby="inputGroupFileAddon01">
                                    </div>
                                </div>
                            </v-col>
                        </div>
                    </v-col>
                </v-col>
            </v-row>
            <div class="d-flex justify-content-center" style="margin-top: 50px">
                <v-btn style="background-color: rgb(54, 109, 50); color:white; width: 150px;" type="submit">등록</v-btn>
                <router-link :to="{
                        name: 'ProductReadPage',
                        params: { productId: productId }
                    }">
                    <v-btn style="background-color: red; color:white; width: 150px;">취소</v-btn>
                </router-link>
            </div>
        </form>
    </v-container>
</template>
  
<script>
import axiosInst from '@/utility/axiosObject'

export default {
    name: "ProductModifyForm",
    props: {
        productId: {
            type: String,
            required: true,
        },
        product: {
            type: Object,
            required: true,
        },
        productImgs: {
            type: Array,
        }
    },
    data() {
        return {
            title: '',
            content: '',
            price: 0,
            productDetail: {
                calorie: '',
                carbohydrate: '',
                sugars: '',
                protein: '',
                fat: '',
                aturatedFat: '',
                natrium: '',
            },
            files: '',
            imageUrls: [],
        }
    },
    created() {
        this.title = this.product.title
        this.content = this.product.content
        this.price = this.product.price
        this.productDetail = this.product.productDetail
        console.log("rrrr : " + JSON.stringify(this.product.productDetail))
    },
    methods: {
        onSubmit() {
            let formData = new FormData()

            for (let idx = 0; idx < this.files.length; idx++) {
                formData.append('productImgList', this.files[idx])
            }

            const { title, content, price, productId, productDetail } = this
            let productInfo = {
                title: title,
                content: content,
                price: price,
                productDetail: productDetail
            }

            console.log('productInfo: ' + JSON.stringify(productInfo))

            if (this.files.length == 0) {
                console.log("파일 없이 수정")

                axiosInst.put(`/products/modify-text/${productId}`, productInfo)
                    .then(res => {
                        if (res.data) {
                            alert("수정 완료")
                            this.$router.push('/product-list')
                        }
                    })
                    .catch(() => {
                        alert("수정 오류")
                    })
            } else {
                formData.append(
                    "productInfo",
                    new Blob([JSON.stringify(productInfo)], { type: "application/json" })
                )

                console.log('before emit: ' + files)
                for (let idx = 0, len = files.length; idx < len; idx++) {
                    console.log(files[idx])
                }
                console.log('productId: ' + productId)

                this.$emit('submit', { productId, formData })
            }
        },
        handleFileUpload(event) {
            this.files = event.target.files
            this.imageUrls = Array.from(this.files).map((file) => URL.createObjectURL(file))
        },
    },
    mounted() {
        console.log('modify form - files: ' + this.productImgs)
    }
}

</script>
  
<style scoped>
.input-group-text {
    background-color: #739E42;
    color: white;
    align-items: center;
    text-align: center;
    display: flex;
    justify-content: center;
    width: 100px;
    font-weight: bold;
    font-size: 19px;
}
.ingredientInfo {
    margin-top: 20px;
    margin-left: -11px;
    min-width: 500px;
    align-items: center;
}
.foodInfoGroup {
    display: flex;
    margin-top: -20px;
    align-items: center;
    min-width: 500px;
}
.ingredientImage {
    font-size: 30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
    margin-top: 40px;
    margin-bottom: 30px;
}
.line {
    width: 100%;
    border-bottom: 4px solid #40513B;
    margin-top: 30px;
}
h2 {
    margin-top: 50px;
    margin-bottom: 30px;
    font-weight: bold;
}</style>