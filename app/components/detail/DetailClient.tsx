"use client"

import PageContainer from "../container/PageContainer"

const DetailClient = ({prouduct}:{prouduct:any}) => {
  return (
    <div>
      <PageContainer>

      {prouduct?.name}
      </PageContainer>
    </div>
  )
}

export default DetailClient