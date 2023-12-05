<template>
    <table>
        <caption>Transaction list</caption>
        <thead>
            <tr>
                <th>To</th>
                <th>Transferred at</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(t) in transactions" :key="t">
                <td>{{ t.to }}</td>
                <td>{{ formatDate(t.at) }}</td>
                <td>{{ t.amount }}<span class="vue-color">₿</span></td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    props: ['transactions'],
    methods: {
        formatDate(timestamp) {
            return new Date(timestamp).toLocaleDateString();
        }
    }
}
</script>
<style lang="scss" scoped>
table {
    caption {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    border-collapse: collapse;
    text-align: center;
    vertical-align: middle;

    th,
    td {
        // border: 1px solid;
        outline: 1px solid;
        padding: .5rem;
    }

    td {
        font-size: 1.2rem;
    }

    th {
        &:first-child {
            border-radius: .5rem 0 0 0;
        }

        &:last-child {
            border-radius: 0 .5rem 0 0;
        }
    }



    thead {
        background-color: #333;
        color: white;

        th {
            width: 25%;
            font-size: 1.2rem;
            font-weight: 700;


            &:first-child {
                border-inline-end: 0;
            }

            &:nth-child(2) {
                border-inline: 0;
            }

            &:last-child {
                border-inline-start: 0;
            }
        }
    }


    tbody {
        tr:last-child {
            td {

                &:first-child {
                    border-radius: 0 0 0 .5rem;
                }

                &:last-child {
                    border-radius: 0 0 .5rem 0;
                }
            }
        }
    }
}
</style>